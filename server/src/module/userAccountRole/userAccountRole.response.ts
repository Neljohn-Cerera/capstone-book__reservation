import { UserAccountRole } from '../../entities/UserAccountRole';
import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class UserAccountRoleResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => UserAccountRole, { nullable: true })
  role?: UserAccountRole;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { UserAccountRoleResponse };
