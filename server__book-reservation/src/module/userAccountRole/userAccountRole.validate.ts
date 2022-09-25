import { UserAccountRoleArgs } from './userAccountRole.args';

export const validateUserAccountRoleArgs = (input: UserAccountRoleArgs) => {
  if (input.role.length <= 2) {
    return [
      {
        field: 'role',
        message: 'length must be greater than 2',
      },
    ];
  }
  if (input.role.length >= 20) {
    return [
      {
        field: 'role',
        message: 'length must not be greater than 20',
      },
    ];
  }
  return null;
};
