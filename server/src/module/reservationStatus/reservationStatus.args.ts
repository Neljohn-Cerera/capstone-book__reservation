import { ReservationStatus } from './../../entities/ReservationStatus';
import { Field, InputType } from 'type-graphql';

@InputType()
export class ReservationStatusArgs implements Partial<ReservationStatus> {
  @Field()
  status: string;
}
