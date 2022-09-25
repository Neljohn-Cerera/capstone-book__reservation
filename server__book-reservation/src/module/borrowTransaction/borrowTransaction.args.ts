import { BorrowTransaction } from './../../entities/BorrowTransaction';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class BorrowTransactionArgs implements Partial<BorrowTransaction> {
  @Field(() => Int)
  userId: number;
  @Field(() => Int)
  bookId: number;
}
