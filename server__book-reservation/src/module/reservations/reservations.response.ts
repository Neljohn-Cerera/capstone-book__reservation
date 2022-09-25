import { BorrowTransaction } from './../../entities/BorrowTransaction';
import { Reservations } from './../../entities/Reservations';
import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class ReservationsResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Reservations, { nullable: true })
  reservations?: Reservations;

  @Field(() => BorrowTransaction, { nullable: true })
  borrowTransaction?: BorrowTransaction;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;

  @Field(() => String, { nullable: true })
  message?: string;
}

@ObjectType()
class CreateReservationResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => [Reservations], { nullable: true })
  reservations?: Reservations[];
}

export { ReservationsResponse, CreateReservationResponse };
