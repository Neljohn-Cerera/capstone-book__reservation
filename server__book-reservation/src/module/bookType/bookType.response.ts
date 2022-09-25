import { BookType } from './../../entities/BookType';
import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class BookTypeResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => BookType, { nullable: true })
  bookType?: BookType;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { BookTypeResponse };
