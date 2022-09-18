import { BookAuthor } from './../../entities/BookAuthor';
import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class BookAuthorResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => BookAuthor, { nullable: true })
  author?: BookAuthor;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { BookAuthorResponse };
