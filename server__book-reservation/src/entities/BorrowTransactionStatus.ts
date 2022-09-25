import { BorrowTransaction } from './BorrowTransaction';
import { ObjectType, Field, ID } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'borrowTransactionStatus' })
export class BorrowTransactionStatus extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { unique: true })
  status: string;

  @OneToMany(
    () => BorrowTransaction,
    (borrowTransaction) => borrowTransaction.borrowTransactionStatus
  )
  borrowTransactions: Promise<BorrowTransaction[]>;
}
