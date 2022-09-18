import * as Yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const UserCreateSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'length must be greater than 2')
    .max(20, 'length must not be greater than 20')
    .matches(/^[aA-zZ\s]+$/, 'should only be letters')
    .required('required field'),
  middleName: Yup.string()
    .min(2, 'length must be greater than 2')
    .max(20, 'length must not be greater than 20')
    .matches(/^[aA-zZ\s]+$/, 'should only be letters')
    .required('required field'),
  lastName: Yup.string()
    .min(3, 'length must be greater than 2')
    .max(20, 'length must not be greater than 20')
    .matches(/^[aA-zZ\s]+$/, 'should only be letters')
    .required('required field'),
  idNumber: Yup.string()
    .min(3, 'length must be greater than 3')
    .max(20, 'length must not be greater than 20')
    .matches(/^[a-zA-Z0-9]+$/, 'should only be letters and numbers')
    .required('required field'),
  age: Yup.number()
    .min(5, 'below 5 not allowed')
    .max(100, 'over age')
    .required('required field'),
  birthDate: Yup.date()
    .max(new Date(), 'Future days not allowed')
    .required('Required field'),
  address: Yup.string()
    .min(6, 'length must be greater than 5')
    .max(200, 'length must not be greater than 200')
    .matches(/^[aA-zZ\s]+$/, 'should only be letters')
    .required('required field'),
  email: Yup.string()
    .min(10, 'length must be greater than 10')
    .max(50, 'length must not be greater than 50')
    .email('not a valid email')
    .required('required field'),
  mobileNumber: Yup.string()
    .min(11)
    .max(11, 'length must not be greater than 11')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('required field'),
  password: Yup.string()
    .min(5, 'password is too short - should be 5 chars minimum.')
    .max(30, 'length must not be greater than 30')
    .required('required field'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'passwords must match'
  ),
});
