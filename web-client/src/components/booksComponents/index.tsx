import React from 'react';
import Table from '../shared/table';
import Pagination from '../shared/pagination';
import { columns } from './table/data';
import Thead from '../shared/table/thead';
import FormBook from './form';
import TbodyBooks from './table/tbody';
import { GetAllBooksGroupByTitleQuery } from '../../generated/graphql';
import RadioGroup from './radioGroup';
// s
interface Props {
  data?: GetAllBooksGroupByTitleQuery | undefined;
  loading?: boolean;
  totalNumberOfPages: number | null | undefined;
  total: number | null | undefined;
  handlePrevious: () => void;
  handleNext: () => void;
  page: number;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  status?: string;
}
const BooksComponents: React.FC<Props> = ({
  data,
  loading,
  page,
  total,
  totalNumberOfPages,
  handlePrevious,
  handleNext,
  setTitle,
  setStatus,
  status,
}) => {
  return (
    <div>
      <FormBook setTitle={setTitle} status={status} />
      <RadioGroup setStatus={setStatus} />
      <Pagination
        total={total}
        totalNumberOfPages={totalNumberOfPages}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        page={page}
      />
      {/* Table */}
      <Table>
        <Thead columns={columns} />
        {loading ? (
          <tbody className="bg-blue-100 m-h-5 divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Loading ...</td>
            </tr>
          </tbody>
        ) : (
          <TbodyBooks data={data} />
        )}
      </Table>
    </div>
  );
};

export default BooksComponents;
