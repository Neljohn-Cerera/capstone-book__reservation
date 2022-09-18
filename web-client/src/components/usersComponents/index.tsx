import React from 'react';
import Table from '../shared/table';
import Pagination from '../shared/pagination';
import TbodyUsers from './table/tbody';
import { columns } from './table/data';
import Thead from '../shared/table/thead';
import FormUser from './form';
import { GetAllUserAccountsQuery } from '../../generated/graphql';

interface Props {
  data?: GetAllUserAccountsQuery | undefined;
  loading?: boolean;
  totalNumberOfPages: number | null | undefined;
  total: number | null | undefined;
  handlePrevious: () => void;
  handleNext: () => void;
  page: number;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const UsersComponents: React.FC<Props> = ({
  data,
  loading,
  page,
  total,
  totalNumberOfPages,
  handlePrevious,
  handleNext,
  setName,
}) => {
  return (
    <div>
      <FormUser setName={setName} />
      <Pagination
        total={total}
        totalNumberOfPages={totalNumberOfPages}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        page={page}
      />
      {/* Table */}
      <Table>
        <>
          <Thead columns={columns} />
          {loading ? (
            <tbody className="bg-blue-100 m-h-5 divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Loading ...</td>
              </tr>
            </tbody>
          ) : (
            <TbodyUsers data={data} />
          )}
        </>
      </Table>
    </div>
  );
};

export default UsersComponents;
