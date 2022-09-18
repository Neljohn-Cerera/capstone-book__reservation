/* eslint-disable valid-jsdoc */
/* eslint-disable camelcase */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
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
  paymentStatus: Scalars['String'];
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
  paymentStatus?: Maybe<Scalars['String']>;
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
  updateSettings: SettingsResponse;
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

export type MutationUpdateSettingsArgs = {
  input: SettingsArgs;
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
  settings: Settings;
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

export type Settings = {
  __typename?: 'Settings';
  fine: Scalars['Int'];
  id: Scalars['ID'];
};

export type SettingsArgs = {
  fine: Scalars['Float'];
};

export type SettingsResponse = {
  __typename?: 'SettingsResponse';
  errors?: Maybe<Array<FieldError>>;
  isSucess?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<Settings>;
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

export type CreateBookMutationVariables = Exact<{
  categories: Array<Scalars['String']> | Scalars['String'];
  authors: Array<Scalars['String']> | Scalars['String'];
  section: Scalars['String'];
  status: Scalars['String'];
  bookType: Scalars['String'];
  input: BookArgs;
}>;

export type CreateBookMutation = {
  __typename?: 'Mutation';
  createBook: {
    __typename?: 'BookResponse';
    isSucess?: boolean | null | undefined;
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined;
    book?:
      | { __typename?: 'Book'; id: string; groupUniqueIdentityId: number }
      | null
      | undefined;
  };
};

export type CreateReservationsMutationVariables = Exact<{
  input: Array<ReservationsArgs> | ReservationsArgs;
}>;

export type CreateReservationsMutation = {
  __typename?: 'Mutation';
  createReservations: {
    __typename?: 'CreateReservationResponse';
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined;
    reservations?:
      | Array<{
          __typename?: 'Reservations';
          id: string;
          qrCode: string;
          reserveDate: any;
          details: string;
          expired: boolean;
          user: {
            __typename?: 'User';
            id: string;
            firstName: string;
            middleName: string;
            lastName: string;
            idNumber: string;
          };
          book: {
            __typename?: 'Book';
            id: string;
            bookId: string;
            accountNumber: string;
            isbnNumber: string;
            title: string;
          };
          reservationStatus: {
            __typename?: 'ReservationStatus';
            status: string;
          };
        }>
      | null
      | undefined;
  };
};

export type CreateUserAccountMutationVariables = Exact<{
  roleInput: Scalars['String'];
  accountInput: UserAccountArgs;
  userInput: UserArgs;
}>;

export type CreateUserAccountMutation = {
  __typename?: 'Mutation';
  createUserAccount: {
    __typename?: 'UserAccountResponse';
    isSucess?: boolean | null | undefined;
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined;
    userAccount?:
      | {
          __typename?: 'UserAccount';
          id: string;
          userId: number;
          userAccountRoleId: number;
        }
      | null
      | undefined;
  };
};

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['Int'];
}>;

export type DeleteBookMutation = {
  __typename?: 'Mutation';
  deleteBook: boolean;
};

export type UpdateReservationsMutationVariables = Exact<{
  id: Scalars['Int'];
  status: Scalars['String'];
  details: Scalars['String'];
}>;

export type UpdateReservationsMutation = {
  __typename?: 'Mutation';
  updateReservations: {
    __typename?: 'ReservationsResponse';
    isSucess?: boolean | null | undefined;
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined;
    reservations?:
      | {
          __typename?: 'Reservations';
          id: string;
          qrCode: string;
          reserveDate: any;
          details: string;
          expired: boolean;
          user: {
            __typename?: 'User';
            id: string;
            firstName: string;
            middleName: string;
            lastName: string;
            idNumber: string;
          };
          book: {
            __typename?: 'Book';
            id: string;
            bookId: string;
            accountNumber: string;
            isbnNumber: string;
            title: string;
          };
          reservationStatus: {
            __typename?: 'ReservationStatus';
            status: string;
          };
        }
      | null
      | undefined;
  };
};

export type UpdateSettingsMutationVariables = Exact<{
  fine: Scalars['Float'];
}>;

export type UpdateSettingsMutation = {
  __typename?: 'Mutation';
  updateSettings: {
    __typename?: 'SettingsResponse';
    isSucess?: boolean | null | undefined;
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined;
    settings?:
      | { __typename?: 'Settings'; id: string; fine: number }
      | null
      | undefined;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me?:
    | {
        __typename?: 'User';
        id: string;
        idNumber: string;
        firstName: string;
        middleName: string;
        lastName: string;
        age: number;
        birthDate: string;
        address: string;
      }
    | null
    | undefined;
};

export type ReservationScanQrQueryVariables = Exact<{
  qrCode: Scalars['String'];
}>;

export type ReservationScanQrQuery = {
  __typename?: 'Query';
  reservationScanQr: {
    __typename?: 'ReservationsResponse';
    message?: string | null | undefined;
    isSucess?: boolean | null | undefined;
    borrowTransaction?:
      | {
          __typename?: 'BorrowTransaction';
          id: string;
          qrCode: string;
          borrowDate: string;
          returnDate: string;
          fine: number;
          user: {
            __typename?: 'User';
            id: string;
            idNumber: string;
            firstName: string;
            middleName: string;
            lastName: string;
          };
          book: { __typename?: 'Book'; id: string; title: string };
          borrowTransactionStatus: {
            __typename?: 'BorrowTransactionStatus';
            id: string;
            status: string;
          };
        }
      | null
      | undefined;
  };
};

export type BorrowTransactionQueryVariables = Exact<{
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  filterByNameOrByTitle: Scalars['String'];
  status: Scalars['String'];
}>;

export type BorrowTransactionQuery = {
  __typename?: 'Query';
  borrowTransaction: Array<{
    __typename?: 'BorrowTransactionProps';
    id: string;
    qrCode: string;
    borrowDate: any;
    returnDate: any;
    idNumber: string;
    firstName: string;
    middleName: string;
    lastName: string;
    bookId: string;
    accountNumber: string;
    section: string;
    title: string;
    status: string;
    fine: number;
    remainingDays: number;
    paymentStatus?: string | null | undefined;
  }>;
};

export type GetAllBooksQueryVariables = Exact<{
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  filterByTitle: Scalars['String'];
}>;

export type GetAllBooksQuery = {
  __typename?: 'Query';
  getAllBooks: {
    __typename?: 'GetAllBooksResponse';
    count?: number | null | undefined;
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined;
    books?:
      | Array<{
          __typename?: 'Book';
          id: string;
          groupUniqueIdentityId: number;
          bookId: string;
          title: string;
          dewyDecimal: number;
          status: { __typename?: 'BookStatus'; status: string };
          section: { __typename?: 'BookSection'; section: string };
          bookType: { __typename?: 'BookType'; type: string };
        }>
      | null
      | undefined;
  };
};

export type GetAllBooksGroupByTitleQueryVariables = Exact<{
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  filterByTitle: Scalars['String'];
  status: Scalars['String'];
}>;

export type GetAllBooksGroupByTitleQuery = {
  __typename?: 'Query';
  getAllBooksGroupByTitle: {
    __typename?: 'GetAllBooksGroupResponse';
    count?: number | null | undefined;
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined;
    books?:
      | Array<{
          __typename?: 'BookGroup';
          id: string;
          title?: string | null | undefined;
          isbnNumber?: string | null | undefined;
          dewyDecimal?: number | null | undefined;
          section?: string | null | undefined;
          publisher?: string | null | undefined;
          placeOfPublication?: string | null | undefined;
          copyRightYear?: string | null | undefined;
          type?: string | null | undefined;
          status?: string | null | undefined;
          copies?: string | null | undefined;
          categories?:
            | Array<{
                __typename?: 'BookCategory';
                id: string;
                category: string;
              }>
            | null
            | undefined;
          authors?:
            | Array<{ __typename?: 'BookAuthor'; id: string; author: string }>
            | null
            | undefined;
        }>
      | null
      | undefined;
  };
};

export type GetAllUserAccountsQueryVariables = Exact<{
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  filterByFnameMnameLname: Scalars['String'];
}>;

export type GetAllUserAccountsQuery = {
  __typename?: 'Query';
  getAllUserAccounts: {
    __typename?: 'UserAccountGetAllResponse';
    count?: number | null | undefined;
    isSucess?: boolean | null | undefined;
    errors?:
      | Array<{ __typename?: 'FieldError'; field: string; message: string }>
      | null
      | undefined;
    userAccounts?:
      | Array<{
          __typename?: 'UserAccount';
          id: string;
          mobileNumber: string;
          isActive: boolean;
          userAccountRole?:
            | { __typename?: 'UserAccountRole'; role: string }
            | null
            | undefined;
          user?:
            | {
                __typename?: 'User';
                id: string;
                idNumber: string;
                firstName: string;
                middleName: string;
                lastName: string;
              }
            | null
            | undefined;
        }>
      | null
      | undefined;
  };
};

export type ReservationsQueryVariables = Exact<{
  page: Scalars['Int'];
  perPage: Scalars['Int'];
  filterByName: Scalars['String'];
  status: Scalars['String'];
}>;

export type ReservationsQuery = {
  __typename?: 'Query';
  reservations: Array<{
    __typename?: 'Reservations';
    id: string;
    qrCode: string;
    reserveDate: any;
    details: string;
    expired: boolean;
    user: {
      __typename?: 'User';
      id: string;
      firstName: string;
      middleName: string;
      lastName: string;
      idNumber: string;
    };
    book: {
      __typename?: 'Book';
      id: string;
      bookId: string;
      accountNumber: string;
      isbnNumber: string;
      title: string;
    };
    reservationStatus: { __typename?: 'ReservationStatus'; status: string };
  }>;
};

export type SettingsQueryVariables = Exact<{ [key: string]: never }>;

export type SettingsQuery = {
  __typename?: 'Query';
  settings: { __typename?: 'Settings'; id: string; fine: number };
};

export const CreateBookDocument = gql`
  mutation CreateBook(
    $categories: [String!]!
    $authors: [String!]!
    $section: String!
    $status: String!
    $bookType: String!
    $input: BookArgs!
  ) {
    createBook(
      categories: $categories
      authors: $authors
      section: $section
      status: $status
      bookType: $bookType
      input: $input
    ) {
      errors {
        field
        message
      }
      book {
        id
        groupUniqueIdentityId
      }
      isSucess
    }
  }
`;
export type CreateBookMutationFn = Apollo.MutationFunction<
  CreateBookMutation,
  CreateBookMutationVariables
>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      categories: // value for 'categories'
 *      authors: // value for 'authors'
 *      section: // value for 'section'
 *      status: // value for 'status'
 *      bookType: // value for 'bookType'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBookMutation,
    CreateBookMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(
    CreateBookDocument,
    options
  );
}
export type CreateBookMutationHookResult = ReturnType<
  typeof useCreateBookMutation
>;
export type CreateBookMutationResult =
  Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<
  CreateBookMutation,
  CreateBookMutationVariables
>;
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
export type CreateReservationsMutationFn = Apollo.MutationFunction<
  CreateReservationsMutation,
  CreateReservationsMutationVariables
>;

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
export function useCreateReservationsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateReservationsMutation,
    CreateReservationsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateReservationsMutation,
    CreateReservationsMutationVariables
  >(CreateReservationsDocument, options);
}
export type CreateReservationsMutationHookResult = ReturnType<
  typeof useCreateReservationsMutation
