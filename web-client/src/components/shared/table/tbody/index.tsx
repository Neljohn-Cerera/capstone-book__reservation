import classNames from 'classnames';
import Image from 'next/image';

interface Props {
  data?: Array<{
    id: number;
    image: string;
    fullName: string;
    email: string;
    accountBalance: number;
    isActive: boolean;
    role: string;
  }>;
}

const Tbody: React.FC<Props> = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data?.map((row) => (
        <tr key={row.id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <Image
                  src={row.image}
                  alt=""
                  className="rounded-full"
                  height={40}
                  width={40}
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {row.fullName}
                </div>
                <div className="text-sm text-gray-500">{row.email}</div>
              </div>
            </div>
          </td>
          <td className="pl-16 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{row.accountBalance}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={classNames(
                'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                {
                  'bg-green-100 text-green-800': row.isActive === true,
                  'bg-red-100 text-red-800': row.isActive === false,
                }
              )}
            >
              {row.isActive ? 'Active' : 'Inactive'}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {row.role}
          </td>
          <td className="pl-3 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit
            </a>
          </td>
          <td className="pr-3 py-4 whitespace-nowrap text-right text-sm font-medium">
            <a href="#" className="text-red-600 hover:text-red-900">
              Delete
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
