import {
  leftDEF,
  leftLG,
  leftLogoDEF,
  leftLogoLG,
  leftLogoMD,
  leftLogoSM,
  leftMD,
  leftSM,
  navDEF,
  navLG,
  navMD,
  navSM,
} from './styles';
import Image from 'next/image';
import BrSidebarButton from '../../../components/shared/buttons/sidebar';
import { UrlObject } from 'url';
import { sideBarData } from './sidebarData';
import { useRouter } from 'next/router';
import BrIconButton from '../../../components/shared/buttons/icon';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { setCloseSideBar } from '../../../redux/slice/sideBarSlice';

interface Props {}

const LeftContainer: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const openSideBar = useAppSelector((state) => state.sidebar.isSideBarOpen);
  const router = useRouter();
  const handleCLick = ({ path }: { path: string | UrlObject }) => {
    dispatch(setCloseSideBar());
    router.push(path);
  };
  const handleCloseSideBar = () => {
    dispatch(setCloseSideBar());
  };
  return (
    <>
      <div
        className={`${leftDEF} ${leftSM} ${leftMD} ${leftLG} ${
          openSideBar
            ? 'w-80 translate-x-0 ease-in opacity-100'
            : '-translate-x-full ease-out opcacity-0'
        }`}
      >
        <div
          className={`${leftLogoDEF} ${leftLogoSM} ${leftLogoMD} ${leftLogoLG}`}
        >
          <Image
            src="/images/spctLogo.jpeg"
            alt="spct logo"
            width={120}
            height={100}
          />
          <BrIconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-blue-900 font-bold hover:text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            }
            handleClick={handleCloseSideBar}
            className="absolute right-2 top-2 hover:bg-blue-500 sm:hidden md:hidden lg:hidden"
          />
        </div>
        <nav className={`${navDEF} ${navSM} ${navMD} ${navLG}`}>
          {
            sideBarData.map((data) => (
              <BrSidebarButton
                disable={false}
                key={data.id}
                title={data.title}
                className={
                  router.pathname === data.href
                    ? 'lg:bg-blue-500 lg:text-white md:bg-blue-500 md:text-white ' +
                      'sm:bg-blue-500 sm:text-white bg-blue-500 text-white'
                    : 'lg:text-blue-900 md:text-blue-900 sm:text-blue-900 text-blue-900'
                }
                icon={data.svg(
                  `lg:h-6 lg:w-6 lg:mr-2 md:h-6 md:w-6 md:mr-2 sm:h-6 sm:w-6 sm:mr-2 h-6 w-6 mr-2 ${
                    router.pathname === data.href
                      ? 'lg:text-white md:text-white sm:text-white text-white'
                      : 'lg:text-blue-900 md:text-blue-900 sm:text-blue-900 text-blue-900'
                  }`
                )}
                handleClick={() => handleCLick({ path: data.href })}
              />
            )) as any
          }
        </nav>
      </div>

      {openSideBar ? (
        <div
          onClick={handleCloseSideBar}
          className="absolute right-0 top-0 w-full h-screen bg-gray-800 bg-opacity-50 sm:hidden md:hidden lg:hidden"
        ></div>
      ) : null}
    </>
  );
};

export default LeftContainer;
