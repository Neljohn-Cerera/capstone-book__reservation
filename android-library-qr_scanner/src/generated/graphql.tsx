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

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, idNumber: string, firstName: string, middleName: string, lastName: string, age: number, birthDate: string, address: string } | null | undefined };

export type ReservationScanQrQueryVariables = Exact<{
  qrCode: Scalars['String'];
}>;


export type ReservationScanQrQuery = { __typename?: 'Query', reservationScanQr: { __typename?: 'ReservationsResponse', message?: string | null | undefined, isSucess?: boolean | null | undefined, borrowTransaction?: { __typename?: 'BorrowTransaction', id: string, qrCode: string, borrowDate: string, returnDate: string, fine: number, user: { __typename?: 'User', id: string, idNumber: string, firstName: string, middleName: string, lastName: string }, book: { __typename?: 'Book', id: string, title: string }, borrowTransactionStatus: { __typename?: 'BorrowTransactionStatus', id: string, status: string } } | null | undefined } };

export type ReturnBookScanQrQueryVariables = Exact<{
  qrCode: Scalars['String'];
}>;


export type ReturnBookScanQrQuery = { __typename?: 'Query', returnBookScanQr: { __typename?: 'BorrowTransactionResponse', message?: string | null | undefined, isSucess?: boolean | null | undefined, borrowTransaction?: { __typename?: 'BorrowTransactionProps', id: string, qrCode: string, borrowDate: any, returnDate: any, idNumber: string, firstName: string, middleName: string, lastName: string, bookId: string, accountNumber: string, title: string, fine: number } | null | undefined } };


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
export const ReservationScanQrDocument = gql`
    query ReservationScanQr($qrCode: String!) {
  reservationScanQr(qrCode: $qrCode) {
    message
    isSucess
    borrowTransaction {
      id
      qrCode
      borrowDate
      returnDate
      user {
        id
        idNumber
        firstName
        middleName
        lastName
      }
      book {
        id
        title
      }
      borrowTransactionStatus {
        id
        status
      }
      fine
    }
  }
}
    `;

/**
 * __useReservationScanQrQuery__
 *
 * To run a query within a React component, call `useReservationScanQrQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationScanQrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationScanQrQuery({
 *   variables: {
 *      qrCode: // value for 'qrCode'
 *   },
 * });
 */
export function useReservationScanQrQuery(baseOptions: Apollo.QueryHookOptions<ReservationScanQrQuery, ReservationScanQrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReservationScanQrQuery, ReservationScanQrQueryVariables>(ReservationScanQrDocument, options);
      }
export function useReservationScanQrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservationScanQrQuery, ReservationScanQrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReservationScanQrQuery, ReservationScanQrQueryVariables>(ReservationScanQrDocument, options);
        }
export type ReservationScanQrQueryHookResult = ReturnType<typeof useReservationScanQrQuery>;
export type ReservationScanQrLazyQueryHookResult = ReturnType<typeof useReservationScanQrLazyQuery>;
export type ReservationScanQrQueryResult = Apollo.QueryResult<ReservationScanQrQuery, ReservationScanQrQueryVariables>;
export const ReturnBookScanQrDocument = gql`
    query ReturnBookScanQr($qrCode: String!) {
  returnBookScanQr(qrCode: $qrCode) {
    borrowTransaction {
      id
      qrCode
      borrowDate
      returnDate
      idNumber
      firstName
      middleName
      lastName
      bookId
      accountNumber
      title
      fine
    }
    message
    isSucess
  }
}
    `;

/**
 * __useReturnBookScanQrQuery__
 *
 * To run a query within a React component, call `useReturnBookScanQrQuery` and pass it any options that fit your needs.
 * When your component renders, `useReturnBookScanQrQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReturnBookScanQrQuery({
 *   variables: {
 *      qrCode: // value for 'qrCode'
 *   },
 * });
 */
export function useReturnBookScanQrQuery(baseOptions: Apollo.QueryHookOptions<ReturnBookScanQrQuery, ReturnBookScanQrQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReturnBookScanQrQuery, ReturnBookScanQrQueryVariables>(ReturnBookScanQrDocument, options);
      }
export function useReturnBookScanQrLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReturnBookScanQrQuery, ReturnBookScanQrQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReturnBookScanQrQuery, ReturnBookScanQrQueryVariables>(ReturnBookScanQrDocument, options);
        }
export type ReturnBookScanQrQueryHookResult = ReturnType<typeof useReturnBookScanQrQuery>;
export type ReturnBookScanQrLazyQueryHookResult = ReturnType<typeof useReturnBookScanQrLazyQuery>;
export type ReturnBookScanQrQueryResult = Apollo.QueryResult<ReturnBookScanQrQuery, ReturnBookScanQrQueryVariables>;