import { BorrowTransactionStatus } from './../../entities/BorrowTransactionStatus';
import { Field, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class BorrowTransactionStatusResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => BorrowTransactionStatus, { nullable: true })
  borrowTransactionStatus?: BorrowTransactionStatus;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { BorrowTransactionStatusResponse };
