import { validateBookAuthorArgs } from './bookAuthor.validate';
import { databaseError } from './../../utils/databaseError';
import { updateEntity } from './../../utils/updateEntity';
import { BookAuthorArgs } from './bookAuthor.args';
import { BookAuthor } from './../../entities/BookAuthor';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { BookAuthorResponse } from './bookAuthor.response';

@Resolver()
export class BookAuthorResolver {
  //Retrieve Authors
  @Query(() => [BookAuthor])
  async authors(): Promise<BookAuthor[]> {
    return await BookAuthor.find();
  }
  // Insert Author
  @Mutation(() => BookAuthorResponse)
  async createAuthor(
    @Arg('input') { author }: BookAuthorArgs
  ): Promise<BookAuthorResponse> {
    // input validation
    const errors = validateBookAuthorArgs({ author });
    if (errors) {
      return { errors, isSucess: false };
    }
    // database insertion
    const _author = await BookAuthor.create({ author }).save();
    return { author: _author, isSucess: true };
  }
  // Delete Author
  @Mutation(() => Boolean)
  async deleteAuthor(@Arg('id') id: number): Promise<Boolean> {
    const isAuthorDeleted = await BookAuthor.delete(id);
    if (!isAuthorDeleted) {
      return false;
    }
    return true;
  }
  // Delete author
  @Mutation(() => Boolean)
  async deleteAllAuthor(): Promise<Boolean> {
    const allAuthorsDeleted = await BookAuthor.delete({});
    if (!allAuthorsDeleted) {
      return false;
    }
    return true;
  }
  // Update author
  @Mutation(() => BookAuthorResponse)
  async updateAuthor(
    @Arg('id') id: number,
    @Arg('input') dataInput: BookAuthorArgs
  ): Promise<BookAuthorResponse> {
    const { author } = dataInput;
    // input validation
    const errors = validateBookAuthorArgs({ author });
    if (errors) {
      return { errors, isSucess: false };
    }
    try {
      const _author = await updateEntity(id, BookAuthor, dataInput);

      if (!_author) {
        return {
          errors: [
            {
              field: 'autorId',
              message: 'author not found',
            },
          ],
          isSucess: false,
        };
      }
      return { author: _author, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }
}
