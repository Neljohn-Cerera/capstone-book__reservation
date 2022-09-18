interface Props {
  children: any;
}

const Table: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col text-left">
      <div className="-my-2 w-full border-1 border-gray-800">
        <div className="py-2 align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
