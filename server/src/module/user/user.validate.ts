import { UserArgs } from './user.args';
import moment from 'moment';

export const validateUserArgs = (dataInput: UserArgs) => {
  // firstName , middleName , lastName
  // firstName
  if (dataInput.firstName.length <= 1) {
    return [
      {
        field: 'firstName',
        message: 'length must be greater than 2',
      },
    ];
  }
  if (dataInput.firstName.length >= 40) {
    return [
      {
        field: 'firstName',
        message: 'length must not be greater than 20',
      },
    ];
  }

  if (/[^a-zA-Z0-9_ \-\/]/.test(dataInput.firstName)) {
    return [
      {
        field: 'firstName',
        message: 'should not contain symbols',
      },
    ];
  }
  // middleName
  if (dataInput.middleName.length <= 1) {
    return [
      {
        field: 'middleName',
        message: 'length must be greater than 2',
      },
    ];
  }
  if (dataInput.middleName.length >= 40) {
    return [
      {
        field: 'middleName',
        message: 'length must not be greater than 20',
      },
    ];
  }

  if (/[^a-zA-Z0-9_ \-\/]/.test(dataInput.middleName)) {
    return [
      {
        field: 'middleName',
        message: 'should not contain symbols',
      },
    ];
  }
  // lastName
  if (dataInput.lastName.length <= 1) {
    return [
      {
        field: 'lastName',
        message: 'length must be greater than 2',
      },
    ];
  }
  if (dataInput.lastName.length >= 40) {
    return [
      {
        field: 'lastName',
        message: 'length must not be greater than 20',
      },
    ];
  }
  if (/[^a-zA-Z0-9_ \-\/]/.test(dataInput.lastName)) {
    return [
      {
        field: 'lastName',
        message: 'should not contain symbols',
      },
    ];
  }
  // age
  if (isNaN(dataInput.age) && dataInput.age.toString().length > 2) {
    return [
      {
        field: 'age',
        message: 'length must not be greater than 2 and a valid number',
      },
    ];
  }

  // birthdate
  var dt = moment(dataInput.birthDate);

  if (!dt.isValid()) {
    return [
      {
        field: 'birthDate',
        message: 'birthDate must be a valid date',
      },
    ];
  }

  // address
  if (dataInput.address.length <= 5) {
    return [
      {
        field: 'address',
        message: 'length must be greater than 5',
      },
    ];
  }
  if (dataInput.address.length >= 200) {
    return [
      {
        field: 'address',
        message: 'length must not be greater than 200',
      },
    ];
  }
  if (/[^a-zA-Z0-9_ \-\/]/.test(dataInput.address)) {
    return [
      {
        field: 'address',
        message: 'should not contain symbols',
      },
    ];
  }

  // idNumber
  if (dataInput.idNumber.length <= 3) {
    return [
      {
        field: 'idNumber',
        message: 'length must be greater than 3',
      },
    ];
  }
  if (dataInput.idNumber.length >= 20) {
    return [
      {
        field: 'idNumber',
        message: 'length must not be greater than 20',
      },
    ];
  }
  if (/[^a-zA-Z0-9_ \-\/]/.test(dataInput.idNumber)) {
    return [
      {
        field: 'idNumber',
        message: 'should not contain symbols',
      },
    ];
  }

  return null;
};
