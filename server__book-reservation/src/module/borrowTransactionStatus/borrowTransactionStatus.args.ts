import { BorrowTransactionStatus } from './../../entities/BorrowTransactionStatus';
import { Field, InputType } from 'type-graphql';

@InputType()
export class BorrowTransactionStatusArgs
  implements Partial<BorrowTransactionStatus>
{
  @Field()
  status: string;
}
