import { Reservations } from './Reservations';
import { ObjectType, Field, ID } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'reservationStatus' })
export class ReservationStatus extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { unique: true })
  status: string;

  @OneToMany(() => Reservations, (reservation) => reservation.reservationStatus)
  reservations: Promise<Reservations[]>;
}
