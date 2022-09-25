import { UserAccount } from './../../entities/UserAccount';
import { Field, InputType } from 'type-graphql';
@InputType()
export class UserAccountArgs implements Partial<UserAccount> {
  @Field()
  email: string;
  @Field()
  mobileNumber: string;
  @Field()
  password: string;
}

@InputType()
export class LoginArgs {
  @Field()
  email: string;
  @Field()
  password: string;
}
