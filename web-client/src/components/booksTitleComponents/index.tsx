import { GetAllBooksQuery } from '../../generated/graphql';
import Pagination from '../shared/pagination';
import Table from '../shared/table';
import Thead from '../shared/table/thead';
import { columns } from './table/column';
import TbodyBooksTitle from './table/tbody';
import { useRouter } from 'next/router';

interface Props {
  data?: GetAllBooksQuery | undefined;
  loading?: boolean;
  page: number;
  totalNumberOfPages: number | null | undefined;
  total: number | null | undefined;
  handlePrevious: () => void;
  handleNext: () => void;
}

const BooksTitlesComponents: React.FC<Props> = ({
  data,
  loading,
  page,
  total,
  totalNumberOfPages,
  handleNext,
  handlePrevious,
}) => {
  const router = useRouter();
  return (
    <div>
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
          <TbodyBooksTitle data={data} />
        )}
      </Table>
      <pre>{JSON.stringify(router.query.data, null, 2)}</pre>
    </div>
  );
};

export default BooksTitlesComponents;
