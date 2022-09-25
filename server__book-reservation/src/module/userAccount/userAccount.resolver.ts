import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcryptjs";
import { datasource } from "../../db";
import { MyContext } from "./../../types";
import { UserAccountRole } from "../../entities/UserAccountRole";
import { User } from "./../../entities/User";
import { UserAccount } from "./../../entities/UserAccount";
import { UserArgs } from "./../user/user.args";
import { LoginArgs, UserAccountArgs } from "./userAccount.args";
import {
  UserAccountGetAllResponse,
  UserAccountResponse,
} from "./userAccount.response";
import { validateUserAccountArgs } from "./userAccount.validate";
import { validateUserArgs } from "./../user/user.validate";
import { updateEntity } from "../../utils/updateEntity";
import { databaseError } from "../../utils/databaseError";

@Resolver()
export class UserAccountResolver {
  // retrieve all accounts
  @Query(() => UserAccountGetAllResponse)
  async getAllUserAccounts(
    @Arg("page", () => Int) page: number,
    @Arg("perPage", () => Int) perPage: number,
    @Arg("filterByFnameMnameLname") filterByFnameMnameLname: string
  ): Promise<UserAccountGetAllResponse> {
    // retrieve all account
    try {
      const userAccountRepo = datasource.getRepository(UserAccount);

      const userAccounts = await userAccountRepo
        .createQueryBuilder("userAccount")
        .innerJoinAndSelect("userAccount.user", "user")
        .innerJoinAndSelect("userAccount.userAccountRole", "userAccountRole")
        .where("user.firstName ILIKE :name", {
          name: `%${filterByFnameMnameLname}%`,
        })
        .orWhere("user.middleName ILIKE :name", {
          name: `%${filterByFnameMnameLname}%`,
        })
        .orWhere("user.lastName ILIKE :name", {
          name: `%${filterByFnameMnameLname}%`,
        })
        .offset((page - 1) * perPage)
        .limit(perPage)
        .orderBy("user.firstName", "ASC")
        .getMany();

      const count = await userAccountRepo.count();

      return { userAccounts, count, isSucess: true };
    } catch (error) {
      return {
        errors: [
          {
            field: "database error",
            message: `error : ${error}`,
          },
        ],
        isSucess: false,
      };
    }
  }
  // login
  @Mutation(() => UserAccountResponse)
  async userLogin(
    @Arg("loginInput") dataInput: LoginArgs,
    @Ctx() { req }: MyContext
  ): Promise<UserAccountResponse | null> {
    const userAccountRepo = datasource.getRepository(UserAccount);
    const userAccount = await userAccountRepo
      .createQueryBuilder("userAccount")
      .select([
        "userAccount.id",
        "userAccount.userId",
        "userAccount.email",
        "userAccount.mobileNumber",
        "userAccount.password",
      ])
      .where("userAccount.email = :email", {
        email: dataInput.email,
      })
      .orWhere("userAccount.mobileNumber = :mobileNumber", {
        mobileNumber: dataInput.email,
      })
      .getOne();
    // validate if email is found on database
    if (!userAccount)
      return {
        errors: [
          {
            field: "email",
            message: "email or mobilenumber does not exist.",
          },
        ],
        isSucess: false,
      };
    // validate password
    const valid = await bcrypt.compare(
      dataInput.password,
      userAccount.password
    );
    if (!valid)
      return {
        errors: [
          {
            field: "password",
            message: "password is not correct",
          },
        ],
        isSucess: false,
      };
    // registering session
    req.session.userId = userAccount.userId;
    return { userAccount, isSucess: true };
  }
  // logout
  @Mutation(() => Boolean)
  async userLogOut(@Ctx() ctx: MyContext): Promise<Boolean | undefined> {
    return new Promise((res, rej) =>
      ctx.req.session.destroy((err: any) => {
        if (err) {
          console.log("logout error : ", err);
          return rej(false);
        }
        ctx.res.clearCookie("qid");
        return res(true);
      })
    );
  }
  // create account
  @Mutation(() => UserAccountResponse)
  async createUserAccount(
    @Arg("roleInput") roleInput: string,
    @Arg("accountInput") accountInput: UserAccountArgs,
    @Arg("userInput") userInput: UserArgs,
    @Ctx() { req }: MyContext
  ): Promise<UserAccountResponse> {
    const queryRunner = datasource.createQueryRunner();
    const { manager } = queryRunner;
    await queryRunner.connect();
    // input account validation
    const accountErrors = validateUserAccountArgs(accountInput);
    if (accountErrors) {
      return { errors: accountErrors, isSucess: false };
    }
    // input user validation
    const userErrors = validateUserArgs(userInput);
    if (userErrors) {
      return { errors: userErrors, isSucess: false };
    }
    // validate idnumber
    const userByIdNumber = await manager
      .getRepository(User)
      .createQueryBuilder("user")
      .select("user.idNumber")
      .where("user.idNumber = :idNumber", { idNumber: userInput.idNumber })
      .getOne();
    if (userByIdNumber) {
      return {
        errors: [
          {
            field: "idNumber",
            message: "ID NUMBER is taken",
          },
        ],
        isSucess: false,
      };
    }
    // validate email
    const isEmailTakem = await manager
      .getRepository(UserAccount)
      .createQueryBuilder("userAccount")
      .select("userAccount.email")
      .where("userAccount.email = :email", { email: accountInput.email })
      .getOne();

    if (isEmailTakem) {
      return {
        errors: [
          {
            field: "email",
            message: "email is already taken",
          },
        ],
        isSucess: false,
      };
    }
    // validate mobile number
    const isMobileNumberTaken = await manager
      .getRepository(UserAccount)
      .createQueryBuilder("userAccount")
      .select("userAccount.mobileNumber")
      .where("userAccount.mobileNumber = :mobileNumber", {
        mobileNumber: accountInput.mobileNumber,
      })
      .getOne();
    if (isMobileNumberTaken) {
      return {
        errors: [
          {
            field: "mobileNumber",
            message: "mobileNumber is already taken",
          },
        ],
        isSucess: false,
      };
    }
    // transaction start
    await queryRunner.startTransaction();

    try {
      // 1st query retrieve role
      const role = await manager
        .getRepository(UserAccountRole)
        .createQueryBuilder("userAccountRole")
        .select("userAccountRole.id")
        .where("userAccountRole.role = :roleInput", {
          roleInput,
        })
        .getOne();
      if (!role) {
        return {
          errors: [
            {
              field: "roleInput",
              message: `${roleInput} role does not exist in database`,
            },
          ],
          isSucess: false,
        };
      }
      // 2nd insert user
      const user = await manager
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          ...userInput,
        } as User)
        .returning("*")
        .execute()
        .then((response) => {
          return response.raw[0];
        });

