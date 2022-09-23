import { User } from "./../../entities/User";
import { BorrowTransaction } from "./../../entities/BorrowTransaction";
import { Book } from "./../../entities/Book";
import { ReservationStatus } from "./../../entities/ReservationStatus";
import { databaseError } from "./../../utils/databaseError";
import { updateEntity } from "./../../utils/updateEntity";
import { ReservationsArgs } from "./reservations.args";
import { Reservations } from "./../../entities/Reservations";
import { Arg, Mutation, Query, Resolver, Int } from "type-graphql";
import {
  CreateReservationResponse,
  ReservationsResponse,
} from "./reservations.response";
import { datasource } from "../../db";

const queryRunner = datasource.createQueryRunner();
const { manager } = queryRunner;

@Resolver()
export class ReservationsResolver {
  /**
   * Book Reservation QRCode Scanning.
   * Expired - If reservation expires cannot procceed , also means this reservations was already been transacted
   * !Reservation - Reservation not exist
   * PENDING - Reservation needs to be approve first by libraru staff
   * DISAPPROVED - Reservation was rejeted for some reasons
   * APPROVED - Create BorrowTransaction Then Update the Reservations expire = true
   *
   * @param {qrCode} string This is a unique identification for every reservation transaction.
   * @return {ReservationsResponse} includes borrowtransaction , isSuccess, errors,
   * message - a helper information which indicates the status of reservation upon scaning the QrCode
   */
  @Query(() => ReservationsResponse)
  async reservationScanQr(
    @Arg("qrCode") qrCode: string
  ): Promise<ReservationsResponse> {
    // find Reservations qith qrCo

    // validate qrcode with uuid format
    const validateUUID =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    if (!validateUUID.test(qrCode)) {
      return {
        message: "Reservations is not valid",
        isSucess: false,
      };
    }
    try {
      const reservations = await Reservations.findOne({
        join: {
          alias: "reservations",
          innerJoinAndSelect: {
            reservationStatus: "reservations.reservationStatus",
          },
        },
        where: {
          qrCode,
        },
      });

      // If reseervation was already been made , expired = true
      if (reservations?.expired) {
        return {
          message: "Reservation was already expired",
          isSucess: false,
        };
      }
      // If Reservation not found
      if (!reservations) {
        return {
          message: "Reservation does not exist",
          isSucess: false,
        };
      }
      // If Reservation Status is PENDING
      if (reservations?.reservationStatus?.status === "PENDING") {
        return {
          message: "Reservation was not yet APROVE",
          isSucess: false,
        };
      }
      // If Reservation Status is DISAPPROVED
      if (reservations?.reservationStatus?.status === "DISAPPROVED") {
        return { message: "Reservation was DISAPPROVED", isSucess: false };
      }
      // If Reservation Status is APPROVED
      if (reservations?.reservationStatus?.status === "APPROVED") {
        // Connection Setup
        await queryRunner.connect();
        const book = await manager
          .getRepository(Book)
          .createQueryBuilder("book")
          .select([
            "book.id",
            "book.accountNumber",
            "book.bookId",
            "book.title",
          ])
          .innerJoinAndSelect("book.section", "section")
          .where("book.id = :id", {
            id: reservations.bookId,
          })
          .getOne();
        const user = await manager
          .getRepository(User)
          .createQueryBuilder("user")
          .select([
            "user.id",
            "user.idNumber",
            "user.firstName",
            "user.middleName",
            "user.lastName",
          ])
          .where("user.id = :id", {
            id: reservations.userId,
          })
          .getOne();
        // If book is find
        if (book) {
          let returnDate = new Date();
          let borrowTransaction;
          // If Circulation borrowdate add 3 days before returning
          if (book?.section.section === "Circulation") {
            returnDate.setDate(returnDate.getDate() + 3);
          } else if (book?.section.section === "Filipiniana") {
            // If Filipiniana borrowdate add 2 days before returning
            returnDate.setDate(returnDate.getDate() + 2);
          }
          borrowTransaction = await manager
            .getRepository(BorrowTransaction)
            .createQueryBuilder()
            .insert()
            .into(BorrowTransaction)
            .values({
              bookId: book?.id,
              userId: reservations.userId,
              borrowDate: new Date(),
              returnDate: returnDate,
              // 1 = BORROWED, 2 = RETURNED 3 = OVERDUE, 4 = LOST
              borrowTransactionStatusId: 1,
            })
            .returning("*")
            .execute()
            .then((response) => {
              return response.raw[0];
            });
          // Update Reservation Expiration = TRUE
          await updateEntity(reservations.id, Reservations, {
            expired: true,
          } as Reservations);

          borrowTransaction = {
            ...borrowTransaction,
            book,
            user,
            borrowTransactionStatus: {
              id: 1,
              status: "BORROWED",
            },
          };
          return {
            borrowTransaction,
            message: "Borrow Successfull",
            isSucess: true,
          };
        }
      }
    } catch (error) {
      console.log("reservations error : ", error);
    }
    return { isSucess: true };
  }
  /**
   * Retrieving of Book Reservations Data.
   *
   * @param {page} number Offset.
   * @param {perPage} number Limit.
   * @param {filterByName} string Filter by User FirstName.
   * @param {status} string Reservation status includes 'PENDING' | 'APPROVED' | 'DISAPPROVED.
   * @return {[Reservations]} an array of Reservations Entity.
   */
  @Query(() => [Reservations])
  async reservations(
    @Arg("page", () => Int) page: number,
    @Arg("perPage", () => Int) perPage: number,
    @Arg("filterByName") filterByName: string,
    @Arg("status") status: string
  ): Promise<Reservations[] | null> {
    const reservationsRepo = datasource.getRepository(Reservations);
    const reservations = await reservationsRepo
      .createQueryBuilder("reservations")
      .innerJoinAndSelect("reservations.user", "user")
      .innerJoinAndSelect("reservations.book", "book")
      .innerJoinAndSelect("reservations.reservationStatus", "reservationStatus")
      .where("user.firstName ILIKE :name", {
        name: `%${filterByName}%`,
      })
      .andWhere("reservationStatus.status = :status", {
        status,
      })
      .offset((page - 1) * perPage)
      .limit(perPage)
      .orderBy("user.firstName", "ASC")
      .getMany();

    return reservations;
  }
  /**
   * Retrieving of Book Reservations for specific user.
   *
   * @param {page} number Offset.
   * @param {perPage} number Limit.
   * @param {userId} string retrieve reservation base on userId.
   * @param {status} string Reservation status includes 'PENDING' | 'APPROVED' | 'DISAPPROVED.
   * @return {[Reservations]} an array of Reservations Entity.
   */
  @Query(() => [Reservations])
  async userReservations(
    @Arg("page", () => Int) page: number,
    @Arg("perPage", () => Int) perPage: number,
    @Arg("userId", () => Int) userId: number,
    @Arg("status") status: string
  ): Promise<Reservations[] | null> {
    const reservationsRepo = datasource.getRepository(Reservations);
    const reservations = await reservationsRepo
      .createQueryBuilder("reservations")
      .innerJoinAndSelect("reservations.user", "user")
      .innerJoinAndSelect("reservations.book", "book")
      .innerJoinAndSelect("reservations.reservationStatus", "reservationStatus")
      .where("user.id = :userId", {
        userId: userId,
      })
      .andWhere("reservationStatus.status = :status", {
        status,
      })
      .offset((page - 1) * perPage)
      .limit(perPage)
      .getMany();

    return reservations;
  }

