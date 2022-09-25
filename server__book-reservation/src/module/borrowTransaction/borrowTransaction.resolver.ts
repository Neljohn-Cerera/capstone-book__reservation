import { Settings } from "./../../entities/Settings";
import { BorrowTransaction } from "./../../entities/BorrowTransaction";
import { updateEntity } from "./../../utils/updateEntity";
import { Arg, Query, Resolver, Int } from "type-graphql";
import { datasource } from "../../db";
import {
  BorrowTransactionProps,
  BorrowTransactionResponse,
} from "./borrowTransaction.response";

@Resolver()
export class BorrowTransactionResolver {
  /**
   * Retrieving of all BorrowTransactions Data.
   * This Query is use in web - client
   * @param {page} number Offset.
   * @param {perPage} number Limit.
   * @param {filterByNameOrByTitle} string Filter by User FirstName or book title.
   * @param {status} string BorrowTransaction status includes 'BORROWED' | 'RETURNED' | 'OVERDUE' | 'LOST'.
   * @return {[BorrowTransaction]} an array of BorrowTransaction Entity.
   */
  @Query(() => [BorrowTransactionProps])
  async borrowTransaction(
    @Arg("page", () => Int) page: number,
    @Arg("perPage", () => Int) perPage: number,
    @Arg("filterByNameOrByTitle") filterByNameOrByTitle: string,
    @Arg("status") status: string
  ): Promise<BorrowTransactionProps[] | null> {
    let borrowTransaction: BorrowTransactionProps[] = [];
    let borrowRaw: BorrowTransactionProps[] = [];
    try {
      await datasource.manager.transaction(async (tm) => {
        const rawData = await tm.query(
          `
      SELECT "borrowTransaction"."id",
      DATE_PART('day',"borrowTransaction"."returnDate"::timestamp - CURRENT_DATE) as "remainingdays" 
      FROM "borrowTransaction" 
      INNER JOIN "borrowTransactionStatus" "borrowTransactionStatus"
      ON "borrowTransactionStatus"."id"="borrowTransaction"."borrowTransactionStatusId" 
      WHERE "borrowTransactionStatus"."status" = 'BORROWED' OR "borrowTransactionStatus"."status" = 'OVERDUE'
      `
        );
        // returndate - currentdate = if -number means curentdate is greater than return date
        if (rawData) {
          await Promise.all(
            rawData.map(async (borrow: any) => {
              if (borrow.remainingdays < 0) {
                const settings = await Settings.findOne({ where: { id: 1 } });
                const bookFine = Math.abs(borrow.remainingdays);
                if (settings) {
                  const fine = bookFine * settings?.fine;
                  // 4 = BORROWED, 3 = RETURNED, 2 = OVERDUE, 1 = LOST  { NEW }
                  await updateEntity(borrow.id, BorrowTransaction, {
                    borrowTransactionStatusId: 2,
                    fine,
                  } as BorrowTransaction);
                }
              }
            })
          );
        }
      });
      borrowRaw = await datasource.query(
        `
      SELECT "borrowTransaction"."id","borrowTransaction"."qrCode","borrowTransaction".
      "borrowDate","borrowTransaction"."returnDate","borrowTransaction"."fine","borrowTransaction"."paymentStatus",
      DATE_PART('day',"borrowTransaction"."returnDate"::timestamp - CURRENT_DATE) as "remainingDays",
      "user"."id" as "userId","user"."idNumber","user"."firstName","user"."middleName","user"."lastName",
      "book"."bookId","book"."accountNumber","book"."title",
      "borrowTransactionStatus"."status",
      (SELECT "bookSection"."section" FROM "bookSection" WHERE "bookSection"."id" = "book"."sectionId") as "section" 
      FROM "borrowTransaction" 
      INNER JOIN "user" "user" ON "user"."id"="borrowTransaction"."userId"
      INNER JOIN "book" "book" ON "book"."id"="borrowTransaction"."bookId"
      INNER JOIN "borrowTransactionStatus" "borrowTransactionStatus"
      ON "borrowTransactionStatus"."id"="borrowTransaction"."borrowTransactionStatusId" 
      WHERE "user"."firstName" ILIKE $1 AND "borrowTransactionStatus"."status" = $2 OFFSET $3 LIMIT $4
      `,
        [`%${filterByNameOrByTitle}%`, status, (page - 1) * perPage, perPage]
      );
    } catch (error) {
      console.log("borrow transaction query error : ", error);
    }
    borrowTransaction = borrowRaw;
    return borrowTransaction;
  }