>;
export type CreateReservationsMutationResult =
  Apollo.MutationResult<CreateReservationsMutation>;
export type CreateReservationsMutationOptions = Apollo.BaseMutationOptions<
  CreateReservationsMutation,
  CreateReservationsMutationVariables
>;
export const CreateUserAccountDocument = gql`
  mutation CreateUserAccount(
    $roleInput: String!
    $accountInput: UserAccountArgs!
    $userInput: UserArgs!
  ) {
    createUserAccount(
      roleInput: $roleInput
      accountInput: $accountInput
      userInput: $userInput
    ) {
      errors {
        field
        message
      }
      userAccount {
        id
        userId
        userAccountRoleId
      }
      isSucess
    }
  }
`;
export type CreateUserAccountMutationFn = Apollo.MutationFunction<
  CreateUserAccountMutation,
  CreateUserAccountMutationVariables
>;

/**
 * __useCreateUserAccountMutation__
 *
 * To run a mutation, you first call `useCreateUserAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserAccountMutation, { data, loading, error }] = useCreateUserAccountMutation({
 *   variables: {
 *      roleInput: // value for 'roleInput'
 *      accountInput: // value for 'accountInput'
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useCreateUserAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserAccountMutation,
    CreateUserAccountMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateUserAccountMutation,
    CreateUserAccountMutationVariables
  >(CreateUserAccountDocument, options);
}
export type CreateUserAccountMutationHookResult = ReturnType<
  typeof useCreateUserAccountMutation
>;
export type CreateUserAccountMutationResult =
  Apollo.MutationResult<CreateUserAccountMutation>;
export type CreateUserAccountMutationOptions = Apollo.BaseMutationOptions<
  CreateUserAccountMutation,
  CreateUserAccountMutationVariables
>;
export const DeleteBookDocument = gql`
  mutation DeleteBook($id: Int!) {
    deleteBook(id: $id)
  }
`;
export type DeleteBookMutationFn = Apollo.MutationFunction<
  DeleteBookMutation,
  DeleteBookMutationVariables
>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBookMutation,
    DeleteBookMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(
    DeleteBookDocument,
    options
  );
}
export type DeleteBookMutationHookResult = ReturnType<
  typeof useDeleteBookMutation
>;
export type DeleteBookMutationResult =
  Apollo.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<
  DeleteBookMutation,
  DeleteBookMutationVariables
>;
export const UpdateReservationsDocument = gql`
  mutation UpdateReservations($id: Int!, $status: String!, $details: String!) {
    updateReservations(id: $id, status: $status, details: $details) {
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
      isSucess
    }
  }
`;
export type UpdateReservationsMutationFn = Apollo.MutationFunction<
  UpdateReservationsMutation,
  UpdateReservationsMutationVariables
>;

/**
 * __useUpdateReservationsMutation__
 *
 * To run a mutation, you first call `useUpdateReservationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReservationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReservationsMutation, { data, loading, error }] = useUpdateReservationsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *      details: // value for 'details'
 *   },
 * });
 */
