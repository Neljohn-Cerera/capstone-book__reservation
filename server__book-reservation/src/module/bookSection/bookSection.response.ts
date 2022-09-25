import { BookSection } from './../../entities/BookSection';
import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class BookSectionResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => BookSection, { nullable: true })
  section?: BookSection;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { BookSectionResponse };
