import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, 'length must be greater than 10')
    .max(50, 'length must not be greater than 50')
    .email('not a valid email')
    .required('required field'),
  password: Yup.string()
    .min(5, 'password is too short - should be 5 chars minimum.')
    .max(30, 'length must not be greater than 30')
    .required('required field'),
});
