import { useState } from 'react';
import { Form, Formik } from 'formik';
import { BookCreateSchema } from './validation';
import { useCreateBookMutation } from '../../../generated/graphql';
import { toErrorMap } from '../../../helpers/toErrorMap';
import { useAppSelector } from '../../../redux/store';
import { useRouter } from 'next/router';
import LeftInput from './leftinput';
import RightInput from './rightInput';
import Alerts from '../../shared/alerts';

// TYPES AND INTERFACES
interface Props {}
type BookTypeProps = 'RESERVED' | 'NOT RESERVED';
type BookSectionProps = 'Circulation' | 'Filipiniana';
// INITIAL VALUES
const initialValues = {
  bookId: '',
  title: '',
  accountNumber: '',
  isbnNumber: '',
  dewyDecimal: 0,
  publisher: '',
  placeOfPublication: '',
  copyRightYear: 0,
};

// REACT FUNCTION
const FormCreateBook: React.FC<Props> = () => {
  const { query } = useRouter();
  // STATES
  const bookAuthors = useAppSelector((state) => state.booksAuthors);
  const booksCategories = useAppSelector((state) => state.booksCategories);

  const [bookType, setBookType] = useState<BookTypeProps>(
    query ? (query.type as any) : 'NOT RESERVED'
  );
  const [section, setSection] = useState<BookSectionProps>(
    query ? (query.section as any) : 'Filipiniana'
  );

  // QUERY VALUES
  const queryValues = {
    bookId: '',
    title: query.title,
    accountNumber: '',
    isbnNumber: query.isbnNumber,
    dewyDecimal: query.dewyDecimal,
    publisher: query.publisher,
    placeOfPublication: query.placeOfPublication,
    copyRightYear: query.copyRightYear,
  };
  // STATES -> book categories local setup
  // STATES -> getting categories from local storage
  // STATES -> filtering bookCategoriesLocal with unique values
  const bookCategoriesLocal = useAppSelector(
    (state) => state.category.category
  );
  const uniqueBookCategoriesLocal = Array.from(new Set(bookCategoriesLocal));
  // STATES -> book authors local setup
  // STATES -> getting authors from local storage
  // STATES -> filtering bookAuthorsLocal with unique values
  const bookAuthorsLocal = useAppSelector((state) => state.author.author);
  const uniqueBookAuthorLocal = Array.from(new Set(bookAuthorsLocal));
  // STATES -> book categories online setup
  // STATES -> setting up categories array
  // STATES -> filtering categories with unique values
  // STATES -> uniqueCategories values will be pass on URQL createBook variables:{ categories: uniqueCategories }
  const [categories, setCategories] = useState<string[]>([]);
  const uniqueCategories = Array.from(
    new Set(
      booksCategories.booksCategories?.length === 0
        ? categories
        : booksCategories.booksCategories
    )
  );
  // STATES -> book authors online setup
  // STATES -> setting up authors array
  // STATES -> filtering authors with unique values
  // STATES -> uniqueAuthors values will be pass on URQL createBook variables:{ authors: uniqueAuthors }
  const [authors, setAuthors] = useState<string[]>([]);
  const uniqueAuthors = Array.from(
    new Set(
      bookAuthors.booksAuthors?.length === 0
        ? authors
        : bookAuthors.booksAuthors
    )
  );
  // STATES -> for success alert component
  const [success, setSuccess] = useState(false);
  // STATES -> URQL GENERARTED HOOKS
  const [createBook] = useCreateBookMutation();

  // FUNCTIONS
  // FUNCTIONS -> removing array from categories
  const handleRemoveCategory = (val: string) => {
    setCategories((currentCategories) =>
      currentCategories.filter((x) => x !== val)
    );
  };
  // FUNCTIONS -> removing array from authors
  const handleRemoveAuthor = (val: string) => {
    setAuthors((currentAuthors) => currentAuthors.filter((x) => x !== val));
  };
  // RETURN COMPONENT
  return (
    <Formik
      // VALUES
      initialValues={query ? queryValues : initialValues}
      // VALIDATION
      validationSchema={BookCreateSchema}
      // ONSUBMIT
      onSubmit={async (values, { setStatus, setSubmitting, resetForm }) => {
        // createBook reponse
        const response = await createBook({
          variables: {
            categories: uniqueCategories,
            authors: uniqueAuthors,
            section: section,
            status: 'AVAILABLE',
            bookType: bookType,
            input: {
              bookId: values.bookId,
              title: values.title,
              accountNumber: values.accountNumber,
              isbnNumber: values.isbnNumber,
              dewyDecimal: parseInt(values.dewyDecimal as any),
              publisher: values.publisher,
              placeOfPublication: values.placeOfPublication,
              copyRightYear: parseInt(values.copyRightYear as any),
            },
          } as any,
        });
        // IF response errors set formik.status to errors and shows error Alert component
        if (response.data?.createBook.errors) {
          setStatus(toErrorMap(response.data?.createBook.errors));
        } else {
          setSuccess(true);
          setSubmitting(false);
          // reseting form excluding bookid and accountnumber because this values are unique
          resetForm({
            values: {
              bookId: '',
              title: values.title,
              accountNumber: '',
              isbnNumber: values.isbnNumber,
              dewyDecimal: values.dewyDecimal,
              publisher: values.publisher,
              placeOfPublication: values.placeOfPublication,
              copyRightYear: values.copyRightYear,
            },
          } as any);
          setTimeout(() => {
            setSuccess(false);
            setStatus(undefined);
          }, 5000);
        }
      }}
    >
      {(formik) => (
        <Form>
          {/* FORMIK STATUS */}
          {formik.status ? (
            <Alerts _error top="top-32" text={JSON.stringify(formik.status)} />
          ) : null}
          {success ? (
            <Alerts success top="top-32" text="Book Created Successfully" />
          ) : null}
          <div className="flex w-full bg-gray-100 p-8">
            {/* LEFT INPUTS */}
            <div className="flex-1 flex flex-col pr-4">
              <LeftInput
                query={query}
                bookType={bookType}
                setBookType={setBookType}
                bookCategoriesLocal={uniqueBookCategoriesLocal}
                setCategories={setCategories}
                uniqueCategories={uniqueCategories}
                handleRemoveCategory={handleRemoveCategory}
                formik={formik}
              />
            </div>
            {/* RIGHT INPUTS */}
            <div className="flex-1 flex flex-col pl-4">
              <RightInput
                query={query}
                section={section}
                setSection={setSection}
                bookAuthorsLocal={uniqueBookAuthorLocal}
                setAuthors={setAuthors}
                uniqueAuthors={uniqueAuthors}
                handleRemoveAuthor={handleRemoveAuthor}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormCreateBook;
