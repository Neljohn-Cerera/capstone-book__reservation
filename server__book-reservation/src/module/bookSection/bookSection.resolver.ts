import { databaseError } from '../../utils/databaseError';
import { updateEntity } from '../../utils/updateEntity';
import { validateBookSectionArgs } from './bookSection.validate';
import { BookSectionArgs } from './bookSection.args';
import { BookSection } from '../../entities/BookSection';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { BookSectionResponse } from './bookSection.response';

@Resolver()
export class BookSectionResolver {
  //Retrieve BookSection
  @Query(() => [BookSection])
  async bookSection(): Promise<BookSection[]> {
    return await BookSection.find();
  }
  // Insert BookSection
  @Mutation(() => BookSectionResponse)
  async createBookSection(
    @Arg('input') { section }: BookSectionArgs
  ): Promise<BookSectionResponse> {
    // input validation
    const errors = validateBookSectionArgs({ section });
    if (errors) {
      return { errors, isSucess: false };
    }
    // database insertion
    const _section = await BookSection.create({ section }).save();
    return { section: _section, isSucess: true };
  }
  // Delete BookSection
  @Mutation(() => Boolean)
  async deleteBookSection(@Arg('id') id: number): Promise<Boolean> {
    const isBookSectionDeleted = await BookSection.delete(id);
    if (!isBookSectionDeleted) {
      return false;
    }
    return true;
  }
  // Delete all BookSection
  @Mutation(() => Boolean)
  async deleteAllBookSection(): Promise<Boolean> {
    const allBookSectionDeleted = await BookSection.delete({});
    if (!allBookSectionDeleted) {
      return false;
    }
    return true;
  }
  // Update BookSection
  @Mutation(() => BookSectionResponse)
  async updateBookSection(
    @Arg('id') id: number,
    @Arg('input') dataInput: BookSectionArgs
  ): Promise<BookSectionResponse> {
    const { section } = dataInput;
    // input validation
    const errors = validateBookSectionArgs({ section });
    if (errors) {
      return { errors, isSucess: false };
    }
    try {
      const bookSection = await updateEntity(id, BookSection, dataInput);

      if (!bookSection) {
        return {
          errors: [
            {
              field: 'bookSectionId',
              message: 'bookSection not found',
            },
          ],
          isSucess: false,
        };
      }
      return { section: bookSection, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }
}
