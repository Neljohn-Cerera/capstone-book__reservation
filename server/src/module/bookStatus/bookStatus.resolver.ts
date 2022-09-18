import { databaseError } from './../../utils/databaseError';
import { updateEntity } from './../../utils/updateEntity';
import { BookStatusArgs } from './bookStatus.args';
import { BookStatus } from './../../entities/BookStatus';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { BookStatusResponse } from './bookStatus.response';
import { validateBookStatusArgs } from './bookStatus.validate';

@Resolver()
export class BookStatusResolver {
  //Retrieve Authors
  @Query(() => [BookStatus])
  async bookStatus(): Promise<BookStatus[]> {
    return await BookStatus.find();
  }
  // Insert Author
  @Mutation(() => BookStatusResponse)
  async createBookStatus(
    @Arg('input') { status }: BookStatusArgs
  ): Promise<BookStatusResponse> {
    // input validation
    const errors = validateBookStatusArgs({ status });
    if (errors) {
      return { errors, isSucess: false };
    }
    // database insertion
    const _status = await BookStatus.create({ status }).save();
    return { status: _status, isSucess: true };
  }
  // Delete Author
  @Mutation(() => Boolean)
  async deleteBookStatus(@Arg('id') id: number): Promise<Boolean> {
    const isAuthorDeleted = await BookStatus.delete(id);
    if (!isAuthorDeleted) {
      return false;
    }
    return true;
  }
  // Delete author
  @Mutation(() => Boolean)
  async deleteAllBookStatus(): Promise<Boolean> {
    const allAuthorsDeleted = await BookStatus.delete({});
    if (!allAuthorsDeleted) {
      return false;
    }
    return true;
  }
  // Update author
  @Mutation(() => BookStatusResponse)
  async updateBookStatus(
    @Arg('id') id: number,
    @Arg('input') dataInput: BookStatusArgs
  ): Promise<BookStatusResponse> {
    const { status } = dataInput;
    // input validation
    const errors = validateBookStatusArgs({ status });
    if (errors) {
      return { errors, isSucess: false };
    }
    try {
      const _status = await updateEntity(id, BookStatus, dataInput);

      if (!_status) {
        return {
          errors: [
            {
              field: 'statusId',
              message: 'status not found',
            },
          ],
          isSucess: false,
        };
      }
      return { status: _status, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }
}