export function useUpdateReservationsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateReservationsMutation,
    UpdateReservationsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateReservationsMutation,
    UpdateReservationsMutationVariables
  >(UpdateReservationsDocument, options);
}
export type UpdateReservationsMutationHookResult = ReturnType<
  typeof useUpdateReservationsMutation
>;
export type UpdateReservationsMutationResult =
  Apollo.MutationResult<UpdateReservationsMutation>;
export type UpdateReservationsMutationOptions = Apollo.BaseMutationOptions<
  UpdateReservationsMutation,
  UpdateReservationsMutationVariables
>;
export const UpdateSettingsDocument = gql`
  mutation UpdateSettings($fine: Float!) {
    updateSettings(input: { fine: $fine }) {
      errors {
        field
        message
      }
      settings {
        id
        fine
      }
      isSucess
    }
  }
`;
export type UpdateSettingsMutationFn = Apollo.MutationFunction<
  UpdateSettingsMutation,
  UpdateSettingsMutationVariables
>;

/**
 * __useUpdateSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettingsMutation, { data, loading, error }] = useUpdateSettingsMutation({
 *   variables: {
 *      fine: // value for 'fine'
 *   },
 * });
 */
export function useUpdateSettingsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateSettingsMutation,
    UpdateSettingsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateSettingsMutation,
    UpdateSettingsMutationVariables
  >(UpdateSettingsDocument, options);
}
export type UpdateSettingsMutationHookResult = ReturnType<
  typeof useUpdateSettingsMutation
