import { useEffect, useState } from 'react';
import {
  ReservationsQuery,
  useUpdateReservationsMutation,
} from '../../generated/graphql';
import Alerts from '../shared/alerts';
import Pagination from '../shared/pagination';
import Table from '../shared/table';
import Thead from '../shared/table/thead';
import FormSearchReservations from './form';
import RadioGroup from './radioGroup';
import { columns } from './table/column';
import TbodyReservations from './table/tbody';
//
interface Props {
  data?: ReservationsQuery | undefined;
  loading?: boolean;
  totalNumberOfPages: number | null | undefined;
  total: number | null | undefined;
  handlePrevious: () => void;
  handleNext: () => void;
  page: number;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  status?: string;
}

const ReservationsComponents: React.FC<Props> = ({
  data,
  loading,
  page,
  total,
  totalNumberOfPages,
  handlePrevious,
  handleNext,
  setName,
  setStatus,
  status,
}) => {
  // States
  const [updateReservations] = useUpdateReservationsMutation();
  const [isApprove, setIsApprove] = useState<boolean>(false);
  const [isDisapprove, setIsDisApprove] = useState<boolean>(false);
  // Setting up isSuccess to false
  useEffect(() => {
    setTimeout(() => {
      setIsApprove(false);
    }, 8000);
  }, [isApprove]);
  useEffect(() => {
    setTimeout(() => {
      setIsDisApprove(false);
    }, 8000);
  }, [isDisapprove]);

  // Functions
  const handleApprove = async (reservation: any) => {
    const approve = window.confirm('Approve this reservation ?');
    if (approve) {
      const response = await updateReservations({
        variables: {
          id: parseInt(reservation.id),
          details: 'Proceed to library for borrowing this book.',
          status: 'APPROVED',
        },
      });
      if (response.data?.updateReservations.isSucess) {
        setIsApprove(true);
      }
    }
  };
  const handleDisapprove = async (reservation: any) => {
    const disapprove = window.confirm('Disapprove this reservation ?');
    if (disapprove) {
      const response = await updateReservations({
        variables: {
          id: parseInt(reservation.id),
          details: 'Reservation upon this book was Disapprove',
          status: 'DISAPPROVED',
        },
      });
      if (response.data?.updateReservations.isSucess) {
        setIsDisApprove(true);
      }
    }
  };
  return (
    <div>
      <FormSearchReservations setName={setName} status={status} />
      <RadioGroup setStatus={setStatus} />
      {isApprove ? (
        <Alerts success top="top-32" text="Reservation approve successfully" />
      ) : null}
      {isDisapprove ? (
        <Alerts
          _error
          top="top-32"
          text="Reservation disapprove successfully"
        />
      ) : null}
      <Pagination
        total={total}
        totalNumberOfPages={totalNumberOfPages}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        page={page}
      />
      <Table>
        <Thead columns={columns} />

        {loading && (
          <tbody className="bg-blue-100 m-h-5 divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Loading ...</td>
            </tr>
          </tbody>
        )}
        {!data?.reservations && (
          <tbody className="bg-blue-100 m-h-5 divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">No Data</td>
            </tr>
          </tbody>
        )}
        {data && (
          <TbodyReservations
            data={data}
            handleApprove={handleApprove}
            handleDisapprove={handleDisapprove}
          />
        )}
      </Table>
    </div>
  );
};

export default ReservationsComponents;
