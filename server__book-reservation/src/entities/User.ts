import { BorrowTransaction } from './BorrowTransaction';
import { Reservations } from './Reservations';
import { UserBalance } from './UserBalance';
import { UserAccount } from './UserAccount';
import { Field, ObjectType, ID, Int } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { unique: true })
  idNumber: string;

  @Field()
  @Column('text', { nullable: true })
  firstName: string;

  @Field()
  @Column('text', { nullable: true })
  middleName: string;

  @Field()
  @Column('text', { nullable: true })
  lastName: string;

  @Field(() => Int)
  @Column('integer', { nullable: true })
  age: number;

  @Field(() => String)
  @Column('date', { nullable: true })
  birthDate: Date;

  @Field()
  @Column('text', { nullable: true })
  address: string;

  @OneToOne(() => UserAccount, (userAccount) => userAccount.user)
  userAccount: UserAccount;

  @OneToOne(() => UserBalance, (userBalance) => userBalance.user)
  userBalance: UserBalance;

  @OneToMany(() => Reservations, (reservations) => reservations.user)
  @JoinColumn()
  reservations: Promise<Reservations[]>;
  @OneToMany(
    () => BorrowTransaction,
    (borrowTransaction) => borrowTransaction.user
  )
  borrowTransactions: Promise<BorrowTransaction[]>;
}