  /**
   * Book Reservation.
   * Step 1 - Map the inputs
   * Step 2 - Retrive book, base on every input.book
   * Step 3 - If book has AVAILABLE create reservation else book NOT AVAILABLE cannot proceed reservation
   * Step 4 - Update book status from AVAILABLE to NOT AVAILABLE for every book reservation
   *
   * @param {input} number an array of input which includes book(the book title) and userId.
   * @return {CreateReservationResponse} an array of errors and array of reservations.
   */
  @Mutation(() => CreateReservationResponse)
  async createReservations(
    @Arg("input", () => [ReservationsArgs]) input: ReservationsArgs[]
  ): Promise<CreateReservationResponse> {
    // States
    const newReservations: any[] = [];
    const errors: any[] = [];
    // Connection Setup
    await queryRunner.connect();
    // Mapping input fields
    // Using promise to return newReservations values
    await Promise.all(
      input.map(async function (val) {
        // Retrieving book id base on input book title and Status = AVAILABLE
        // Checking availability of the book
        const book = await manager
          .getRepository(Book)
          .createQueryBuilder("book")
          .select([
            "book.id",
            "book.bookId",
            "book.accountNumber",
            "book.isbnNumber",
            "book.title",
          ])
          .innerJoinAndSelect("book.status", "status")
          .where("book.title = :title", { title: val.title })
          .andWhere("status.status = :status", {
            status: "AVAILABLE",
          })
          .getOne();
        const user = await User.findOne({ where: { id: val.userId } });
        const reservationStatus = await ReservationStatus.findOne({
          where: { status: "PENDING" },
        });
        // If book ${val.book} is available,  proceed reservation =>
        if (book) {
          const dt = new Date(Date.now());
          // try catch for evading server crashed
          try {
            // Book Reservation
            // Getting the userId from input
            // Getting the book id from book retrieving data
            // ReservationStatusId 3 = PENDING
            let reservations;
            reservations = await manager
              .getRepository(Reservations)
              .createQueryBuilder()
              .insert()
              .into(Reservations)
              .values({
                userId: val.userId,
                bookId: book?.id,
                bookDateIdentity: `${dt
                  .toDateString()
                  .split(" ")
                  .join("")}-user${val.userId}-${val.title
                  .split(" ")
                  .join("")}`,
                // 3 for PENDING
                reservationStatusId: 3,
                details: "Waiting for approval ....",
              })
              .returning("*")
              .execute()
              .then((result) => {
                return result.raw[0];
              });
            // After the reservation
            // Update the availabilty of the chosen book
            // To NOT AVAILABLE
            await updateEntity(reservations.bookId, Book, {
              statusId: 2,
            });
            reservations = {
              ...reservations,
              user,
              book,
              reservationStatus,
            };
            // Push the reserve book to newReservations array variable
            newReservations.push(reservations);
          } catch (error) {
            // if book is borrow within the same day
            // Send error for duplication
            if (error && error?.detail?.includes("already exists")) {
              return errors.push({
                field: "bookDateIdentity",
                message: `You already had your reservation of book ${val.title} within this day.`,
              });
            }
          }
        }
        // If all books is NOT AVAILABLE
        // Reservation with this book ${val.book} is imposible
        else {
          return errors.push({
            field: "book",
            message:
              `Book ${val.title} is Not Available. ` +
              "Reasons : This book was already in your reservations or All copies of this book has been borrowed.",
          });
        }
        return;
      })
    );

    return { reservations: newReservations, errors };
  }
  /**
   * Update Status of Reservation.
   * This will be done only from library staff
   *
   * @param {status} string Will be APPROVED | DISAPPROVED.
   * @param {details} string This will come from library staff for reserve status information  .
   * @param {id} number Primary key of Reservations Entity.
   * @return {ReservationsResponse} includes reservation, errors, isSuccess .
   */
  @Mutation(() => ReservationsResponse)
  async updateReservations(
    @Arg("status") status: string,
    @Arg("details") details: string,
    @Arg("id", () => Int) id: number
  ): Promise<ReservationsResponse> {
    try {
      let reservations;
      const reservationStatus = await ReservationStatus.findOne({
        where: { status },
      });

      reservations = await updateEntity(id, Reservations, {
        details,
        reservationStatusId: reservationStatus?.id,
      } as Reservations);

      const user = await User.findOne({ where: { id: reservations.userId } });
      const book = await Book.findOne({ where: { id: reservations.bookId } });

      reservations = {
        ...reservations,
        user,
        book,
        reservationStatus,
      };

      if (!reservations) {
        return {
          errors: [
            {
              field: "reservationsId",
              message: "reservation not found",
            },
          ],
          isSucess: false,
        };
      }
      return { reservations, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }

  @Mutation(() => Boolean)
  async deleteBorrowTransaction(@Arg("id") id: number): Promise<Boolean> {
    const isDeleted = await BorrowTransaction.delete(id);
    if (!isDeleted) {
      return false;
    }
    return true;
  }
}
