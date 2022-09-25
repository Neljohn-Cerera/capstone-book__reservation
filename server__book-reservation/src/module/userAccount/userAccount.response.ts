import { UserAccount } from './../../entities/UserAccount';
import { Field, Int, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class UserAccountResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => UserAccount, { nullable: true })
  userAccount?: UserAccount;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

@ObjectType()
class UserAccountGetAllResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => [UserAccount], { nullable: true })
  userAccounts?: UserAccount[];

  @Field(() => Int, { nullable: true })
  count?: number;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { UserAccountResponse, UserAccountGetAllResponse };
