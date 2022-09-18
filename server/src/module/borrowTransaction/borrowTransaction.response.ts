import { Field, ID, Int, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

// Borrow Transaction
@ObjectType()
class BorrowTransactionProps {
  @Field(() => ID)
  id: number;
  @Field()
  qrCode: string;
  @Field()
  borrowDate: Date;
  @Field()
  returnDate: Date;
  @Field(() => Int)
  fine: number;
  @Field(() => Int)
  remainingDays: number;
  @Field(() => Int)
  userId: number;
  @Field()
  idNumber: string;
  @Field()
  firstName: string;
  @Field()
  middleName: string;
  @Field()
  lastName: string;
  @Field()
  bookId: string;
  @Field()
  accountNumber: string;
  @Field()
  title: string;
  @Field()
  section: string;
  @Field()
  status: string;
  @Field({ nullable: true })
  paymentStatus: string;
}

@ObjectType()
class BorrowTransactionResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => BorrowTransactionProps, { nullable: true })
  borrowTransaction?: BorrowTransactionProps;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;

  @Field(() => String, { nullable: true })
  message?: string;
}

export { BorrowTransactionProps, BorrowTransactionResponse };