>;
export type UpdateSettingsMutationResult =
  Apollo.MutationResult<UpdateSettingsMutation>;
export type UpdateSettingsMutationOptions = Apollo.BaseMutationOptions<
  UpdateSettingsMutation,
  UpdateSettingsMutationVariables
>;
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
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
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
export function useReservationScanQrQuery(
  baseOptions: Apollo.QueryHookOptions<
    ReservationScanQrQuery,
    ReservationScanQrQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    ReservationScanQrQuery,
    ReservationScanQrQueryVariables
  >(ReservationScanQrDocument, options);
}
export function useReservationScanQrLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ReservationScanQrQuery,
    ReservationScanQrQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ReservationScanQrQuery,
    ReservationScanQrQueryVariables
  >(ReservationScanQrDocument, options);
}
export type ReservationScanQrQueryHookResult = ReturnType<
  typeof useReservationScanQrQuery
>;
export type ReservationScanQrLazyQueryHookResult = ReturnType<
  typeof useReservationScanQrLazyQuery
>;
export type ReservationScanQrQueryResult = Apollo.QueryResult<
  ReservationScanQrQuery,
  ReservationScanQrQueryVariables
>;
export const BorrowTransactionDocument = gql`
  query BorrowTransaction(
    $page: Int!
    $perPage: Int!
    $filterByNameOrByTitle: String!
    $status: String!
  ) {
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
      idNumber
      firstName
      middleName
      lastName
      bookId
      accountNumber
      section
      title
      section
      status
      fine
      remainingDays
      paymentStatus
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
export function useBorrowTransactionQuery(
  baseOptions: Apollo.QueryHookOptions<
    BorrowTransactionQuery,
    BorrowTransactionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    BorrowTransactionQuery,
    BorrowTransactionQueryVariables
  >(BorrowTransactionDocument, options);
}
export function useBorrowTransactionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BorrowTransactionQuery,
    BorrowTransactionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    BorrowTransactionQuery,
    BorrowTransactionQueryVariables
  >(BorrowTransactionDocument, options);
}
export type BorrowTransactionQueryHookResult = ReturnType<
  typeof useBorrowTransactionQuery
>;
export type BorrowTransactionLazyQueryHookResult = ReturnType<
  typeof useBorrowTransactionLazyQuery
>;
export type BorrowTransactionQueryResult = Apollo.QueryResult<
  BorrowTransactionQuery,
  BorrowTransactionQueryVariables
>;
export const GetAllBooksDocument = gql`
  query GetAllBooks($page: Int!, $perPage: Int!, $filterByTitle: String!) {
    getAllBooks(page: $page, perPage: $perPage, filterByTitle: $filterByTitle) {
      errors {
        field
        message
      }
      books {
        id
        groupUniqueIdentityId
        bookId
        title
        status {
          status
        }
        section {
          section
        }
        dewyDecimal
        bookType {
          type
        }
      }
      count
    }
  }
