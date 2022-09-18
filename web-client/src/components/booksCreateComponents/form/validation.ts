import * as Yup from 'yup';

export const BookCreateSchema = Yup.object().shape({
  bookId: Yup.string()
    .min(3, 'length must be greater than 2')
    .max(40, 'length must not be greater than 40')
    .matches(/^[a-zA-Z0-9 -]+$/, 'should only be letters and numbers')
    .required('required field'),
  title: Yup.string()
    .min(2, 'length must be greater than 2')
    .max(200, 'length must not be greater than 200')
    .matches(/^[a-zA-Z0-9 -:]+$/, 'should only be letters and numbers')
    .required('required field'),
  accountNumber: Yup.string()
    .min(3, 'length must be greater than 2')
    .max(40, 'length must not be greater than 40')
    .matches(/^[a-zA-Z0-9. -]+$/, 'should only be letters and numbers')
    .required('required field'),
  isbnNumber: Yup.string()
    .min(3, 'length must be greater than 3')
    .max(40, 'length must not be greater than 40')
    .matches(/^[a-zA-Z0-9 -]+$/, 'should only be letters and numbers')
    .required('required field'),
  dewyDecimal: Yup.number()
    .min(0, 'show not contain negative numbers')
    .required('required field'),
  publisher: Yup.string()
    .min(6, 'length must be greater than 5')
    .max(200, 'length must not be greater than 200')
    .matches(
      /^[a-zA-Z0-9., -']+$/,
      'should only be letters and symbols . or , or -'
    )
    .required('required field'),
  placeOfPublication: Yup.string()
    .min(6, 'length must be greater than 5')
    .max(200, 'length must not be greater than 200')
    .matches(
      /^[a-zA-Z0-9., -]+$/,
      'should only be letters and symbols . or , or -'
    )
    .required('required field'),
  copyRightYear: Yup.number()
    .min(1900, 'below 1900 year not allowed')
    .required('required field'),
});
