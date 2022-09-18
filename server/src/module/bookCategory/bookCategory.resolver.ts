import { validateBookCategoryArgs } from './bookCategory.validate';
import { BookCategoryArgs } from './bookCategory.args';
import { BookCategory } from '../../entities/BookCategory';
import { databaseError } from '../../utils/databaseError';
import { updateEntity } from '../../utils/updateEntity';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { BookCategoryResponse } from './bookCategory.response';

@Resolver()
export class BookCategoryResolver {
  //Retrieve all BookCategory
  @Query(() => [BookCategory])
  async bookCategories(): Promise<BookCategory[]> {
    return await BookCategory.find();
  }
  // Insert BookCategory
  @Mutation(() => BookCategoryResponse)
  async createBookCategory(
    @Arg('input') { category }: BookCategoryArgs
  ): Promise<BookCategoryResponse> {
    // input validation
    const errors = validateBookCategoryArgs({ category });
    if (errors) {
      return { errors, isSucess: false };
    }
    // database insertion
    const _category = await BookCategory.create({ category }).save();
    return { category: _category, isSucess: true };
  }
  // Delete BookCategory
  @Mutation(() => Boolean)
  async deleteBookCategory(@Arg('id') id: number): Promise<Boolean> {
    const isPublisherDeleted = await BookCategory.delete(id);
    if (!isPublisherDeleted) {
      return false;
    }
    return true;
  }
  // Delete all BookCategory
  @Mutation(() => Boolean)
  async deleteAllBookCategory(): Promise<Boolean> {
    const allPublisherDeleted = await BookCategory.delete({});
    if (!allPublisherDeleted) {
      return false;
    }
    return true;
  }
  // Update BookCategory
  @Mutation(() => BookCategoryResponse)
  async updateBookCategory(
    @Arg('id') id: number,
    @Arg('input') dataInput: BookCategoryArgs
  ): Promise<BookCategoryResponse> {
    const { category } = dataInput;
    // input validation
    const errors = validateBookCategoryArgs({ category });
    if (errors) {
      return { errors, isSucess: false };
    }
    try {
      const _category = await updateEntity(id, BookCategory, dataInput);

      if (!_category) {
        return {
          errors: [
            {
              field: 'bookCategory',
              message: 'Category not found',
            },
          ],
          isSucess: false,
        };
      }
      return { category: _category, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }
}
