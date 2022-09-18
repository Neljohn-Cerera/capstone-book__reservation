import { Book } from './../../entities/Book';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class BookArgs implements Partial<Book> {
  @Field()
  bookId: string;

  @Field()
  title: string;

  @Field()
  accountNumber: string;

  @Field()
  isbnNumber: string;

  @Field(() => Int)
  dewyDecimal: number;

  @Field()
  publisher: string;

  @Field()
  placeOfPublication: string;

  @Field(() => Int)
  copyRightYear: number;
}
