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
@Entity({ name: 'bookStatus' })
export class BookStatus extends BaseEntity {
  @Field(() => ID!)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { nullable: true, unique: true })
  status: string;

  @OneToMany(() => Book, (book) => book.status)
  books: Book[];
}
