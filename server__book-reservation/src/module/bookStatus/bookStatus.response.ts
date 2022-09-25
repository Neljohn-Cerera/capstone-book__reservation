import { BookStatus } from './../../entities/BookStatus';
import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class BookStatusResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => BookStatus, { nullable: true })
  status?: BookStatus;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { BookStatusResponse };
