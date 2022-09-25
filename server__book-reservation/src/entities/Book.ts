import { Reservations } from './Reservations';
import { BorrowTransaction } from './BorrowTransaction';
import { BookGroupUniqueIdentity } from './BookGroupUniqueIdentity';
import { BookAuthor } from './BookAuthor';
import { Books_Authors } from './Books_Authors';
import { MyContext } from './../types';
import { BookCategory } from './BookCategory';
import { Books_Categories } from './Books_Categories';
import { BookType } from './BookType';
import { BookStatus } from './BookStatus';
import { BookSection } from './BookSection';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Field, ID, ObjectType, Int, Ctx } from 'type-graphql';

@ObjectType()
@Entity({ name: 'book' })
export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('integer', { nullable: true })
  groupUniqueIdentityId: number;

  @Field()
  @Column('text', { unique: true })
  bookId: string;

  @Field()
  @Column('text', { nullable: true })
  title: string;

  @Field()
  @Column('text', { unique: true, nullable: true })
  accountNumber: string;

  @Field()
  @Column('text', { nullable: true })
  isbnNumber: string;

  @Column('integer', { nullable: true })
  sectionId: number;

  @Field(() => Int)
  @Column('integer', { nullable: true })
  dewyDecimal: number;

  @Field()
  @Column('text', { nullable: true })
  publisher: string;

  @Field()
  @Column('text', { nullable: true })
  placeOfPublication: string;

  @Field(() => Int)
  @Column('integer', { nullable: true })
  copyRightYear: number;

  @Column('integer', { nullable: true })
  statusId: number;

  @Field(() => Int)
  @Column('integer', { nullable: true })
  bookTypeId: number;

  // Relationships
  @Field()
  @ManyToOne(() => BookSection, (section) => section.books)
  @JoinColumn()
  section: BookSection;

  @Field()
  @ManyToOne(() => BookStatus, (status) => status.books)
  @JoinColumn()
  status: BookStatus;

  @Field()
  @ManyToOne(() => BookType, (type) => type.books)
  @JoinColumn()
  bookType: BookType;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  @Field(() => [BookCategory], { nullable: true })
  async categories(
    @Ctx() { categoriesLoader }: MyContext
  ): Promise<BookCategory[]> {
    return categoriesLoader.load(this.id) as any;
  }

  @Field(() => [BookAuthor], { nullable: true })
  async authors(@Ctx() { authorsLoader }: MyContext): Promise<BookAuthor[]> {
    return authorsLoader.load(this.id) as any;
  }

  @OneToMany(
    () => Books_Categories,
    (books_categories) => books_categories.book
  )
  bookCategories: Promise<Books_Categories[]>;

  @OneToMany(() => Books_Authors, (books_authors) => books_authors.book)
  bookAuthors: Promise<Books_Authors[]>;

  @OneToMany(
    () => BorrowTransaction,
    (borrowTransaction) => borrowTransaction.book
  )
  borrowTransactions: BorrowTransaction;

  @ManyToOne(
    () => BookGroupUniqueIdentity,
    (BookGroupUniqueIdentity) => BookGroupUniqueIdentity.books
  )
  @JoinColumn()
  groupUniqueIdentity: BookGroupUniqueIdentity;

  @OneToMany(() => Reservations, (reservations) => reservations.book)
  @JoinColumn()
  reservations: Reservations;
}
