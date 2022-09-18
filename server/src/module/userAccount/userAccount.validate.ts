import { UserAccountArgs } from './userAccount.args';

export const validateUserAccountArgs = (dataInput: UserAccountArgs) => {
  // email
  const email =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.test(String(dataInput.email).toLowerCase())) {
    return [
      {
        field: 'email',
        message: 'not a valid email',
      },
    ];
  }
  if (dataInput.email.length < 10) {
    return [
      {
        field: 'email',
        message: 'length must be greater than 10',
      },
    ];
  }
  if (dataInput.email.length >= 40) {
    return [
      {
        field: 'email',
        message: 'length must not be greater than 40',
      },
    ];
  }

  // password
  if (/[^a-zA-Z0-9_ \-\/]/.test(dataInput.password)) {
    return [
      {
        field: 'password',
        message: 'should not contain symbols',
      },
    ];
  }
  if (dataInput.password.length < 4) {
    return [
      {
        field: 'password',
        message: 'length must be greater than 4',
      },
    ];
  }
  if (dataInput.password.length >= 30) {
    return [
      {
        field: 'password',
        message: 'length must not be greater than 30',
      },
    ];
  }
  // mobileNumber /\D/.test(z)
  if (dataInput.mobileNumber.length !== 11) {
    return [
      {
        field: 'mobileNumber',
        message: 'length must be 11 digits only',
      },
    ];
  }
  if (/\D/.test(dataInput.mobileNumber)) {
    return [
      {
        field: 'mobileNumber',
        message: 'must be a valid number',
      },
    ];
  }
  if (/[^a-zA-Z0-9_ \-\/]/.test(dataInput.mobileNumber)) {
    return [
      {
        field: 'mobileNumber',
        message: 'should not contain symbols',
      },
    ];
  }
  return null;
};
