import { BookCategoryArgs } from './bookCategory.args';

export const validateBookCategoryArgs = (input: BookCategoryArgs) => {
  if (input.category.length <= 2) {
    return [
      {
        field: 'category',
        message: 'length must be greater than 2',
      },
    ];
  }
  if (input.category.length >= 200) {
    return [
      {
        field: 'category',
        message: 'length must not be greater than 200',
      },
    ];
  }
  return null;
};
