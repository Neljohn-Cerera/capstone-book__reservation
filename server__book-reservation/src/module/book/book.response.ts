import { BookAuthor } from './../../entities/BookAuthor';
import { MyContext } from './../../types';
import { BookCategory } from './../../entities/BookCategory';
import { Book } from './../../entities/Book';
import { Ctx, Field, ID, Int, ObjectType } from 'type-graphql';
import { FieldError } from '../../utils/FieldError';

@ObjectType()
class BookGroup {
  @Field(() => ID)
  id: number;
  @Field({ nullable: true })
  title: string;
  @Field({ nullable: true })
  isbnNumber: string;
  @Field({ nullable: true })
  publisher: string;
  @Field({ nullable: true })
  placeOfPublication: string;
  @Field({ nullable: true })
  copyRightYear: string;
  @Field(() => Int, { nullable: true })
  dewyDecimal: number;
  @Field(() => String, { nullable: true })
  copies: number;
  @Field({ nullable: true })
  section: string;
  @Field({ nullable: true })
  status: string;
  @Field({ nullable: true })
  type: string;

  @Field(() => [BookCategory], { nullable: true })
  async categories(
    @Ctx() { categoriesLoader }: MyContext
  ): Promise<BookCategory[]> {
    return categoriesLoader.load(this.id) as any;
  }

  @Field(() => [BookAuthor], { nullable: true })
  async authors(@Ctx() { authorsLoader }: MyContext): Promise<BookAuthor[]> {
    return authorsLoader.load(this.id) as any;
  }
}

@ObjectType()
class BookResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Book, { nullable: true })
  book?: Book;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}
@ObjectType()
class GetAllBooksResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => [Book], { nullable: true })
  books?: Book[];

  @Field(() => Int, { nullable: true })
  count?: number;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

@ObjectType()
class GetAllBooksGroupResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => [BookGroup], { nullable: true })
  books?: BookGroup[];

  @Field(() => Int, { nullable: true })
  count?: number;

  @Field(() => Boolean, { nullable: true })
  isSucess?: boolean;
}

export { BookResponse, GetAllBooksResponse, GetAllBooksGroupResponse };
