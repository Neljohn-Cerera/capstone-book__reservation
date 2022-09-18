import { BorrowTransactionStatus } from './BorrowTransactionStatus';
import { Book } from './Book';
import { User } from './User';
import { ObjectType, Field, ID } from 'type-graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Generated,
  BaseEntity,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'borrowTransaction' })
export class BorrowTransaction extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text')
  @Generated('uuid')
  qrCode: string;

  @Field(() => String)
  @Column('date')
  borrowDate: Date;

  @Field(() => String)
  @Column('date')
  returnDate: Date;

  @Field()
  @Column('integer')
  userId: number;

  @Field()
  @Column('integer')
  bookId: number;

  @Field()
  @Column('integer')
  borrowTransactionStatusId: number;

  @Field()
  @Column('integer', { default: 0 })
  fine: number;

  @Field()
  @Column('text', { nullable: true })
  paymentStatus: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.borrowTransactions)
  @JoinColumn()
  user: User;

  @Field(() => Book)
  @ManyToOne(() => Book, (book) => book.borrowTransactions)
  @JoinColumn()
  book: Book;

  @Field()
  @ManyToOne(
    () => BorrowTransactionStatus,
    (borrowTransactionStatus) => borrowTransactionStatus.borrowTransactions
  )
  @JoinColumn()
  borrowTransactionStatus: BorrowTransactionStatus;
}
