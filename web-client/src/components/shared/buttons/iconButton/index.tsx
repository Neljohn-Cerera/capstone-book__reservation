import classNames from 'classnames';
import classnames from 'classnames';
import { MouseEventHandler, SVGProps } from 'react';
import { PropsComponents } from '../../types';

interface Props extends PropsComponents {
  ref?: any;
  iconPath: SVGProps<SVGPathElement>;
  onClick?: () => void;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const IconButton: React.FC<Props> = ({
  ref,
  iconPath,
  size = 'base',
  textColor = 'base',
  backGroundColor = 'blue',
  mr = 'none',
  ml = 'none',
  mt = 'none',
  mb = 'none',
  mx = 'none',
  my = 'none',
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      ref={ref}
      className={classnames(
        // base class
        'bg-transparent inline-flex items-center justify-center',
        'border border-transparent rounded-full',
        'focus:outline-none focus:ring-1 focus:ring-offset-1',
        // width
        {
          'h-8': size === 'xs',
          'h-10': size === 'sm',
          'h-11': size === 'base',
          'h-14': size === 'lg',
          'h-16': size === 'xl',
        },
        // height
        {
          'w-8': size === 'xs',
          'w-10': size === 'sm',
          'w-11': size === 'base',
          'w-14': size === 'lg',
          'w-16': size === 'xl',
        },
        // hover background color
        {
          'hover:bg-blue-700': backGroundColor === 'blue' && disabled == false,
          'hover:bg-transparent':
            backGroundColor === 'blue' && disabled === true,
          'hover:bg-red-700': backGroundColor === 'red',
          'hover:bg-green-700': backGroundColor === 'green',
          'hover:bg-yellow-700': backGroundColor === 'yellow',
          'hover:bg-gray-700': backGroundColor === 'gray',
        },
        // focus ring background color
        {
          'focus:ring-blue-500': backGroundColor === 'blue',
          'focus:ring-red-500': backGroundColor === 'red',
          'focus:ring-green-500': backGroundColor === 'green',
          'focus:ring-yellow-500': backGroundColor === 'yellow',
          'focus:ring-gray-500': backGroundColor === 'gray',
        },
        // margins
        {
          'mr-0': mr === 'none',
          'mr-2': mr === 'base',
          'mr-3': mr === 'sm',
          'mr-4': mr === 'lg',
          'mr-5': mr === 'xl',
          'ml-0': ml === 'none',
          'ml-2': ml === 'base',
          'ml-3': ml === 'sm',
          'ml-4': ml === 'lg',
          'ml-5': ml === 'xl',
          'mt-0': mt === 'none',
          'mt-2': mt === 'base',
          'mt-3': mt === 'sm',
          'mt-4': mt === 'lg',
          'mt-5': mt === 'xl',
          'mb-0': mb === 'none',
          'mb-2': mb === 'base',
          'mb-3': mb === 'sm',
          'mb-4': mb === 'lg',
          'mb-5': mb === 'xl',
          'mx-0': mx === 'none',
          'mx-2': mx === 'base',
          'mx-3': mx === 'sm',
          'mx-4': mx === 'lg',
          'mx-5': mx === 'xl',
          'my-0': my === 'none',
          'my-2': my === 'base',
          'my-3': my === 'sm',
          'my-4': my === 'lg',
          'my-5': my === 'xl',
        },
        {
          'cursor-not-allowed': disabled === true,
        }
      )}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(
          // svg height
          {
            'h-8': size === 'xs',
            'h-10': size === 'sm',
            'h-11': size === 'base',
            'h-14': size === 'lg',
            'h-16': size === 'xl',
          },
          // svg width
          {
            'w-8': size === 'xs',
            'h-10': size === 'sm',
            'w-11': size === 'base',
            'w-14': size === 'lg',
            'w-16': size === 'xl',
          },
          // text color
          {
            'text-white': textColor === 'base',
            'text-blue-500': textColor === 'blue',
            'text-green-500': textColor === 'green',
            'text-red-500': textColor === 'red',
            'text-yellow-500': textColor === 'yellow',
            'text-gray-500': textColor === 'gray',
          },
          {
            'hover:text-white': disabled === false,
            'text-gray-500': textColor === 'gray' && disabled === true,
          }
        )}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {/* icon path from hero icons */}
        {iconPath}
      </svg>
    </button>
  );
};

export default IconButton;
