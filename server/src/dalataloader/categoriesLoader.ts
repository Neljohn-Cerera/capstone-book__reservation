import { BookCategory } from './../entities/BookCategory';
import { Books_Categories } from '../entities/Books_Categories';
import DataLoader from 'dataloader';
import { In } from 'typeorm';

const batchCategories = async (bookIds: number[]) => {
  const categoryBooks = await Books_Categories.find({
    join: {
      alias: 'books_categories',
      innerJoinAndSelect: {
        bookCategory: 'books_categories.bookCategory',
      },
    },
    where: {
      bookId: In(bookIds),
    },
  });

  const bookIdToCategories: { [key: number]: BookCategory[] } = {};

  categoryBooks.forEach((cb) => {
    if (cb.bookId in bookIdToCategories) {
      bookIdToCategories[cb.bookId].push((cb as any).__bookCategory__);
    } else {
      bookIdToCategories[cb.bookId] = [(cb as any).__bookCategory__];
    }
  });

  return bookIds.map((bookId) => bookIdToCategories[bookId]);
};

export const categoriesLoader = () => new DataLoader(batchCategories as any);
