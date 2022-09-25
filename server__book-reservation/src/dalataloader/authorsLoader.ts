import { BookAuthor } from './../entities/BookAuthor';
import { Books_Authors } from './../entities/Books_Authors';
import DataLoader from 'dataloader';
import { In } from 'typeorm';

const batchAuthors = async (bookIds: number[]) => {
  const authorsBooks = await Books_Authors.find({
    join: {
      alias: 'books_authors',
      innerJoinAndSelect: {
        bookCategory: 'books_authors.bookAuthor',
      },
    },
    where: {
      bookId: In(bookIds),
    },
  });

  const bookIdToAuthors: { [key: number]: BookAuthor[] } = {};

  authorsBooks.forEach((ab) => {
    if (ab.bookId in bookIdToAuthors) {
      bookIdToAuthors[ab.bookId].push((ab as any).__bookAuthor__);
    } else {
      bookIdToAuthors[ab.bookId] = [(ab as any).__bookAuthor__];
    }
  });

  return bookIds.map((bookId) => bookIdToAuthors[bookId]);
};

export const authorsLoader = () => new DataLoader(batchAuthors as any);
