import { Book } from './Book';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
@Entity({ name: 'bookType' })
export class BookType extends BaseEntity {
  @Field(() => ID!)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { nullable: true })
  type: string;

  @OneToMany(() => Book, (book) => book.bookType)
  books: Book[];
}
