import { BookCategory } from './../../entities/BookCategory';
import { Field, InputType } from 'type-graphql';

@InputType()
export class BookCategoryArgs implements Partial<BookCategory> {
  @Field()
  category: string;
}
