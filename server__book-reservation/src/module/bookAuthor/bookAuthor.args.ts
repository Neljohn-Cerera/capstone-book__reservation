import { BookAuthor } from './../../entities/BookAuthor';

import { Field, InputType } from 'type-graphql';

@InputType()
export class BookAuthorArgs implements Partial<BookAuthor> {
  @Field()
  author: string;
}
