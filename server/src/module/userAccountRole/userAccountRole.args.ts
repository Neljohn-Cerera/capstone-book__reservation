import { UserAccountRole } from '../../entities/UserAccountRole';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserAccountRoleArgs implements Partial<UserAccountRole> {
  @Field()
  role: string;
}
