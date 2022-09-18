import { BorrowTransactionQuery } from '../../generated/graphql';
import Alerts from '../shared/alerts';
import Pagination from '../shared/pagination';
import Table from '../shared/table';
import FormBorrowTransactions from './form';
import RadioGroup from './radioGroup';
import { columns } from './table/column';
import TbodyBorrowTransactions from './table/tbody';
import TheadBorrowTransactions from './table/thead';

interface indexProps {
  data: BorrowTransactionQuery | undefined;
  loading?: boolean;
  totalNumberOfPages: number | null | undefined;
  total: number | null | undefined;
  handlePrevious: () => void;
  handleNext: () => void;
  page: number;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  status?: string;
  networkStatus?: any;
}

const BorrowTransactionsComponents: React.FC<indexProps> = ({
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
  networkStatus,
}) => {
  return (
    <div>
      <FormBorrowTransactions setName={setName} status={status} />
      <RadioGroup setStatus={setStatus} />
      <Pagination
        total={total}
        totalNumberOfPages={totalNumberOfPages}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        page={page}
      />
      {networkStatus === 8 && (
        <Alerts
          _error
          top="0"
          text="Connection Timeout. Please Check your internet connection."
        />
      )}

      <Table>
        <TheadBorrowTransactions columns={columns} status={status} />
        {loading && (
          <tbody className="bg-blue-100 m-h-5 divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Loading ...</td>
            </tr>
          </tbody>
        )}
        {!data?.borrowTransaction && (
          <tbody className="bg-blue-100 m-h-5 divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">No Data</td>
            </tr>
          </tbody>
        )}
        {data && <TbodyBorrowTransactions data={data} status={status} />}
      </Table>
    </div>
  );
};

export default BorrowTransactionsComponents;
