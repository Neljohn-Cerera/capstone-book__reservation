import { ReservationStatus } from './../../entities/ReservationStatus';
import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class ReservationStatusResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => ReservationStatus, { nullable: true })
  reservationStatus?: ReservationStatus;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { ReservationStatusResponse };
