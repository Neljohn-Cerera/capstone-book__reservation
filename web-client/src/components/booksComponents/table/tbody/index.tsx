import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { generate } from 'shortid';
import { useRouter } from 'next/router';
import { GetAllBooksGroupByTitleQuery } from '../../../../generated/graphql';
import { useAppDispatch } from '../../../../redux/store';
import {
  addBooksAuthors,
  removeBooksAuthors,
} from '../../../../redux/slice/booksAuthors';
import {
  addBooksCategories,
  removeBooksCategories,
} from '../../../../redux/slice/booksCategories';

interface Props {
  data: GetAllBooksGroupByTitleQuery | undefined;
}
interface bookProps {
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
  categories?:
    | {
        id: string;
        category: string;
      }[]
    | undefined;
  authors?: { id: string; author: string }[] | undefined;
}

const TbodyBooks: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleNewBook = (book: bookProps) => {
    dispatch(removeBooksCategories());
    dispatch(removeBooksAuthors());
    book.authors?.map((_book: { author: string }) => {
      dispatch(addBooksAuthors(_book.author));
    });
    book.categories?.map((_categ: { category: string }) => {
      dispatch(addBooksCategories(_categ.category));
    });

    router.push({
      pathname: 'books/create-book',
      query: {
        title: book.title,
        isbnNumber: book.isbnNumber,
        dewyDecimal: book.dewyDecimal,
        section: book.section,
        publisher: book.publisher,
        placeOfPublication: book.placeOfPublication,
        copyRightYear: book.copyRightYear,
        type: book.type,
        status: book.status,
      },
    });
  };
  return (
    <tbody className="bg-white m-h-5 bg-local divide-y divide-gray-200">
      {data?.getAllBooksGroupByTitle.books?.map((book) => (
        <tr key={generate()}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <Image
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80"
                  alt=""
                  className="rounded-full"
                  height={40}
                  width={40}
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {book.title}
                </div>
                <div className="text-sm text-gray-500">
                  copies : {book.copies}
                </div>
              </div>
            </div>
          </td>
          <td className="pl-5 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {book.section}
            </div>
            <div className="text-sm text-gray-500">
              dewey : {book.dewyDecimal}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {book.type}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={classNames(
                'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                {
                  'bg-green-100 text-green-800': book.status === 'AVAILABLE',
                  'bg-red-100 text-red-800': book.status === 'NOT AVAILABLE',
                  // 'bg-yellow-100 text-yellow-800': book.status === 'BORROWED',
                  // 'bg-red-100 text-red-800': book.status === 'LOST',
                }
              )}
            >
              {book.status}
            </span>
          </td>
          {/* View All */}
          <td className="py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link
              href={{
                pathname: `/books/${book.title}`,
              }}
              passHref
            >
              <a className="text-indigo-500 hover:text-indigo-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center justify-self-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
          </td>
          {/* Edit && New */}
          <td className="mt-2 flex py-4 whitespace-nowrap text-left text-sm font-medium">
            {/* Edit */}
            <Link href="#" passHref>
              <a className="mr-4 ml-2 text-indigo-600 hover:text-indigo-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center justify-self-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
            {/* New */}
            <a
              className="text-green-600 hover:text-green-900"
              onClick={() => handleNewBook(book as any)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 self-center justify-self-center"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TbodyBooks;