      const hashedPassword = await bcrypt.hash(accountInput.password, 12);

      // 3rd query create account
      const userAccount: UserAccount = await manager
        .createQueryBuilder()
        .insert()
        .into(UserAccount)
        .values({
          userId: user?.id,
          userAccountRoleId: role?.id,
          ...accountInput,
          password: hashedPassword,
        } as UserAccount)
        .returning("*")
        .execute()
        .then((response) => {
          return response.raw[0];
        });

      // storing session on redis
      req.session.userId = user?.id;

      await queryRunner.commitTransaction();
      return {
        userAccount,
        isSucess: true,
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (
        error &&
        error.detail.includes("already exists") &&
        error.code === "23505"
      ) {
        // unique constraint error
        return {
          errors: [
            {
              field: "userID",
              message: `user already belong to an account`,
            },
          ],
          isSucess: false,
        };
      } else {
        //server error
        return {
          errors: [
            {
              field: "database error",
              message: `error code = ${error.code}`,
            },
          ],
          isSucess: false,
        };
      }
    } finally {
      await queryRunner.release();
    }
  }
  // delete all account
  @Mutation(() => Boolean)
  async deleteAllUserAccount(): Promise<Boolean> {
    const allAccountDeleted = await UserAccount.delete({});
    if (!allAccountDeleted) {
      return false;
    }
    return true;
  }
  // delete account
  @Mutation(() => UserAccountResponse)
  async deleteUserAccount(
    @Arg("accountId", () => Int) accountId: number,
    @Arg("userId", () => Int) userId: number
  ): Promise<UserAccountResponse> {
    const queryRunner = datasource.createQueryRunner();
    const { manager } = queryRunner;
    await queryRunner.connect();

    try {
      // search if exist
      const userAccount = await UserAccount.findOne({
        where: { id: accountId },
      });

      if (!userAccount) {
        return {
          errors: [
            {
              field: "userAccount",
              message: "userAccount Id not found",
            },
          ],
          isSucess: false,
        };
      }
      const user = await User.findOne({ where: { id: userId } });

      if (!user) {
        return {
          errors: [
            {
              field: "user",
              message: "user Id not found",
            },
          ],
          isSucess: false,
        };
      }
      //start transaction
      await queryRunner.startTransaction();
      // delete
      await manager
        .createQueryBuilder()
        .delete()
        .from(UserAccount)
        .where("id = :id", { id: accountId })
        .execute();
      await manager
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id: userId })
        .execute();

      await queryRunner.commitTransaction();
      return { isSucess: true };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return {
        errors: [
          {
            field: "database server error",
            message: `Error code : ${error.code}`,
          },
        ],
        isSucess: false,
      };
    } finally {
      await queryRunner.release();
    }
  }
  // update account
  @Mutation(() => UserAccountResponse)
  async updateUserAccount(
    @Arg("accountInput") dataInput: UserAccountArgs,
    @Arg("id", () => Int) id: number
  ): Promise<UserAccountResponse> {
    const errors = validateUserAccountArgs(dataInput);
    if (errors) {
      return { errors, isSucess: false };
    }

    try {
      const userAccount = await updateEntity(id, UserAccount, dataInput);

      if (!userAccount)
        return {
          errors: [
            {
              field: "accountId",
              message: "account not found",
            },
          ],
          isSucess: false,
        };

      return { userAccount, isSucess: true };
    } catch (error) {
      return databaseError(error);
    }
  }
}
