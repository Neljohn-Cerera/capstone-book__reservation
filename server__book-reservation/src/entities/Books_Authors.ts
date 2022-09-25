import { BookAuthor } from "./BookAuthor";
import { Book } from "./Book";
import {
  Entity,
  ManyToOne,
  BaseEntity,
  PrimaryColumn,
  JoinColumn,
} from "typeorm";
import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
@Entity({ name: "books_authors" })
export class Books_Authors extends BaseEntity {
  @Field(() => Int)
  @PrimaryColumn()
  bookId: number;
  @Field(() => Int)
  @PrimaryColumn()
  bookAuthorId: number;

  @ManyToOne(() => BookAuthor, (author) => author.authors, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "bookAuthorId" })
  bookAuthor: Promise<BookAuthor>;

  @ManyToOne(() => Book, (book) => book.bookAuthors, {
    // primary: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "bookId" })
  book: Promise<Book>;
}
