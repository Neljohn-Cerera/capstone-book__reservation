import { BookType } from './../../entities/BookType';
import { Field, InputType } from 'type-graphql';

@InputType()
export class BookTypeArgs implements Partial<BookType> {
  @Field()
  type: string;
}
