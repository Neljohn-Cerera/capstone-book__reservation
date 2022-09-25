import { updateEntity } from './../../utils/updateEntity';
import { databaseError } from './../../utils/databaseError';
import { BookTypeArgs } from './bookType.args';
import { BookType } from './../../entities/BookType';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { BookTypeResponse } from './bookType.response';
import { validateBookTypeArgs } from './bookType.validate';

@Resolver()
export class BookTypeResolver {
  //Retrieve Authors
  @Query(() => [BookType])
  async bookTypes(): Promise<BookType[]> {
    return await BookType.find();
  }
  // Insert Booktype
  @Mutation(() => BookTypeResponse)
  async createBookType(
    @Arg('input') { type }: BookTypeArgs
  ): Promise<BookTypeResponse> {
    // input validation
    const errors = validateBookTypeArgs({ type });
    if (errors) {
      return { errors, isSucess: false };
    }
    // database insertion
    const bookType = await BookType.create({ type }).save();
    return { bookType, isSucess: true };
  }
  // Delete Booktype
  @Mutation(() => Boolean)
  async deleteBookType(@Arg('id') id: number): Promise<Boolean> {
    const isBookTypeDeleted = await BookType.delete(id);
    if (!isBookTypeDeleted) {
      return false;
    }
    return true;
  }
  // Delete all bookType
  @Mutation(() => Boolean)
  async deleteAllBookType(): Promise<Boolean> {
    const allBookTypesDeleted = await BookType.delete({});
    if (!allBookTypesDeleted) {
      return false;
    }
    return true;
  }
  // Update author
  @Mutation(() => BookTypeResponse)
  async updateBookType(
    @Arg('id') id: number,
    @Arg('input') dataInput: BookTypeArgs
  ): Promise<BookTypeResponse> {
    const { type } = dataInput;
    // input validation
    const errors = validateBookTypeArgs({ type });
    if (errors) {
      return { errors, isSucess: false };
    }
    try {
      const bookType = await updateEntity(id, BookType, dataInput);

      if (!bookType) {
        return {
          errors: [
            {
              field: 'bookTypeId',
              message: 'booktype not found',
            },
          ],
          isSucess: false,
        };
      }
      return { bookType, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }
}
