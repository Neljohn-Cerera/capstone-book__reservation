import Link from 'next/link';
import BreadCrumbs from '../../shared/breadCrumbs';
interface Props {}

const CreateUsersBreadCrumbs: React.FC<Props> = () => {
  return (
    <BreadCrumbs>
      <li>
        <Link href="/" passHref>
          <a className="text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:text-blue-900"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
        </Link>
      </li>
      <li>
        <span className="mx-2">/</span>
      </li>
      <li className="text-base text-blue-500 hover:text-blue-900">
        <Link href="/users">
          <a>Users</a>
        </Link>
      </li>
      <li>
        <span className="mx-2 self-cente">/</span>
      </li>
      <li className="self-center text-base text-blue-400">create-user</li>
    </BreadCrumbs>
  );
};

export default CreateUsersBreadCrumbs;
