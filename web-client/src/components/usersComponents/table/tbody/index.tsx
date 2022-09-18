import classNames from 'classnames';
import Image from 'next/image';
import { GetAllUserAccountsQuery } from '../../../../generated/graphql';

interface Props {
  data: GetAllUserAccountsQuery | undefined;
}

const TbodyUsers: React.FC<Props> = ({ data }) => {
  return (
    <tbody className="bg-white m-h-5 bg-local divide-y divide-gray-200">
      {data?.getAllUserAccounts.userAccounts?.map((user) => (
        <tr key={user.id}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <Image
                  src="https://images.unsplash.com/photo-1619914775389-748e5e136c26?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwMTk4MjAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100"
                  alt=""
                  className="rounded-full"
                  height={40}
                  width={40}
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {`${user.user?.firstName} ${user.user?.middleName} ${user.user?.lastName}`}
                </div>
                <div className="text-sm text-gray-500">
                  {user.user?.idNumber}
                </div>
              </div>
            </div>
          </td>
          <td className="py-4 whitespace-nowrap">
            <div className="text-sm text-gray-500">{user.mobileNumber}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {user.userAccountRole?.role}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={classNames(
                'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                {
                  'bg-green-100 text-green-800': user.isActive === true,
                  'bg-red-100 text-red-800': user.isActive === false,
                }
              )}
            >
              {user.isActive ? 'Active' : 'Inactive'}
            </span>
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

export default TbodyUsers;
