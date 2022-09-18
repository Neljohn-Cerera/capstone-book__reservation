import { Book } from './Book';
import { ReservationStatus } from './ReservationStatus';
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
  CreateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'reservations' })
export class Reservations extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  reserveDate: Date;

  @Field()
  @Column('text', { unique: true })
  bookDateIdentity: string;

  @Field()
  @Column('text')
  @Generated('uuid')
  qrCode: string;

  @Field()
  @Column('text', { nullable: true })
  details: string;

  @Field()
  @Column('integer')
  userId: number;

  @Field()
  @Column('integer')
  bookId: number;

  @Field()
  @Column('integer', { nullable: true })
  reservationStatusId: number;

  @Field()
  @Column('boolean', { default: false })
  expired: boolean;

  @Field()
  @ManyToOne(() => User, (user) => user.reservations)
  @JoinColumn()
  user: User;

  @Field(() => Book)
  @ManyToOne(() => Book, (book) => book.reservations)
  @JoinColumn()
  book: Book;

  @Field()
  @ManyToOne(
    () => ReservationStatus,
    (reservationStatus) => reservationStatus.reservations
  )
  @JoinColumn()
  reservationStatus: ReservationStatus;
}
