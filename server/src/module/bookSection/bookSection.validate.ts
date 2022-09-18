import { BookSectionArgs } from './bookSection.args';
export const validateBookSectionArgs = (input: BookSectionArgs) => {
  if (input.section.length <= 2) {
    return [
      {
        field: 'section',
        message: 'length must be greater than 2',
      },
    ];
  }
  if (input.section.length >= 20) {
    return [
      {
        field: 'section',
        message: 'length must not be greater than 20',
      },
    ];
  }
  return null;
};
