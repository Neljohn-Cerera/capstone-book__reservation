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
@Entity({ name: 'bookSection' })
export class BookSection extends BaseEntity {
  @Field(() => ID!)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { nullable: true, unique: true })
  section: string;

  @OneToMany(() => Book, (book) => book.section)
  books: Book[];
}
