import { Books_Authors } from './Books_Authors';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
@Entity({ name: 'bookAuthor' })
export class BookAuthor extends BaseEntity {
  @Field(() => ID!)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { nullable: true, unique: true })
  author: string;

  @OneToMany(() => Books_Authors, (books_authors) => books_authors.bookAuthor)
  authors: Promise<Books_Authors[]>;
}
