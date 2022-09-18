import { Books_Categories } from './Books_Categories';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

//
@ObjectType()
@Entity({ name: 'bookCategory' })
export class BookCategory extends BaseEntity {
  @Field(() => ID!)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { nullable: true, unique: true })
  category: string;

  @OneToMany(
    () => Books_Categories,
    (books_categories) => books_categories.bookCategory
  )
  categories: Promise<Books_Categories[]>;
}
