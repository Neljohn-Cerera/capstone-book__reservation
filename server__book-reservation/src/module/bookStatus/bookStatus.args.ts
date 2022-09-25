import { BookStatus } from './../../entities/BookStatus';
import { Field, InputType } from 'type-graphql';

@InputType()
export class BookStatusArgs implements Partial<BookStatus> {
  @Field()
  status: string;
}
