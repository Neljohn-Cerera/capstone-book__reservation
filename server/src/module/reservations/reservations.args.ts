import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class ReservationsArgs {
  @Field(() => Int)
  userId: number;
  @Field()
  title: string;
}
