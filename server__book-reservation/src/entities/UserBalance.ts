import { User } from './User';
import { ObjectType, Field, Float, ID, Int } from 'type-graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'userBalance' })
export class UserBalance {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column('integer')
  userId: number;

  @Field(() => Float)
  @Column('float')
  balance: number;

  @OneToOne(() => User, (user) => user.userBalance)
  @JoinColumn()
  user: User;
}
