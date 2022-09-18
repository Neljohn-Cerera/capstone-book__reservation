import LeftContainer from './leftContainer';
import RightContainer from './rightContainer';
import { containerDEF, containerLG, containerMD, containerSM } from './styles';

interface Props {
  children: JSX.Element;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={`${containerDEF} ${containerSM} ${containerMD} ${containerLG}`}
    >
      <LeftContainer />

      <RightContainer>{children}</RightContainer>
    </div>
  );
};

export default MainLayout;
