import BrIconButton from '../../../components/shared/buttons/icon';
import { setOpenSideBar } from '../../../redux/slice/sideBarSlice';
import { useAppDispatch } from '../../../redux/store';
import {
  rightBodyDEF,
  rightBodyLG,
  rightBodyMD,
  rightBodySM,
  rightDEF,
  rightHeaderDEF,
  rightHeaderIconsDEF,
  rightHeaderIconsLG,
  rightHeaderIconsMD,
  rightHeaderIconsSM,
  rightHeaderLG,
  rightHeaderMD,
  rightHeaderSM,
  rightHeaderTitleDEF,
  rightHeaderTitleLG,
  rightHeaderTitleMD,
  rightHeaderTitleSM,
  rightLG,
  rightMD,
  rightSM,
} from './styles';

interface Props {
  children: JSX.Element;
}

const RightContainer: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const handleOpenSideBar = () => {
    console.log('open sidebar');
    dispatch(setOpenSideBar());
  };
  return (
    <div className={`${rightDEF} ${rightSM} ${rightMD} ${rightLG}`}>
      <header
        className={`${rightHeaderDEF} ${rightHeaderSM} ${rightHeaderMD} ${rightHeaderLG}`}
      >
        <div
          className={`${rightHeaderTitleDEF} ${rightHeaderTitleSM} ${rightHeaderTitleMD} ${rightHeaderTitleLG}`}
        >
          <BrIconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white font-bold hover:text-blue-900"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            }
            handleClick={handleOpenSideBar}
            className="bg-blue-500 hover:bg-white sm:hidden md:hidden lg:hidden"
          />
          <h4
            className={`${'lg:relative lg:flex lg:flex-col lg:text-lg lg:tracking-widest lg:font-medium'} 
             ${'md:relative md:flex md:flex-col md:text-base md:tracking-widest md:font-medium'} 
             ${'sm:relative sm:flex sm:flex-col sm:text-sm sm:tracking-widest sm:font-medium'} hidden`}
          >
            SPCT LIBRARY BOOK RESERVATION
            <span
              className={`${'lg:text-xs lg:absolute lg:-bottom-3 lg:font-light'} 
            ${'md:text-xs md:absolute md:-bottom-3 md:font-light'} 
            ${'sm:text-xs sm:absolute sm:-bottom-3 sm:font-light'}`}
            >
              version 1.0
            </span>
          </h4>
        </div>
        <div
          className={`${rightHeaderIconsDEF} ${rightHeaderIconsSM} ${rightHeaderIconsMD} ${rightHeaderIconsLG}`}
        >
          <BrIconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            }
            handleClick={() => console.log('test')}
            className={`${'lg:bg-blue-500 lg:hover:bg-blue-900'} 
            ${'md:bg-blue-500 md:hover:bg-blue-900'} 
            ${'sm:bg-blue-500 sm:hover:bg-blue-900'} 
            ${'bg-blue-500 hover:bg-blue-900'}`}
          />
          <BrIconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            }
            handleClick={() => console.log('test')}
            className={`${'lg:bg-blue-500 lg:hover:bg-blue-900'} 
            ${'md:bg-blue-500 md:hover:bg-blue-900'} 
            ${'sm:bg-blue-500 sm:hover:bg-blue-900'} 
            ${'bg-blue-500 hover:bg-blue-900'}`}
          />
        </div>
      </header>
      <main
        className={`${rightBodyDEF} ${rightBodySM} ${rightBodyMD} ${rightBodyLG}`}
      >
        {children}
      </main>
    </div>
  );
};

export default RightContainer;
