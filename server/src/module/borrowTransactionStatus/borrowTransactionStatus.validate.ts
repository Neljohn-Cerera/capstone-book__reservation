import { BorrowTransactionStatusArgs } from './borrowTransactionStatus.args';

export const validateBorrowTransactionStatusArgs = (
  input: BorrowTransactionStatusArgs
) => {
  if (input.status.length <= 2) {
    return [
      {
        field: 'status',
        message: 'length must be greater than 2',
      },
    ];
  }
  if (input.status.length >= 20) {
    return [
      {
        field: 'status',
        message: 'length must not be greater than 20',
      },
    ];
  }
  return null;
};
