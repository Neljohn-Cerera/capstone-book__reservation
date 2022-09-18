import { User } from './../../entities/User';
import { Field, InputType } from 'type-graphql';

@InputType()
export class UserArgs implements Partial<User> {
  @Field()
  idNumber: string;
  @Field()
  firstName: string;
  @Field()
  middleName: string;
  @Field()
  lastName: string;
  @Field()
  age: number;
  @Field()
  birthDate: Date;
  @Field()
  address: string;
}