`;

/**
 * __useGetAllBooksQuery__
 *
 * To run a query within a React component, call `useGetAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBooksQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      filterByTitle: // value for 'filterByTitle'
 *   },
 * });
 */
export function useGetAllBooksQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllBooksQuery,
    GetAllBooksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(
    GetAllBooksDocument,
    options
  );
}
export function useGetAllBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllBooksQuery,
    GetAllBooksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(
    GetAllBooksDocument,
    options
  );
}
export type GetAllBooksQueryHookResult = ReturnType<typeof useGetAllBooksQuery>;
export type GetAllBooksLazyQueryHookResult = ReturnType<
  typeof useGetAllBooksLazyQuery
>;
export type GetAllBooksQueryResult = Apollo.QueryResult<
  GetAllBooksQuery,
  GetAllBooksQueryVariables
>;
export const GetAllBooksGroupByTitleDocument = gql`
  query GetAllBooksGroupByTitle(
    $page: Int!
    $perPage: Int!
    $filterByTitle: String!
    $status: String!
  ) {
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
export function useGetAllBooksGroupByTitleQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllBooksGroupByTitleQuery,
    GetAllBooksGroupByTitleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAllBooksGroupByTitleQuery,
    GetAllBooksGroupByTitleQueryVariables
  >(GetAllBooksGroupByTitleDocument, options);
}
export function useGetAllBooksGroupByTitleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllBooksGroupByTitleQuery,
    GetAllBooksGroupByTitleQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllBooksGroupByTitleQuery,
    GetAllBooksGroupByTitleQueryVariables
  >(GetAllBooksGroupByTitleDocument, options);
}
export type GetAllBooksGroupByTitleQueryHookResult = ReturnType<
  typeof useGetAllBooksGroupByTitleQuery
>;
export type GetAllBooksGroupByTitleLazyQueryHookResult = ReturnType<
  typeof useGetAllBooksGroupByTitleLazyQuery
>;
export type GetAllBooksGroupByTitleQueryResult = Apollo.QueryResult<
  GetAllBooksGroupByTitleQuery,
  GetAllBooksGroupByTitleQueryVariables
>;
export const GetAllUserAccountsDocument = gql`
  query GetAllUserAccounts(
    $page: Int!
    $perPage: Int!
    $filterByFnameMnameLname: String!
  ) {
    getAllUserAccounts(
      page: $page
      perPage: $perPage
      filterByFnameMnameLname: $filterByFnameMnameLname
    ) {
      errors {
        field
        message
      }
      userAccounts {
        id
        mobileNumber
        userAccountRole {
          role
        }
        user {
          id
          idNumber
          firstName
          middleName
          lastName
        }
        isActive
      }
      count
      isSucess
    }
  }
