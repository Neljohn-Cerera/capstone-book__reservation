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
@Entity({ name: 'bookGroupUniqueIdentity' })
export class BookGroupUniqueIdentity extends BaseEntity {
  @Field(() => ID!)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { nullable: true, unique: true })
  groupTitle: string;

  @Field()
  @Column('text', { nullable: true, unique: true })
  groupUniqueIdentity: string;

  @OneToMany(() => Book, (book) => book.groupUniqueIdentity)
  books: Book[];
}
