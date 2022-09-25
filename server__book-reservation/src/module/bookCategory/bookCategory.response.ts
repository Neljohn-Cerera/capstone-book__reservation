import { BookCategory } from './../../entities/BookCategory';
import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class BookCategoryResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => BookCategory, { nullable: true })
  category?: BookCategory;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { BookCategoryResponse };
