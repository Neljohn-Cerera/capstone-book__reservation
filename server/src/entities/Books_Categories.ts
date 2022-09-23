import { BookCategory } from "./BookCategory";
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
@Entity({ name: "books_categories" })
export class Books_Categories extends BaseEntity {
  @Field(() => Int)
  @PrimaryColumn()
  bookCategoryId: number;
  @Field(() => Int)
  @PrimaryColumn()
  bookId: number;

  @ManyToOne(() => BookCategory, (category) => category.categories, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "bookCategoryId" })
  bookCategory: Promise<BookCategory>;

  @ManyToOne(() => Book, (book) => book.bookCategories, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "bookId" })
  book: Promise<Book>;
}
