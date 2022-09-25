import { BookSection } from './../../entities/BookSection';
import { Field, InputType } from 'type-graphql';

@InputType()
export class BookSectionArgs implements Partial<BookSection> {
  @Field()
  section: string;
}
