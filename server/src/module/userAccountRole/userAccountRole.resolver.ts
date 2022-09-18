import { UserAccountRole } from '../../entities/UserAccountRole';
import { validateUserAccountRoleArgs } from './userAccountRole.validate';
import { UserAccountRoleArgs } from './userAccountRole.args';
import { Arg, Mutation, Query, Resolver, Int } from 'type-graphql';
import { getConnection } from 'typeorm';
import { UserAccountRoleResponse } from './userAccountRole.response';
// Account
@Resolver()
export class UserRoleResolver {
  //Retrieve roles
  @Query(() => [UserAccountRole], { nullable: true })
  async getAllUserAccountRoles(): Promise<UserAccountRole[]> {
    return await UserAccountRole.find();
  }
  // Insert role
  @Mutation(() => UserAccountRoleResponse)
  async createUserAccountRole(
    @Arg('userAccountRoleInput') { role }: UserAccountRoleArgs
  ): Promise<UserAccountRoleResponse> {
    // input validation
    const errors = validateUserAccountRoleArgs({ role });
    if (errors) {
      return { errors };
    }
    // database insertion
    const _role = await UserAccountRole.create({ role }).save();
    return { role: _role };
  }
  // Delete role
  @Mutation(() => Boolean)
  async deleteUserAccountRole(
    @Arg('id', () => Int) id: number
  ): Promise<Boolean> {
    const isRoleDeleted = await UserAccountRole.delete(id);
    if (!isRoleDeleted) {
      return false;
    }
    return true;
  }
  // Delete role
  @Mutation(() => Boolean)
  async deleteAllUserAccountRole(): Promise<Boolean> {
    const allRolesDeleted = await UserAccountRole.delete({});
    if (!allRolesDeleted) {
      return false;
    }
    return true;
  }
  // Delete rolee
  @Mutation(() => UserAccountRole, { nullable: true })
  async updateUserAccountRole(
    @Arg('id', () => Int) id: number,
    @Arg('userAccountRoleInput') dataInput: UserAccountRoleArgs
  ): Promise<UserAccountRole | null> {
    const role = await getConnection()
      .createQueryBuilder()
      .update(UserAccountRole)
      .set({ ...dataInput })
      .where('id = :id', {
        id,
      })
      .returning('*')
      .execute()
      .then((response) => {
        return response.raw[0];
      });

    if (!role) {
      return null;
    }
    return role;
  }
}
