import { BookTypeArgs } from './bookType.args';

export const validateBookTypeArgs = (input: BookTypeArgs) => {
  if (input.type.length <= 2) {
    return [
      {
        field: 'type',
        message: 'length must be greater than 2',
      },
    ];
  }
  if (input.type.length >= 20) {
    return [
      {
        field: 'type',
        message: 'length must not be greater than 20',
      },
    ];
  }
  return null;
};
