import Image from 'next/image';
import moment from 'moment';
import { generate } from 'shortid';
import { BorrowTransactionQuery } from '../../../../generated/graphql';
import classNames from 'classnames';

interface Props {
  data: BorrowTransactionQuery | undefined;
  status: any;
}

const TbodyBorrowTransactions: React.FC<Props> = ({ data, status }) => {
  return (
    <tbody className="bg-white m-h-5 bg-local divide-y divide-gray-200">
      {data?.borrowTransaction?.map((borrow) => (
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
                  {`${borrow.firstName} ${borrow.middleName} ${borrow.lastName}`}
                </div>
                <div className="text-sm text-gray-500">{borrow.idNumber}</div>
              </div>
            </div>
          </td>
          <td className="pl-5 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {borrow.title}
            </div>
            <div className="text-sm text-gray-500">{borrow.section}</div>
            <div className="text-sm text-gray-500">{borrow.accountNumber}</div>
          </td>
          <td className="pl-5 py-4 whitespace-nowrap">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500">
                Borrowed
              </span>
              <span className="text-sm font-medium text-gray-900">
                {moment(borrow.borrowDate).format('MMM Do YY')}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-500"> Return</span>
              <span className="text-sm font-medium text-gray-900">
                {moment(borrow.returnDate).format('MMM Do YY')}
              </span>
            </div>
          </td>
          {status === 'RETURNED' || status === 'OVERDUE' ? null : (
            <td className="py-4 whitespace-nowrap">
              <div
                className={classNames(
                  'ml-11 py-1 w-16 flex items-center justify-center rounded-md',
                  {
                    'text-md font-bold text-yellow-900 bg-yellow-100':
                      borrow.remainingDays >= 0,
                    'text-sm font-medium text-yellow-900':
                      borrow.remainingDays < 0,
                  }
                )}
              >
                {borrow.remainingDays >= 0 ? `${borrow.remainingDays} days` : 0}
              </div>
            </td>
          )}

          {status === 'RETURNED' ? null : (
            <td className="py-4 whitespace-nowrap">
              <div
                className={classNames(
                  'ml-11 py-1 w-16 flex items-center justify-center rounded-md',
                  {
                    'text-md font-bold text-red-900 bg-red-100':
                      borrow.remainingDays < 0,
                    'text-sm font-medium text-red-900':
                      borrow.remainingDays >= 0,
                  }
                )}
              >
                {borrow.remainingDays < 0
                  ? `${Math.abs(borrow.remainingDays)} days`
                  : 0}
              </div>
            </td>
          )}

          <td className="py-4 whitespace-nowrap">
            <div
              className={classNames(
                'py-1 w-16 flex items-center justify-center rounded-md',
                {
                  'text-md font-bold text-white bg-red-500': borrow.fine > 0,
                  'text-sm font-medium text-red-900': borrow.fine < 0,
                }
              )}
            >
              P {borrow.fine}.00
            </div>
          </td>
          {status === 'RETURNED' && (
            <td className="py-4 whitespace-nowrap">
              <div
                className={classNames(
                  'py-1 w-16 flex items-center justify-center rounded-md',
                  'text-md font-bold text-white bg-green-500'
                )}
              >
                {borrow.paymentStatus}
              </div>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TbodyBorrowTransactions;
