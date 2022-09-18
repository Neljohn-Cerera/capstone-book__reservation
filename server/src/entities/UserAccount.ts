import { UserAccountRole } from './UserAccountRole';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { User } from './User';

@ObjectType()
@Entity({ name: 'userAccount' })
export class UserAccount extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('integer')
  userId: number;

  @Field()
  @Column('integer', { nullable: true })
  userAccountRoleId: number;

  @Field()
  @Column('text', { unique: true })
  email: string;

  @Field()
  @Column('text', { unique: true })
  mobileNumber: string;

  @Column('text')
  password: string;

  @Field()
  @Column('bool', { default: true })
  isActive: boolean;

  @Field()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @UpdateDateColumn()
  updated_at: Date;

  @Field(() => User, { nullable: true })
  @OneToOne(() => User, (user) => user.userAccount, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @Field(() => UserAccountRole, { nullable: true })
  @ManyToOne(
    () => UserAccountRole,
    (userAccountRole) => userAccountRole.userAccounts
  )
  @JoinColumn()
  userAccountRole: UserAccountRole;
}
