import { updateEntity } from './../../utils/updateEntity';
import { databaseError } from './../../utils/databaseError';
import { BookGroupUniqueIdentity } from './../../entities/BookGroupUniqueIdentity';
import { Books_Authors } from './../../entities/Books_Authors';
import { BookAuthor } from './../../entities/BookAuthor';
import { getConnection } from 'typeorm';
import { Books_Categories } from '../../entities/Books_Categories';
import { BookCategory } from './../../entities/BookCategory';
import { BookArgs } from './book.args';
import { insertForeignEntity } from './../../utils/insertForeignEntity';
import { BookType } from './../../entities/BookType';
import { FieldNotFoundError } from './../../utils/fieldNotFoundError';
import { BookStatus } from './../../entities/BookStatus';
import { BookSection } from './../../entities/BookSection';
import { Book } from './../../entities/Book';
import { Resolver, Query, Mutation, Arg, Int } from 'type-graphql';
import {
  BookResponse,
  GetAllBooksGroupResponse,
  GetAllBooksResponse,
} from './book.response';
import { nanoid } from 'nanoid';

const connection = getConnection();

@Resolver()
export class BookResolver {
  // retrieve books
  @Query(() => GetAllBooksResponse)
  async getAllBooks(
    @Arg('page', () => Int) page: number,
    @Arg('perPage', () => Int) perPage: number,
    @Arg('filterByTitle') filterByTitle: string
  ): Promise<GetAllBooksResponse | null> {
    try {
      const bookRepo = connection.getRepository(Book);
      const books = await bookRepo
        .createQueryBuilder('book')
        .innerJoinAndSelect('book.section', 'section')
        .innerJoinAndSelect('book.status', 'status')
        .innerJoinAndSelect('book.bookType', 'bookType')
        .where('book.title ILIKE :title', {
          title: `%${filterByTitle}%`,
        })
        .offset((page - 1) * perPage)
        .limit(perPage)
        .orderBy('book.title', 'ASC')
        .getMany();

      const count = await bookRepo.count();

      return { books, count, isSucess: true };
    } catch (error) {
      return {
        errors: [
          {
            field: 'database error',
            message: `error : ${error}`,
          },
        ],
        isSucess: false,
      };
    }
  }

  @Query(() => GetAllBooksGroupResponse)
  async getAllBooksGroupByTitle(
    @Arg('page', () => Int) page: number,
    @Arg('perPage', () => Int) perPage: number,
    @Arg('filterByTitle') filterByTitle: string,
    @Arg('status') status: string
  ): Promise<GetAllBooksGroupResponse | null> {
    try {
      const bookRepo = connection.getRepository(Book);

      // books
      const books = await bookRepo
        .createQueryBuilder('book')
        .select([
          'book.groupUniqueIdentityId as id',
          'book.title as title',
          'book.isbnNumber as "isbnNumber"',
          'book.publisher as "publisher"',
          'book.placeOfPublication as "placeOfPublication"',
          'book.copyRightYear as "copyRightYear"',
          'COUNT(book.title) as copies',
          'book.dewyDecimal as "dewyDecimal"',
        ])
        .addSelect(['section.section'])
        .addSelect(['status.status'])
        .addSelect(['bookType.type'])
        .innerJoinAndSelect('book.section', 'section')
        .innerJoinAndSelect('book.status', 'status')
        .innerJoinAndSelect('book.bookType', 'bookType')
        .where('book.title ILIKE :title', {
          title: `%${filterByTitle}%`,
        })
        .andWhere('status.status = :status', { status: status })
        .offset((page - 1) * perPage)
        .limit(perPage)
        .groupBy('book.title')
        .addGroupBy('book.isbnNumber')
        .addGroupBy('book.publisher')
        .addGroupBy('book.placeOfPublication')
        .addGroupBy('book.copyRightYear')
        .addGroupBy('book.groupUniqueIdentityId')
        .addGroupBy('book.dewyDecimal')
        .addGroupBy('section.id')
        .addGroupBy('status.id')
        .addGroupBy('bookType.id')
        .getRawMany();

      return { books: books, count: books.length, isSucess: true };
    } catch (error) {
      return {
        errors: [
          {
            field: 'database error',
            message: `error : ${error}`,
          },
        ],
        isSucess: false,
      };
    }
  }

