import { BookAuthorArgs } from './bookAuthor.args';

export const validateBookAuthorArgs = (input: BookAuthorArgs) => {
  if (input.author.length <= 2) {
    return [
      {
        field: 'author',
        message: 'length must be greater than 2',
      },
    ];
  }
  if (input.author.length >= 20) {
    return [
      {
        field: 'author',
        message: 'length must not be greater than 20',
      },
    ];
  }
  return null;
};
