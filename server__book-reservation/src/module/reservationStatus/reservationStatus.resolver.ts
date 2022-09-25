import { ReservationStatus } from './../../entities/ReservationStatus';
import { ReservationStatusArgs } from './reservationStatus.args';
import { updateEntity } from './../../utils/updateEntity';
import { databaseError } from './../../utils/databaseError';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { ReservationStatusResponse } from './reservationStatus.response';
import { validateReservationStatusArgs } from './reservationStatus.validate';

@Resolver()
export class ReservationStatusResolver {
  //Retrieve ReservationStatus
  @Query(() => [ReservationStatus])
  async reservationStatus(): Promise<ReservationStatus[]> {
    return await ReservationStatus.find();
  }
  // Insert ReservationStatus
  @Mutation(() => ReservationStatusResponse)
  async createReservationStatus(
    @Arg('input') { status }: ReservationStatusArgs
  ): Promise<ReservationStatusResponse> {
    // input validation
    const errors = validateReservationStatusArgs({ status });
    if (errors) {
      return { errors, isSucess: false };
    }
    // database insertion
    const reservationStatus = await ReservationStatus.create({ status }).save();
    return { reservationStatus, isSucess: true };
  }
  // Delete ReservationStatus
  @Mutation(() => Boolean)
  async deleteReservationStatus(@Arg('id') id: number): Promise<Boolean> {
    const isReservationStatusDeleted = await ReservationStatus.delete(id);
    if (!isReservationStatusDeleted) {
      return false;
    }
    return true;
  }
  // Delete all ReservationStatus
  @Mutation(() => Boolean)
  async deleteAllReservationStatus(): Promise<Boolean> {
    const allReservationStatusDeleted = await ReservationStatus.delete({});
    if (!allReservationStatusDeleted) {
      return false;
    }
    return true;
  }
  // Update ReservationStatus
  @Mutation(() => ReservationStatusResponse)
  async updateReservationStatus(
    @Arg('id') id: number,
    @Arg('input') dataInput: ReservationStatusArgs
  ): Promise<ReservationStatusResponse> {
    const { status } = dataInput;
    // input validation
    const errors = validateReservationStatusArgs({ status });
    if (errors) {
      return { errors, isSucess: false };
    }
    try {
      const reservationStatus = await updateEntity(
        id,
        ReservationStatus,
        dataInput
      );

      if (!reservationStatus) {
        return {
          errors: [
            {
              field: 'reservationStatusId',
              message: 'reservationStatusId not found',
            },
          ],
          isSucess: false,
        };
      }
      return { reservationStatus, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }
}
