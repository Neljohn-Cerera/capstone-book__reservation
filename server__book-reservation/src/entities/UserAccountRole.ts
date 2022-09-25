import { UserAccount } from './UserAccount';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
@Entity({ name: 'userAccountRole' })
export class UserAccountRole extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { nullable: true, unique: true })
  role: string;

  @OneToMany(() => UserAccount, (userAccount) => userAccount.userAccountRole)
  userAccounts: UserAccount[];
}
