import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Book = {
  __typename?: 'Book';
  accountNumber: Scalars['String'];
  authors?: Maybe<Array<BookAuthor>>;
  bookId: Scalars['String'];
  bookType: BookType;
  bookTypeId: Scalars['Int'];
  categories?: Maybe<Array<BookCategory>>;
  copyRightYear: Scalars['Int'];
  created_at: Scalars['DateTime'];
  dewyDecimal: Scalars['Int'];
  groupUniqueIdentityId: Scalars['Float'];
  id: Scalars['ID'];
  isbnNumber: Scalars['String'];
  placeOfPublication: Scalars['String'];
  publisher: Scalars['String'];
  section: BookSection;
  status: BookStatus;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type BookArgs = {
  accountNumber: Scalars['String'];
  bookId: Scalars['String'];
  copyRightYear: Scalars['Int'];
  dewyDecimal: Scalars['Int'];
  isbnNumber: Scalars['String'];
  placeOfPublication: Scalars['String'];
  publisher: Scalars['String'];
  title: Scalars['String'];
};

export type BookAuthor = {
  __typename?: 'BookAuthor';
  author: Scalars['String'];
  id: Scalars['ID'];
};

export type BookAuthorArgs = {
  author: Scalars['String'];
};

export type BookAuthorResponse = {
  __typename?: 'BookAuthorResponse';
  author?: Maybe<BookAuthor>;
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
};

export type BookCategory = {
  __typename?: 'BookCategory';
  category: Scalars['String'];
  id: Scalars['ID'];
};

export type BookCategoryArgs = {
  category: Scalars['String'];
};

export type BookCategoryResponse = {
  __typename?: 'BookCategoryResponse';
  category?: Maybe<BookCategory>;
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
};

export type BookGroup = {
  __typename?: 'BookGroup';
  authors?: Maybe<Array<BookAuthor>>;
  categories?: Maybe<Array<BookCategory>>;
  copies?: Maybe<Scalars['String']>;
  copyRightYear?: Maybe<Scalars['String']>;
  dewyDecimal?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isbnNumber?: Maybe<Scalars['String']>;
  placeOfPublication?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  section?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type BookGroupUniqueIdentity = {
  __typename?: 'BookGroupUniqueIdentity';
  groupTitle: Scalars['String'];
  groupUniqueIdentity: Scalars['String'];
  id: Scalars['ID'];
};

export type BookResponse = {
  __typename?: 'BookResponse';
  book?: Maybe<Book>;
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
};

export type BookSection = {
  __typename?: 'BookSection';
  id: Scalars['ID'];
  section: Scalars['String'];
};

export type BookSectionArgs = {
  section: Scalars['String'];
};

export type BookSectionResponse = {
  __typename?: 'BookSectionResponse';
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
  section?: Maybe<BookSection>;
};

export type BookStatus = {
  __typename?: 'BookStatus';
  id: Scalars['ID'];
  status: Scalars['String'];
};

export type BookStatusArgs = {
  status: Scalars['String'];
};

export type BookStatusResponse = {
  __typename?: 'BookStatusResponse';
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
  status?: Maybe<BookStatus>;
};

export type BookType = {
  __typename?: 'BookType';
  id: Scalars['ID'];
  type: Scalars['String'];
};

export type BookTypeArgs = {
  type: Scalars['String'];
};

export type BookTypeResponse = {
  __typename?: 'BookTypeResponse';
  bookType?: Maybe<BookType>;
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
};

export type Books_Authors = {
  __typename?: 'Books_Authors';
  bookAuthorId: Scalars['Int'];
  bookId: Scalars['Int'];
};

export type Books_Categories = {
  __typename?: 'Books_Categories';
  bookCategoryId: Scalars['Int'];
  bookId: Scalars['Int'];
};

export type BorrowTransaction = {
  __typename?: 'BorrowTransaction';
  book: Book;
  bookId: Scalars['Float'];
  borrowDate: Scalars['String'];
  borrowTransactionStatus: BorrowTransactionStatus;
  borrowTransactionStatusId: Scalars['Float'];
  fine: Scalars['Float'];
  id: Scalars['ID'];
  qrCode: Scalars['String'];
  returnDate: Scalars['String'];
  user: User;
  userId: Scalars['Float'];
};

export type BorrowTransactionProps = {
  __typename?: 'BorrowTransactionProps';
  accountNumber: Scalars['String'];
  bookId: Scalars['String'];
  borrowDate: Scalars['DateTime'];
  fine: Scalars['Int'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  idNumber: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  qrCode: Scalars['String'];
  remainingDays: Scalars['Int'];
  returnDate: Scalars['DateTime'];
  section: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type BorrowTransactionResponse = {
  __typename?: 'BorrowTransactionResponse';
  borrowTransaction?: Maybe<BorrowTransactionProps>;
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

export type BorrowTransactionStatus = {
  __typename?: 'BorrowTransactionStatus';
  id: Scalars['ID'];
  status: Scalars['String'];
};

export type BorrowTransactionStatusArgs = {
  status: Scalars['String'];
};

export type BorrowTransactionStatusResponse = {
  __typename?: 'BorrowTransactionStatusResponse';
  borrowTransactionStatus?: Maybe<BorrowTransactionStatus>;
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
};

export type CreateReservationResponse = {
  __typename?: 'CreateReservationResponse';
  errors?: Maybe<Array<FieldError>>;
  reservations?: Maybe<Array<Reservations>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GetAllBooksGroupResponse = {
  __typename?: 'GetAllBooksGroupResponse';
  books?: Maybe<Array<BookGroup>>;
  count?: Maybe<Scalars['Int']>;
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
};

export type GetAllBooksResponse = {
  __typename?: 'GetAllBooksResponse';
  books?: Maybe<Array<Book>>;
  count?: Maybe<Scalars['Int']>;
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
};

export type LoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthorToBook: Scalars['Boolean'];
  addCategoryToBook: Scalars['Boolean'];
  createAuthor: BookAuthorResponse;
  createBook: BookResponse;
  createBookCategory: BookCategoryResponse;
  createBookSection: BookSectionResponse;
  createBookStatus: BookStatusResponse;
  createBookType: BookTypeResponse;
  createBorrowTransactionStatus: BorrowTransactionStatusResponse;
  createReservationStatus: ReservationStatusResponse;
  createReservations: CreateReservationResponse;
  createUserAccount: UserAccountResponse;
  createUserAccountRole: UserAccountRoleResponse;
  deleteAllAuthor: Scalars['Boolean'];
  deleteAllBookCategory: Scalars['Boolean'];
  deleteAllBookSection: Scalars['Boolean'];
  deleteAllBookStatus: Scalars['Boolean'];
  deleteAllBookType: Scalars['Boolean'];
  deleteAllBorrowTransactionStatus: Scalars['Boolean'];
  deleteAllReservationStatus: Scalars['Boolean'];
  deleteAllUser: Scalars['Boolean'];
  deleteAllUserAccount: Scalars['Boolean'];
  deleteAllUserAccountRole: Scalars['Boolean'];
  deleteAuthor: Scalars['Boolean'];
  deleteBook: Scalars['Boolean'];
  deleteBookCategory: Scalars['Boolean'];
  deleteBookSection: Scalars['Boolean'];
  deleteBookStatus: Scalars['Boolean'];
  deleteBookType: Scalars['Boolean'];
  deleteBorrowTransaction: Scalars['Boolean'];
  deleteBorrowTransactionStatus: Scalars['Boolean'];
  deleteReservationStatus: Scalars['Boolean'];
  deleteUserAccount: UserAccountResponse;
  deleteUserAccountRole: Scalars['Boolean'];
  removeAuthorFromBook: Scalars['Boolean'];
  removeCategoryFromBook: Scalars['Boolean'];
  updateAuthor: BookAuthorResponse;
  updateBookAvailability: BookResponse;
  updateBookCategory: BookCategoryResponse;
  updateBookSection: BookSectionResponse;
  updateBookStatus: BookStatusResponse;
  updateBookType: BookTypeResponse;
  updateBorrowTransactionStatus: BorrowTransactionStatusResponse;
  updateReservationStatus: ReservationStatusResponse;
  updateReservations: ReservationsResponse;
  updateUser: UserResponse;
  updateUserAccount: UserAccountResponse;
  updateUserAccountRole?: Maybe<UserAccountRole>;
  userLogOut: Scalars['Boolean'];
  userLogin: UserAccountResponse;
};


export type MutationAddAuthorToBookArgs = {
  authors: Array<Scalars['String']>;
  bookId: Scalars['String'];
};


export type MutationAddCategoryToBookArgs = {
  bookId: Scalars['String'];
  categories: Array<Scalars['String']>;
};


export type MutationCreateAuthorArgs = {
  input: BookAuthorArgs;
};


export type MutationCreateBookArgs = {
  authors: Array<Scalars['String']>;
  bookType: Scalars['String'];
  categories: Array<Scalars['String']>;
  input: BookArgs;
  section: Scalars['String'];
  status: Scalars['String'];
};


export type MutationCreateBookCategoryArgs = {
  input: BookCategoryArgs;
};


export type MutationCreateBookSectionArgs = {
  input: BookSectionArgs;
};


export type MutationCreateBookStatusArgs = {
  input: BookStatusArgs;
};


export type MutationCreateBookTypeArgs = {
  input: BookTypeArgs;
};


export type MutationCreateBorrowTransactionStatusArgs = {
  input: BorrowTransactionStatusArgs;
};


export type MutationCreateReservationStatusArgs = {
  input: ReservationStatusArgs;
};


export type MutationCreateReservationsArgs = {
  input: Array<ReservationsArgs>;
};


export type MutationCreateUserAccountArgs = {
  accountInput: UserAccountArgs;
  roleInput: Scalars['String'];
  userInput: UserArgs;
};


export type MutationCreateUserAccountRoleArgs = {
  userAccountRoleInput: UserAccountRoleArgs;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteBookCategoryArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteBookSectionArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteBookStatusArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteBookTypeArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteBorrowTransactionArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteBorrowTransactionStatusArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteReservationStatusArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteUserAccountArgs = {
  accountId: Scalars['Int'];
  userId: Scalars['Int'];
};


export type MutationDeleteUserAccountRoleArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveAuthorFromBookArgs = {
  bookAuthorId: Scalars['Int'];
  bookId: Scalars['Int'];
};


export type MutationRemoveCategoryFromBookArgs = {
  bookCategoryId: Scalars['Int'];
  bookId: Scalars['Int'];
};


export type MutationUpdateAuthorArgs = {
  id: Scalars['Float'];
  input: BookAuthorArgs;
};


export type MutationUpdateBookAvailabilityArgs = {
  id: Scalars['Float'];
  status: Scalars['String'];
};


export type MutationUpdateBookCategoryArgs = {
  id: Scalars['Float'];
  input: BookCategoryArgs;
};


export type MutationUpdateBookSectionArgs = {
  id: Scalars['Float'];
  input: BookSectionArgs;
};


export type MutationUpdateBookStatusArgs = {
  id: Scalars['Float'];
  input: BookStatusArgs;
};


export type MutationUpdateBookTypeArgs = {
  id: Scalars['Float'];
  input: BookTypeArgs;
};


export type MutationUpdateBorrowTransactionStatusArgs = {
  id: Scalars['Float'];
  input: BorrowTransactionStatusArgs;
};


export type MutationUpdateReservationStatusArgs = {
  id: Scalars['Float'];
  input: ReservationStatusArgs;
};


export type MutationUpdateReservationsArgs = {
  details: Scalars['String'];
  id: Scalars['Int'];
  status: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int'];
  userInput: UserArgs;
};


export type MutationUpdateUserAccountArgs = {
  accountInput: UserAccountArgs;
  id: Scalars['Int'];
};


export type MutationUpdateUserAccountRoleArgs = {
  id: Scalars['Int'];
  userAccountRoleInput: UserAccountRoleArgs;
};


export type MutationUserLoginArgs = {
  loginInput: LoginArgs;
};

export type Query = {
  __typename?: 'Query';
  authors: Array<BookAuthor>;
  bookCategories: Array<BookCategory>;
  bookSection: Array<BookSection>;
  bookStatus: Array<BookStatus>;
  bookTypes: Array<BookType>;
  books_authors: Array<Books_Authors>;
  books_categories: Array<Books_Categories>;
  borrowTransaction: Array<BorrowTransactionProps>;
  borrowTransactionStatus: Array<BorrowTransactionStatus>;
  dropTable: Scalars['Boolean'];
  getAllBooks: GetAllBooksResponse;
  getAllBooksGroupByTitle: GetAllBooksGroupResponse;
  getAllUserAccountRoles?: Maybe<Array<UserAccountRole>>;
  getAllUserAccounts: UserAccountGetAllResponse;
  getAllUsers?: Maybe<Array<User>>;
  me?: Maybe<User>;
  reservationScanQr: ReservationsResponse;
  reservationStatus: Array<ReservationStatus>;
  reservations: Array<Reservations>;
  returnBookScanQr: BorrowTransactionResponse;
  userBorrowTransaction: Array<BorrowTransactionProps>;
  userReservations: Array<Reservations>;
};


export type QueryBorrowTransactionArgs = {
  filterByNameOrByTitle: Scalars['String'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  status: Scalars['String'];
};


export type QueryDropTableArgs = {
  table: Scalars['String'];
};


export type QueryGetAllBooksArgs = {
  filterByTitle: Scalars['String'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
};


export type QueryGetAllBooksGroupByTitleArgs = {
  filterByTitle: Scalars['String'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  status: Scalars['String'];
};


export type QueryGetAllUserAccountsArgs = {
  filterByFnameMnameLname: Scalars['String'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
};


export type QueryReservationScanQrArgs = {
  qrCode: Scalars['String'];
};


export type QueryReservationsArgs = {
  filterByName: Scalars['String'];
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  status: Scalars['String'];
};


export type QueryReturnBookScanQrArgs = {
  qrCode: Scalars['String'];
};


export type QueryUserBorrowTransactionArgs = {
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  status: Scalars['String'];
  userId: Scalars['Int'];
};


export type QueryUserReservationsArgs = {
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  status: Scalars['String'];
  userId: Scalars['Int'];
};

export type ReservationStatus = {
  __typename?: 'ReservationStatus';
  id: Scalars['ID'];
  status: Scalars['String'];
};

export type ReservationStatusArgs = {
  status: Scalars['String'];
};

export type ReservationStatusResponse = {
  __typename?: 'ReservationStatusResponse';
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
  reservationStatus?: Maybe<ReservationStatus>;
};

export type Reservations = {
  __typename?: 'Reservations';
  book: Book;
  bookDateIdentity: Scalars['String'];
  bookId: Scalars['Float'];
  details: Scalars['String'];
  expired: Scalars['Boolean'];
  id: Scalars['ID'];
  qrCode: Scalars['String'];
  reservationStatus: ReservationStatus;
  reservationStatusId: Scalars['Float'];
  reserveDate: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

export type ReservationsArgs = {
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type ReservationsResponse = {
  __typename?: 'ReservationsResponse';
  borrowTransaction?: Maybe<BorrowTransaction>;
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  reservations?: Maybe<Reservations>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String'];
  age: Scalars['Int'];
  birthDate: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  idNumber: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
};

export type UserAccount = {
  __typename?: 'UserAccount';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  mobileNumber: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user?: Maybe<User>;
  userAccountRole?: Maybe<UserAccountRole>;
  userAccountRoleId: Scalars['Float'];
  userId: Scalars['Float'];
};

export type UserAccountArgs = {
  email: Scalars['String'];
  mobileNumber: Scalars['String'];
  password: Scalars['String'];
};

export type UserAccountGetAllResponse = {
  __typename?: 'UserAccountGetAllResponse';
  count?: Maybe<Scalars['Int']>;
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
  userAccounts?: Maybe<Array<UserAccount>>;
};

export type UserAccountResponse = {
  __typename?: 'UserAccountResponse';
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
  userAccount?: Maybe<UserAccount>;
};

export type UserAccountRole = {
  __typename?: 'UserAccountRole';
  id: Scalars['ID'];
  role: Scalars['String'];
};

export type UserAccountRoleArgs = {
  role: Scalars['String'];
};

export type UserAccountRoleResponse = {
  __typename?: 'UserAccountRoleResponse';
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UserAccountRole>;
};

export type UserArgs = {
  address: Scalars['String'];
  age: Scalars['Float'];
  birthDate: Scalars['DateTime'];
  firstName: Scalars['String'];
  idNumber: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
};

export type UserBalance = {
  __typename?: 'UserBalance';
  balance: Scalars['Float'];
  id: Scalars['ID'];
  userId: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};

export type CreateReservationsMutationVariables = Exact<{
  input: Array<ReservationsArgs> | ReservationsArgs;
}>;


export type CreateReservationsMutation = { __typename?: 'Mutation', createReservations: { __typename?: 'CreateReservationResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, reservations?: Array<{ __typename?: 'Reservations', id: string, qrCode: string, reserveDate: any, details: string, expired: boolean, user: { __typename?: 'User', id: string, firstName: string, middleName: string, lastName: string, idNumber: string }, book: { __typename?: 'Book', id: string, bookId: string, accountNumber: string, isbnNumber: string, title: string }, reservationStatus: { __typename?: 'ReservationStatus', status: string } }> | null | undefined } };

export type UserLogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type UserLogOutMutation = { __typename?: 'Mutation', userLogOut: boolean };

export type UserLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserAccountResponse', isSucess?: boolean | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, userAccount?: { __typename?: 'UserAccount', id: string } | null | undefined } };

export type BorrowTransactionQueryVariables = Exact<{
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  filterByNameOrByTitle: Scalars['String'];
  status: Scalars['String'];
}>;


export type BorrowTransactionQuery = { __typename?: 'Query', borrowTransaction: Array<{ __typename?: 'BorrowTransactionProps', id: string, qrCode: string, borrowDate: any, returnDate: any, userId: number, idNumber: string, firstName: string, middleName: string, lastName: string, bookId: string, accountNumber: string, section: string, title: string, status: string, fine: number, remainingDays: number }> };

export type GetAllBooksGroupByTitleQueryVariables = Exact<{
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  filterByTitle: Scalars['String'];
  status: Scalars['String'];
}>;


export type GetAllBooksGroupByTitleQuery = { __typename?: 'Query', getAllBooksGroupByTitle: { __typename?: 'GetAllBooksGroupResponse', count?: number | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, books?: Array<{ __typename?: 'BookGroup', id: string, title?: string | null | undefined, isbnNumber?: string | null | undefined, dewyDecimal?: number | null | undefined, section?: string | null | undefined, publisher?: string | null | undefined, placeOfPublication?: string | null | undefined, copyRightYear?: string | null | undefined, type?: string | null | undefined, status?: string | null | undefined, copies?: string | null | undefined, categories?: Array<{ __typename?: 'BookCategory', id: string, category: string }> | null | undefined, authors?: Array<{ __typename?: 'BookAuthor', id: string, author: string }> | null | undefined }> | null | undefined } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, idNumber: string, firstName: string, middleName: string, lastName: string, age: number, birthDate: string, address: string } | null | undefined };

export type UserBorrowTransactionQueryVariables = Exact<{
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  userId: Scalars['Int'];
  status: Scalars['String'];
}>;


export type UserBorrowTransactionQuery = { __typename?: 'Query', userBorrowTransaction: Array<{ __typename?: 'BorrowTransactionProps', id: string, qrCode: string, borrowDate: any, returnDate: any, userId: number, idNumber: string, firstName: string, middleName: string, lastName: string, bookId: string, accountNumber: string, section: string, title: string, status: string, fine: number, remainingDays: number }> };

export type UserReservationsQueryVariables = Exact<{
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  userId: Scalars['Int'];
  status: Scalars['String'];
}>;


export type UserReservationsQuery = { __typename?: 'Query', userReservations: Array<{ __typename?: 'Reservations', id: string, qrCode: string, reserveDate: any, details: string, expired: boolean, book: { __typename?: 'Book', id: string, bookId: string, accountNumber: string, isbnNumber: string, title: string }, reservationStatus: { __typename?: 'ReservationStatus', status: string } }> };


export const CreateReservationsDocument = gql`
    mutation CreateReservations($input: [ReservationsArgs!]!) {
  createReservations(input: $input) {
    errors {
      field
      message
    }
    reservations {
      id
      qrCode
      reserveDate
      user {
        id
        firstName
        middleName
        lastName
        idNumber
      }
      book {
        id
        bookId
        accountNumber
        isbnNumber
        title
      }
      reservationStatus {
        status
      }
      details
      expired
    }
  }
}
    `;
export type CreateReservationsMutationFn = Apollo.MutationFunction<CreateReservationsMutation, CreateReservationsMutationVariables>;

/**
 * __useCreateReservationsMutation__
 *
 * To run a mutation, you first call `useCreateReservationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReservationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReservationsMutation, { data, loading, error }] = useCreateReservationsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReservationsMutation(baseOptions?: Apollo.MutationHookOptions<CreateReservationsMutation, CreateReservationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReservationsMutation, CreateReservationsMutationVariables>(CreateReservationsDocument, options);
      }
export type CreateReservationsMutationHookResult = ReturnType<typeof useCreateReservationsMutation>;
export type CreateReservationsMutationResult = Apollo.MutationResult<CreateReservationsMutation>;
export type CreateReservationsMutationOptions = Apollo.BaseMutationOptions<CreateReservationsMutation, CreateReservationsMutationVariables>;
export const UserLogOutDocument = gql`
    mutation UserLogOut {
  userLogOut
}
    `;
export type UserLogOutMutationFn = Apollo.MutationFunction<UserLogOutMutation, UserLogOutMutationVariables>;

/**
 * __useUserLogOutMutation__
 *
 * To run a mutation, you first call `useUserLogOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLogOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLogOutMutation, { data, loading, error }] = useUserLogOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useUserLogOutMutation(baseOptions?: Apollo.MutationHookOptions<UserLogOutMutation, UserLogOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserLogOutMutation, UserLogOutMutationVariables>(UserLogOutDocument, options);
      }
export type UserLogOutMutationHookResult = ReturnType<typeof useUserLogOutMutation>;
export type UserLogOutMutationResult = Apollo.MutationResult<UserLogOutMutation>;
export type UserLogOutMutationOptions = Apollo.BaseMutationOptions<UserLogOutMutation, UserLogOutMutationVariables>;
export const UserLoginDocument = gql`
    mutation UserLogin($email: String!, $password: String!) {
  userLogin(loginInput: {email: $email, password: $password}) {
    errors {
      field
      message
    }
    userAccount {
      id
    }
    isSucess
  }
}
    `;
export type UserLoginMutationFn = Apollo.MutationFunction<UserLoginMutation, UserLoginMutationVariables>;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUserLoginMutation(baseOptions?: Apollo.MutationHookOptions<UserLoginMutation, UserLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserLoginMutation, UserLoginMutationVariables>(UserLoginDocument, options);
      }
export type UserLoginMutationHookResult = ReturnType<typeof useUserLoginMutation>;
export type UserLoginMutationResult = Apollo.MutationResult<UserLoginMutation>;
export type UserLoginMutationOptions = Apollo.BaseMutationOptions<UserLoginMutation, UserLoginMutationVariables>;
export const BorrowTransactionDocument = gql`
    query BorrowTransaction($page: Int!, $perPage: Int!, $filterByNameOrByTitle: String!, $status: String!) {
  borrowTransaction(
    page: $page
    perPage: $perPage
    filterByNameOrByTitle: $filterByNameOrByTitle
    status: $status
  ) {
    id
    qrCode
    borrowDate
    returnDate
    userId
    idNumber
    firstName
    middleName
    lastName
    bookId
    accountNumber
    section
    title
    status
    fine
    remainingDays
  }
}
    `;

/**
 * __useBorrowTransactionQuery__
 *
 * To run a query within a React component, call `useBorrowTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useBorrowTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBorrowTransactionQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      filterByNameOrByTitle: // value for 'filterByNameOrByTitle'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useBorrowTransactionQuery(baseOptions: Apollo.QueryHookOptions<BorrowTransactionQuery, BorrowTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BorrowTransactionQuery, BorrowTransactionQueryVariables>(BorrowTransactionDocument, options);
      }
export function useBorrowTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BorrowTransactionQuery, BorrowTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BorrowTransactionQuery, BorrowTransactionQueryVariables>(BorrowTransactionDocument, options);
        }
export type BorrowTransactionQueryHookResult = ReturnType<typeof useBorrowTransactionQuery>;
export type BorrowTransactionLazyQueryHookResult = ReturnType<typeof useBorrowTransactionLazyQuery>;
export type BorrowTransactionQueryResult = Apollo.QueryResult<BorrowTransactionQuery, BorrowTransactionQueryVariables>;
export const GetAllBooksGroupByTitleDocument = gql`
    query GetAllBooksGroupByTitle($page: Int!, $perPage: Int!, $filterByTitle: String!, $status: String!) {
  getAllBooksGroupByTitle(
    page: $page
    perPage: $perPage
    filterByTitle: $filterByTitle
    status: $status
  ) {
    errors {
      field
      message
    }
    books {
      id
      title
      isbnNumber
      dewyDecimal
      section
      publisher
      placeOfPublication
      copyRightYear
      type
      status
      copies
      categories {
        id
        category
      }
      authors {
        id
        author
      }
    }
    count
  }
}
    `;

/**
 * __useGetAllBooksGroupByTitleQuery__
 *
 * To run a query within a React component, call `useGetAllBooksGroupByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBooksGroupByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBooksGroupByTitleQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      filterByTitle: // value for 'filterByTitle'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetAllBooksGroupByTitleQuery(baseOptions: Apollo.QueryHookOptions<GetAllBooksGroupByTitleQuery, GetAllBooksGroupByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBooksGroupByTitleQuery, GetAllBooksGroupByTitleQueryVariables>(GetAllBooksGroupByTitleDocument, options);
      }
export function useGetAllBooksGroupByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBooksGroupByTitleQuery, GetAllBooksGroupByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBooksGroupByTitleQuery, GetAllBooksGroupByTitleQueryVariables>(GetAllBooksGroupByTitleDocument, options);
        }
export type GetAllBooksGroupByTitleQueryHookResult = ReturnType<typeof useGetAllBooksGroupByTitleQuery>;
export type GetAllBooksGroupByTitleLazyQueryHookResult = ReturnType<typeof useGetAllBooksGroupByTitleLazyQuery>;
export type GetAllBooksGroupByTitleQueryResult = Apollo.QueryResult<GetAllBooksGroupByTitleQuery, GetAllBooksGroupByTitleQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    idNumber
    firstName
    middleName
    lastName
    age
    birthDate
    address
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserBorrowTransactionDocument = gql`
    query UserBorrowTransaction($page: Int!, $perPage: Int!, $userId: Int!, $status: String!) {
  userBorrowTransaction(
    page: $page
    perPage: $perPage
    userId: $userId
    status: $status
  ) {
    id
    qrCode
    borrowDate
    returnDate
    userId
    idNumber
    firstName
    middleName
    lastName
    bookId
    accountNumber
    section
    title
    status
    fine
    remainingDays
  }
}
    `;

/**
 * __useUserBorrowTransactionQuery__
 *
 * To run a query within a React component, call `useUserBorrowTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBorrowTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserBorrowTransactionQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      userId: // value for 'userId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUserBorrowTransactionQuery(baseOptions: Apollo.QueryHookOptions<UserBorrowTransactionQuery, UserBorrowTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserBorrowTransactionQuery, UserBorrowTransactionQueryVariables>(UserBorrowTransactionDocument, options);
      }
export function useUserBorrowTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserBorrowTransactionQuery, UserBorrowTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserBorrowTransactionQuery, UserBorrowTransactionQueryVariables>(UserBorrowTransactionDocument, options);
        }
export type UserBorrowTransactionQueryHookResult = ReturnType<typeof useUserBorrowTransactionQuery>;
export type UserBorrowTransactionLazyQueryHookResult = ReturnType<typeof useUserBorrowTransactionLazyQuery>;
export type UserBorrowTransactionQueryResult = Apollo.QueryResult<UserBorrowTransactionQuery, UserBorrowTransactionQueryVariables>;
export const UserReservationsDocument = gql`
    query UserReservations($page: Int!, $perPage: Int!, $userId: Int!, $status: String!) {
  userReservations(
    page: $page
    perPage: $perPage
    userId: $userId
    status: $status
  ) {
    id
    qrCode
    reserveDate
    book {
      id
      bookId
      accountNumber
      isbnNumber
      title
    }
    reservationStatus {
      status
    }
    details
    expired
  }
}
    `;

/**
 * __useUserReservationsQuery__
 *
 * To run a query within a React component, call `useUserReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserReservationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      userId: // value for 'userId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUserReservationsQuery(baseOptions: Apollo.QueryHookOptions<UserReservationsQuery, UserReservationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserReservationsQuery, UserReservationsQueryVariables>(UserReservationsDocument, options);
      }
export function useUserReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserReservationsQuery, UserReservationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserReservationsQuery, UserReservationsQueryVariables>(UserReservationsDocument, options);
        }
export type UserReservationsQueryHookResult = ReturnType<typeof useUserReservationsQuery>;
export type UserReservationsLazyQueryHookResult = ReturnType<typeof useUserReservationsLazyQuery>;
export type UserReservationsQueryResult = Apollo.QueryResult<UserReservationsQuery, UserReservationsQueryVariables>;