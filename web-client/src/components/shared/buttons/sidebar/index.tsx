import { SVGProps } from 'react';
import { buttonDefault, buttonLG, buttonMD, buttonSM } from './styles';

interface Props {
  title: string;
  icon?: SVGProps<SVGSVGElement>;
  handleClick: () => void;
  className?: string | null;
  disable?: boolean;
}

const BrSidebarButton: React.FC<Props> = ({
  icon,
  title,
  handleClick,
  className,
  disable,
}) => {
  return (
    <button
      className={`${buttonDefault} ${buttonSM} ${buttonMD} ${buttonLG} ${className}`}
      onClick={() => handleClick()}
      disabled={disable}
    >
      {icon}
      {title}
    </button>
  );
};

export default BrSidebarButton;