  // create book
  @Mutation(() => BookResponse)
  async createBook(
    @Arg('input') inputData: BookArgs,
    @Arg('categories', () => [String]) categories: string[],
    @Arg('authors', () => [String]) authors: string[],
    @Arg('section') section: string,
    @Arg('status') status: string,
    @Arg('bookType') type: string
  ): Promise<BookResponse> {
    const queryRunner = connection.createQueryRunner();
    await queryRunner.connect();
    // validate book section
    const bookSection = await BookSection.findOne({ section });
    if (!bookSection) {
      const errors = FieldNotFoundError('bookSectionId', 'book section');
      return { errors, isSucess: false };
    }
    // validate book status
    const bookStatus = await BookStatus.findOne({ status });
    if (!bookStatus) {
      const errors = FieldNotFoundError('bookStatusId', 'book status');
      return { errors, isSucess: false };
    }
    // validate book type
    const bookType = await BookType.findOne({ type });
    if (!bookType) {
      const errors = FieldNotFoundError('bookTypeId', 'book type');
      return { errors, isSucess: false };
    }
    // validate bookGroupUniqueIdentity
    const findGroupTitle = await BookGroupUniqueIdentity.findOne({
      where: { groupTitle: inputData.title },
    });
    console.log('findGroupTitle : ', findGroupTitle);

    // if bookGroupUniqueIdentity not found create bookGroupUniqueIdentity
    let createGroupTitle;
    if (!findGroupTitle) {
      createGroupTitle = await BookGroupUniqueIdentity.create({
        groupUniqueIdentity: nanoid(10),
        groupTitle: inputData.title,
      }).save();
    }
    console.log('createGroupTitle : ', createGroupTitle);

    // transaction start
    await queryRunner.startTransaction();

    try {
      // insert book
      const book: Book = await insertForeignEntity(Book, {
        sectionId: bookSection?.id,
        statusId: bookStatus?.id,
        bookTypeId: bookType?.id,
        groupUniqueIdentityId: findGroupTitle
          ? findGroupTitle.id
          : createGroupTitle?.id,
        ...inputData,
      } as Book);

      // mapping  categories
      categories.map(async (category) => {
        const _category = await BookCategory.findOne({ category });
        if (!_category) {
          // if categry is not found we'll create category
          const newCategory = await BookCategory.create({ category }).save();
          // insert into books_categories
          await Books_Categories.create({
            bookCategoryId: newCategory?.id,
            bookId: book.id,
          } as Books_Categories).save();
        } else {
          // if category is found,  retrieve its category id
          // insert into books_categories
          await Books_Categories.create({
            bookCategoryId: _category?.id,
            bookId: book?.id,
          } as Books_Categories).save();
        }
        return;
      });
      // mapping  authors
      authors.map(async (author) => {
        const _author = await BookAuthor.findOne({ author });
        if (!_author) {
          // if author is not found we'll create author
          const newAuthor = await BookAuthor.create({ author }).save();
          // insert into books_authors
          await Books_Authors.create({
            bookId: book?.id,
            bookAuthorId: newAuthor?.id,
          } as Books_Authors).save();
        } else {
          // if author is found,  retrieve its _author id
          // insert into books_authors
          await Books_Authors.create({
            bookId: book?.id,
            bookAuthorId: _author?.id,
          } as Books_Authors).save();
        }
        return;
      });
      return { book, isSucess: true };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        errors: [
          {
            field: 'database',
            message: `database error : ${error}`,
          },
        ],
      };
    } finally {
      await queryRunner.release();
    }
  }
  // Delete Book
  @Mutation(() => Boolean)
  async deleteBook(@Arg('id', () => Int) id: number): Promise<Boolean> {
    const isBookDeleted = await Book.delete(id);
    if (!isBookDeleted) {
      return false;
    }
    return true;
  }

  @Query(() => [Books_Authors])
  async books_authors(): Promise<Books_Authors[] | null> {
    return await Books_Authors.find();
  }

  @Mutation(() => BookResponse)
  async updateBookAvailability(
    @Arg('id') id: number,
    @Arg('status') status: string
  ): Promise<BookResponse> {
    try {
      const _status = await BookStatus.findOne({ where: { status: status } });
      if (!_status) {
        return {
          errors: [
            {
              field: 'status',
              message: 'book status not found',
            },
          ],
          isSucess: false,
        };
      }
      const book = await updateEntity(id, Book, { statusId: _status?.id });
      if (!book) {
        return {
          errors: [
            {
              field: 'bookId',
              message: 'book not found',
            },
          ],
          isSucess: false,
        };
      }
      return { book, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }
}
