import { validateBorrowTransactionStatusArgs } from './borrowTransactionStatus.validate';
import { BorrowTransactionStatus } from './../../entities/BorrowTransactionStatus';
import { BorrowTransactionStatusArgs } from './borrowTransactionStatus.args';
import { updateEntity } from './../../utils/updateEntity';
import { databaseError } from './../../utils/databaseError';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { BorrowTransactionStatusResponse } from './borrowTransactionStatus.response';

@Resolver()
export class BorrowTransactionStatusResolver {
  // Retrieve BorrowTransactionStatus
  @Query(() => [BorrowTransactionStatus])
  async borrowTransactionStatus(): Promise<BorrowTransactionStatus[] | null> {
    return await BorrowTransactionStatus.find();
  }
  // Insert BorrowTransactionStatus
  @Mutation(() => BorrowTransactionStatusResponse)
  async createBorrowTransactionStatus(
    @Arg('input') { status }: BorrowTransactionStatusArgs
  ): Promise<BorrowTransactionStatusResponse> {
    // input validation
    const errors = validateBorrowTransactionStatusArgs({ status });
    if (errors) {
      return { errors, isSucess: false };
    }
    // database insertion
    const borrowTransactionStatus = await BorrowTransactionStatus.create({
      status,
    }).save();
    return { borrowTransactionStatus, isSucess: true };
  }
  // Delete BorrowTransactionStatus
  @Mutation(() => Boolean)
  async deleteBorrowTransactionStatus(@Arg('id') id: number): Promise<Boolean> {
    const isBorrowTransactionStatusDeleted =
      await BorrowTransactionStatus.delete(id);
    if (!isBorrowTransactionStatusDeleted) {
      return false;
    }
    return true;
  }
  // Delete all BorrowTransactionStatus
  @Mutation(() => Boolean)
  async deleteAllBorrowTransactionStatus(): Promise<Boolean> {
    const allBorrowTransactionStatusDeleted =
      await BorrowTransactionStatus.delete({});
    if (!allBorrowTransactionStatusDeleted) {
      return false;
    }
    return true;
  }
  // Update BorrowTransactionStatus
  @Mutation(() => BorrowTransactionStatusResponse)
  async updateBorrowTransactionStatus(
    @Arg('id') id: number,
    @Arg('input') dataInput: BorrowTransactionStatusArgs
  ): Promise<BorrowTransactionStatusResponse> {
    const { status } = dataInput;
    // input validation
    const errors = validateBorrowTransactionStatusArgs({ status });
    if (errors) {
      return { errors, isSucess: false };
    }
    try {
      const borrowTransactionStatus = await updateEntity(
        id,
        BorrowTransactionStatus,
        dataInput
      );

      if (!borrowTransactionStatus) {
        return {
          errors: [
            {
              field: 'borrowTransactionStatusId',
              message: 'borrowTransactionStatusId not found',
            },
          ],
          isSucess: false,
        };
      }
      return { borrowTransactionStatus, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }
}
