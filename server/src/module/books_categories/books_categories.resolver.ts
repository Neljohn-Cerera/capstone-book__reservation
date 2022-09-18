import { getConnection } from 'typeorm';
import { Books_Categories } from '../../entities/Books_Categories';
import { BookCategory } from './../../entities/BookCategory';
import { Book } from './../../entities/Book';
import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';

const connection = getConnection();

@Resolver()
export class BooksCategoriesResolver {
  // add category to a book
  @Mutation(() => Boolean)
  async addCategoryToBook(
    @Arg('bookId') bookId: string,
    @Arg('categories', () => [String]) categories: string[]
  ): Promise<Boolean> {
    const book = await Book.findOne({ bookId });
    if (!book) return false;
    categories.map(async (category) => {
      const _category = await BookCategory.findOne({ category });
      if (!_category) {
        // if categry is not found we'll create category
        const newCategory = await BookCategory.create({ category }).save();
        // insert into books_categories
        await Books_Categories.create({
          bookId: book.id,
          bookCategoryId: newCategory?.id,
        }).save();
      } else {
        // if category is found,  retrieve its category id
        // insert into books_categories
        await Books_Categories.create({
          bookCategoryId: _category?.id,
          bookId: book.id,
        }).save();
      }
      return;
    });

    return true;
  }

  // remove category from book
  @Mutation(() => Boolean)
  async removeCategoryFromBook(
    @Arg('bookId', () => Int) bookId: number,
    @Arg('bookCategoryId', () => Int) bookCategoryId: number
  ): Promise<Boolean> {
    const removeCategory = await connection
      .createQueryBuilder()
      .delete()
      .from(Books_Categories)
      .where('bookId = :bookId and bookCategoryId = :bookCategoryId', {
        bookId: bookId,
        bookCategoryId: bookCategoryId,
      })
      .execute();

    console.log('removeCategory : ', removeCategory);
    if (removeCategory.affected === 0) {
      return false;
    }

    return true;
  }

  @Query(() => [Books_Categories])
  async books_categories(): Promise<Books_Categories[] | null> {
    return await Books_Categories.find();
  }
}
