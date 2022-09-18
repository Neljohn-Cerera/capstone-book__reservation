import classNames from 'classnames';
import Image from 'next/image';
import moment from 'moment';
import { generate } from 'shortid';
import { ReservationsQuery } from '../../../../generated/graphql';

interface Props {
  data: ReservationsQuery | undefined;
  handleApprove: (reservation: any) => Promise<void>;
  handleDisapprove: (reservation: any) => Promise<void>;
}

const TbodyReservations: React.FC<Props> = ({
  data,
  handleApprove,
  handleDisapprove,
}) => {
  return (
    <tbody className="bg-white m-h-5 bg-local divide-y divide-gray-200">
      {data?.reservations?.map((reservation) => (
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
                  {`${reservation.user.firstName} ${reservation.user.middleName} ${reservation.user.lastName}`}
                </div>
                <div className="text-sm text-gray-500">
                  {reservation.user.idNumber}
                </div>
              </div>
            </div>
          </td>
          <td className="pl-5 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {reservation.book.title}
            </div>
            <div className="text-sm text-gray-500">
              {reservation.book.bookId}
            </div>
          </td>
          <td className="pl-5 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {moment(reservation.reserveDate).format(
                'MM - D - YYYY , hh : mm a'
              )}
            </div>
            <div className="text-sm text-gray-500">{reservation.qrCode}</div>
            <div
              className={classNames('text-sm', {
                'text-green-500':
                  reservation.reservationStatus.status === 'APPROVED',
                'text-yellow-500':
                  reservation.reservationStatus.status === 'PENDING',
                'text-red-500':
                  reservation.reservationStatus.status === 'DISAPPROVED',
              })}
            >
              {reservation.details}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={classNames(
                'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                {
                  'bg-green-100 text-green-800':
                    reservation.reservationStatus.status === 'APPROVED',
                  'bg-yellow-100 text-yellow-800':
                    reservation.reservationStatus.status === 'PENDING',
                  'bg-red-100 text-red-800':
                    reservation.reservationStatus.status === 'DISAPPROVED',
                }
              )}
            >
              {reservation.reservationStatus.status}
            </span>
          </td>
          {/* APPROVE && DISAPPROVED */}
          <td className="mt-2 py-4 whitespace-nowrap text-left text-sm font-medium">
            {/* approve */}
            <a
              onClick={() => handleApprove(reservation)}
              className="mr-4 ml-2 text-indigo-600 hover:text-indigo-900 cursor-pointer"
            >
              {reservation.reservationStatus.status === 'PENDING' && 'Approve'}
            </a>
          </td>
          <td className="mt-2 py-4 whitespace-nowrap text-left text-sm font-medium">
            {/* disapprove */}
            <a
              onClick={() => handleDisapprove(reservation)}
              className="mr-4 ml-2 text-red-600 hover:text-red-900 cursor-pointer"
            >
              {reservation.reservationStatus.status === 'PENDING' &&
                'Disapprove'}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TbodyReservations;
