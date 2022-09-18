import { ReservationScanQrQuery } from '../../../generated/graphql';
import Alerts from '../../shared/alerts';

interface resultProps {
  qrReserve: string;
  reserveData: ReservationScanQrQuery;
}

const ReserveResult: React.FC<resultProps> = ({ qrReserve, reserveData }) => {
  const { borrowTransaction, isSucess, message } =
    reserveData.reservationScanQr;

  return (
    <>
      <p className="font-bold text-lg text-blue-600">
        QR Code :{' '}
        <span className="text-lg text-blue-600 font-normal">{qrReserve}</span>
      </p>
      {isSucess ? (
        <Alerts success top="top-0" text={message} />
      ) : (
        <Alerts _error top="top-0" text={message} />
      )}
      <p className="font-bold text-lg text-blue-600">
        Result :{' '}
        <pre className="text-lg text-blue-900 font-semibold">
          {isSucess
            ? JSON.stringify(
                {
                  qrCode: borrowTransaction?.qrCode,
                  borrow_date: borrowTransaction?.borrowDate,
                  return_date: borrowTransaction?.returnDate,
                  user: {
                    idNumber: borrowTransaction?.user.idNumber,
                    Name: `${borrowTransaction?.user.firstName} ${borrowTransaction?.user.middleName} ${borrowTransaction?.user.lastName}`,
                  },
                  book: borrowTransaction?.book.title,
                  borrowTransactionStatus: 'BORROWED',
                  fine: 0,
                },
                null,
                2
              )
            : null}
        </pre>
      </p>
    </>
  );
};

export default ReserveResult;
