interface Props {
  columns: Array<{ id: number; name: string }>;
}

const Thead: React.FC<Props> = ({ columns }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns?.map((column) => (
          <th
            key={column.id}
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {column.name}
          </th>
        ))}
        <th scope="col" className="relative px-3 py-3">
          <span className="sr-only">Edit</span>
        </th>
        <th scope="col" className="relative px-3 py-3">
          <span className="sr-only">Delete</span>
        </th>
      </tr>
    </thead>
  );
};

export default Thead;
