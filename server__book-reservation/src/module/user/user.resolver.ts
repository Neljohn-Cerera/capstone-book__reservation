import { validateUserArgs } from "./user.validate";
import { UserArgs } from "./user.args";
import { User } from "../../entities/User";
import { MyContext } from "../../types";
import { Arg, Ctx, Mutation, Query, Resolver, Int } from "type-graphql";
import { datasource } from "../../db";
import { UserResponse } from "./user.response";

@Resolver()
export class UserResolver {
  // me
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext): Promise<User | undefined> {
    if (!req.session.userId) {
      return undefined;
    }
    return (await User.findOne(req.session.userId)) || undefined;
  }
  //retrieve all
  @Query(() => [User], { nullable: true })
  async getAllUsers(): Promise<User[] | null> {
    return await User.find();
  }

  // delete all user
  @Mutation(() => Boolean)
  async deleteAllUser(): Promise<Boolean> {
    const isRoleDeleted = await User.delete({});
    if (!isRoleDeleted) {
      return false;
    }
    return true;
  }
  // update user
  @Mutation(() => UserResponse)
  async updateUser(
    @Arg("userInput") dataInput: UserArgs,
    @Arg("id", () => Int) id: number
  ): Promise<UserResponse> {
    // input validation
    const errors = validateUserArgs(dataInput);
    if (errors) {
      return { errors, isSucess: false };
    }
    const user = await datasource
      .createQueryBuilder()
      .update(User)
      .set({ ...dataInput })
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute()
      .then((response) => {
        return response.raw[0];
      });

    if (!user) {
      return {
        errors: [
          {
            field: "userId",
            message: "user not found",
          },
        ],
        isSucess: false,
      };
    }
    return { user, isSucess: true };
  }
}
