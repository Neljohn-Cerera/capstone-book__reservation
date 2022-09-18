import { SVGProps } from 'react';

interface Props {
  icon?: SVGProps<SVGSVGElement>;
  handleClick: () => void;
  className?: string | null;
}

const BrIconButton: React.FC<Props> = ({ icon, handleClick, className }) => {
  return (
    <button
      className={`${'w-10 h-10 flex items-center justify-center p-2 rounded-full'} 
      ${'sm:w-9 sm:h-9 sm:flex sm:items-center sm:justify-center sm:rounded-full'} 
      ${'md:w-9 md:h-9 md:flex md:items-center md:justify-center md:rounded-full'} 
      ${'lg:w-10 lg:h-10 lg:flex lg:items-center lg:justify-center lg:rounded-full'} 
      ${className}`}
      onClick={() => handleClick()}
    >
      {icon}
    </button>
  );
};

export default BrIconButton;