`;

/**
 * __useGetAllUserAccountsQuery__
 *
 * To run a query within a React component, call `useGetAllUserAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserAccountsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      filterByFnameMnameLname: // value for 'filterByFnameMnameLname'
 *   },
 * });
 */
export function useGetAllUserAccountsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllUserAccountsQuery,
    GetAllUserAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAllUserAccountsQuery,
    GetAllUserAccountsQueryVariables
  >(GetAllUserAccountsDocument, options);
}
export function useGetAllUserAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllUserAccountsQuery,
    GetAllUserAccountsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllUserAccountsQuery,
    GetAllUserAccountsQueryVariables
  >(GetAllUserAccountsDocument, options);
}
export type GetAllUserAccountsQueryHookResult = ReturnType<
  typeof useGetAllUserAccountsQuery
>;
export type GetAllUserAccountsLazyQueryHookResult = ReturnType<
  typeof useGetAllUserAccountsLazyQuery
>;
export type GetAllUserAccountsQueryResult = Apollo.QueryResult<
  GetAllUserAccountsQuery,
  GetAllUserAccountsQueryVariables
>;
export const ReservationsDocument = gql`
  query Reservations(
    $page: Int!
    $perPage: Int!
    $filterByName: String!
    $status: String!
  ) {
    reservations(
      page: $page
      perPage: $perPage
      filterByName: $filterByName
      status: $status
    ) {
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
`;

/**
 * __useReservationsQuery__
 *
 * To run a query within a React component, call `useReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      filterByName: // value for 'filterByName'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useReservationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ReservationsQuery,
    ReservationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ReservationsQuery, ReservationsQueryVariables>(
    ReservationsDocument,
    options
  );
}
export function useReservationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ReservationsQuery,
    ReservationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ReservationsQuery, ReservationsQueryVariables>(
    ReservationsDocument,
    options
  );
}
export type ReservationsQueryHookResult = ReturnType<
  typeof useReservationsQuery
>;
export type ReservationsLazyQueryHookResult = ReturnType<
  typeof useReservationsLazyQuery
>;
export type ReservationsQueryResult = Apollo.QueryResult<
  ReservationsQuery,
  ReservationsQueryVariables
>;
export const SettingsDocument = gql`
  query Settings {
    settings {
      id
      fine
    }
  }
`;

/**
 * __useSettingsQuery__
 *
 * To run a query within a React component, call `useSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<SettingsQuery, SettingsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SettingsQuery, SettingsQueryVariables>(
    SettingsDocument,
    options
  );
}
export function useSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SettingsQuery,
    SettingsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SettingsQuery, SettingsQueryVariables>(
    SettingsDocument,
    options
  );
}
export type SettingsQueryHookResult = ReturnType<typeof useSettingsQuery>;
export type SettingsLazyQueryHookResult = ReturnType<
  typeof useSettingsLazyQuery
>;
export type SettingsQueryResult = Apollo.QueryResult<
  SettingsQuery,
  SettingsQueryVariables
>;
