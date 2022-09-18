import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import {
  GetAllBooksQuery,
  useDeleteBookMutation,
} from '../../../../generated/graphql';

interface Props {
  data: GetAllBooksQuery | undefined;
}

const TbodyBooksTitle: React.FC<Props> = ({ data }) => {
  // STATES =>
  const [deleteBook] = useDeleteBookMutation();
  // FUNCTIONS =>
  const handleDelete = async (value: any) => {
    const confirmDelete = window.confirm('Do you want to Delete this book ?');
    if (confirmDelete) {
      await deleteBook({
        variables: { id: parseInt(value) },
        update: (cache, { data }) => {
          if (data?.deleteBook) {
            cache.evict({ id: `Book:${value}` });
          }
        },
      });
    }
  };
  return (
    <tbody className="bg-white m-h-5 bg-local divide-y divide-gray-200">
      {data?.getAllBooks.books?.map((book) => (
        <tr key={book.id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <Image
                  src="https://images.unsplash.com/photo-1619914775389-748e5e136c26?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwMTk4MjAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100"
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
                <div className="text-sm text-gray-500">{book.bookId}</div>
              </div>
            </div>
          </td>
          <td className="pl-5 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {book.section.section}
            </div>
            <div className="text-sm text-gray-500">
              dewey : {book.dewyDecimal}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {book.bookType.type}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={classNames(
                'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                {
                  'bg-green-100 text-green-800':
                    book.status.status === 'AVAILABLE',
                  'bg-yellow-100 text-yellow-800':
                    book.status.status === 'BORROWED',
                  'bg-red-100 text-red-800': book.status.status === 'LOST',
                }
              )}
            >
              {book.status.status}
            </span>
          </td>
          <td className="py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link href="#" passHref>
              <a className="text-indigo-600 hover:text-indigo-900">Edit</a>
            </Link>
          </td>
          <td className="pr-8 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a
              className="text-red-600 hover:text-red-900 cursor-pointer"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TbodyBooksTitle;
