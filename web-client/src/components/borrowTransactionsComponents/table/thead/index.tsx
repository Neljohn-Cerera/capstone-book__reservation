interface Props {
  columns: Array<{ id: number; name: string }>;
  status: any;
}

const TheadBorrowTransactions: React.FC<Props> = ({ columns, status }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns?.map((column) => {
          if (column.name === 'Remaining Days' && status === 'RETURNED') {
            return null;
          }
          if (column.name === 'Remaining Days' && status === 'OVERDUE') {
            return null;
          }
          if (column.name === 'Overdue Days' && status === 'RETURNED') {
            return null;
          }

          return (
            <th
              key={column.id}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.name}
            </th>
          );
        })}
        {status === 'RETURNED' && (
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
        )}
      </tr>
    </thead>
  );
};
export default TheadBorrowTransactions;