  /**
   * Retrieving BorrowTransactions of specific user.
   * This Query is use in android - client
   * @param {page} number Offset.
   * @param {perPage} number Limit.
   * @param {userId} string filter with specific userid
   * @param {status} string BorrowTransaction status includes 'BORROWED' | 'RETURNED' | 'OVERDUE' | 'LOST'.
   * @return {[BorrowTransaction]} an array of BorrowTransaction Entity.
   */
  @Query(() => [BorrowTransactionProps])
  async userBorrowTransaction(
    @Arg("page", () => Int) page: number,
    @Arg("perPage", () => Int) perPage: number,
    @Arg("userId", () => Int) userId: number,
    @Arg("status") status: string
  ): Promise<BorrowTransactionProps[] | null> {
    let borrowTransaction: BorrowTransactionProps[] = [];
    let borrowRaw: BorrowTransactionProps[] = [];
    try {
      await datasource.manager.transaction(async (tm) => {
        const rawData = await tm.query(
          `
      SELECT "borrowTransaction"."id","user"."id" as "userId",
      DATE_PART('day',"borrowTransaction"."returnDate"::timestamp - CURRENT_DATE) as "remainingDays" 
      FROM "borrowTransaction" 
      INNER JOIN "user" "user" ON "user"."id"="borrowTransaction"."userId" 
      INNER JOIN "borrowTransactionStatus" "borrowTransactionStatus" 
      ON "borrowTransactionStatus"."id"="borrowTransaction"."borrowTransactionStatusId" 
      WHERE "borrowTransactionStatus"."status" = 'BORROWED' OR "borrowTransactionStatus"."status" = 'OVERDUE' AND "user"."id" = $1
      `,
          [userId]
        );
        // returndate - currentdate = if -number means curentdate is greater than return date
        if (rawData) {
          await Promise.all(
            rawData.map(async (borrow: any) => {
              if (borrow.remainingDays < 0) {
                const bookFine = Math.abs(borrow.remainingDays);
                // 4 = BORROWED, 3 = RETURNED, 2 = OVERDUE, 1 = LOST
                await updateEntity(borrow.id, BorrowTransaction, {
                  borrowTransactionStatusId: 2,
                  fine: bookFine,
                } as BorrowTransaction);
              }
            })
          );
        }
      });
      borrowRaw = await datasource.query(
        `
      SELECT "borrowTransaction"."id","borrowTransaction"."qrCode","borrowTransaction".
      "borrowDate","borrowTransaction"."returnDate","borrowTransaction"."fine",
      DATE_PART('day',"borrowTransaction"."returnDate"::timestamp - CURRENT_DATE) as "remainingDays",
      "user"."id" as "userId","user"."idNumber","user"."firstName","user"."middleName","user"."lastName",
      "book"."bookId","book"."accountNumber","book"."title",
      "borrowTransactionStatus"."status",
      (SELECT "bookSection"."section" FROM "bookSection" WHERE "bookSection"."id" = "book"."sectionId") as "section" 
      FROM "borrowTransaction" 
      INNER JOIN "user" "user" ON "user"."id"="borrowTransaction"."userId"
      INNER JOIN "book" "book" ON "book"."id"="borrowTransaction"."bookId"
      INNER JOIN "borrowTransactionStatus" "borrowTransactionStatus"
      ON "borrowTransactionStatus"."id"="borrowTransaction"."borrowTransactionStatusId" 
      WHERE "user"."id" = $1 AND "borrowTransactionStatus"."status" = $2 OFFSET $3 LIMIT $4
      `,
        [userId, status, (page - 1) * perPage, perPage]
      );
    } catch (error) {
      console.log("borrow transaction query error : ", error);
    }
    borrowTransaction = borrowRaw;
    return borrowTransaction;
  }

  @Query(() => BorrowTransactionResponse)
  async returnBookScanQr(
    @Arg("qrCode") qrCode: string
  ): Promise<BorrowTransactionResponse> {
    let borrowRaw = [];
    // validate qrcode with uuid format
    const validateUUID =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    if (!validateUUID.test(qrCode)) {
      return {
        message: "Borrow Transaction is not valid",
        isSucess: false,
      };
    }

    try {
      Promise.all(
        (borrowRaw = await datasource.query(
          `
      SELECT "borrowTransaction"."id","borrowTransaction"."qrCode",
      "borrowDate","borrowTransaction"."returnDate","borrowTransaction"."fine",
      "user"."idNumber","user"."firstName","user"."middleName","user"."lastName",
      "book"."bookId","book"."accountNumber","book"."title",
      "borrowTransactionStatus"."status" 
      FROM "borrowTransaction" 
      INNER JOIN "user" "user" ON "user"."id"="borrowTransaction"."userId"
      INNER JOIN "book" "book" ON "book"."id"="borrowTransaction"."bookId"
      INNER JOIN "borrowTransactionStatus" "borrowTransactionStatus"
      ON "borrowTransactionStatus"."id"="borrowTransaction"."borrowTransactionStatusId" 
      WHERE "borrowTransaction"."qrCode" = $1 LIMIT 1
      `,
          [qrCode]
        ))
      );
    } catch (error) {
      console.log("borrow transaction scan qr error : ", error);
    }
    if (borrowRaw.length === 0) {
      return {
        message: "Borrower does not exist",
        isSucess: false,
      };
    }
    if (borrowRaw[0].status === "OVERDUE") {
      return {
        message:
          "This borrowed is overdue. Please pay the fine to proceed returning.",
        isSucess: false,
      };
    }
    if (borrowRaw[0].status === "RETURNED") {
      return {
        message: "This borrowed transaction was already done.",
        isSucess: false,
      };
    }
    if (borrowRaw[0].status === "BORROWED") {
      try {
        // 4 = BORROWED, 3 = RETURNED, 2 = OVERDUE, 1 = LOST
        const updateBorrowed = await updateEntity(
          borrowRaw[0].id,
          BorrowTransaction,
          {
            borrowTransactionStatusId: 3,
            paymentStatus: "PAID",
          } as BorrowTransaction
        );

        if (!updateBorrowed) {
          return { isSucess: false, message: "Returned book Not Successfull" };
        }
      } catch (error) {
        console.log("returnBookScanQr update borrowstatus error : ", error);
      }
    }

    return {
      borrowTransaction: borrowRaw[0],
      message: "Returned Book Successfull",
      isSucess: true,
    };
  }
}
