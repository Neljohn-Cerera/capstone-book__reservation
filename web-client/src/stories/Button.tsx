import classnames from 'classnames';
import { SVGProps } from 'react';

export interface Props {
  fullWidth?: boolean;
  icon: 'left' | 'right';
  iconPath: SVGProps<SVGPathElement>;
  size?: 'base' | 'lg' | 'xl';
  bgColor: 'blue' | 'yellow' | 'red' | 'gray';
  textColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  text: string;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  mx?: number;
  my?: number;
}

const Button: React.FC<Props> = ({
  fullWidth = false,
  icon = 'left',
  iconPath,
  size = 'base',
  bgColor = 'blue',
  textColor = 'white',
  onClick,
  disabled,
  text,
  mr = 0,
  ml = 0,
  mt = 0,
  mb = 0,
  mx = 0,
  my = 0,
}) => {
  return (
    <button
      className={classnames(
        {
          'text-base': size === 'base',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
        },
        {
          'h-11': size === 'base',
          'h-14': size === 'lg',
          'h-16': size === 'xl',
        },
        {
          'disabled:opacity-50 cursor-not-allowed': disabled === true,
        },
        disabled
          ? 'bg-gray-400 text-gray-300'
          : `bg-${bgColor}-500 text-${textColor}`,
        disabled ? '' : `hover:bg-${bgColor}-700`,
        fullWidth ? 'w-full' : 'w-36',
        'inline-flex items-center justify-center px-4 py-1.5',
        'border border-transparent rounded shadow-sm',
        `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${bgColor}-500`,
        `mr-${mr?.toString()} ml-${ml?.toString()} mb-${mb?.toString()} mt-${mt?.toString()}`,
        `my-${my?.toString()} mx-${mx?.toString()}`
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon === 'left' && (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classnames(
              {
                'h-6': size === 'base',
                'h-7': size === 'lg',
                'h-8': size === 'xl',
              },
              {
                'w-6': size === 'base',
                'w-7': size === 'lg',
                'w-8': size === 'xl',
              },
              'text-white mr-2'
            )}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {iconPath}
          </svg>
          {text}
        </>
      )}
      {icon === 'right' && (
        <>
          {text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classnames(
              {
                'h-6': size === 'base',
                'h-7': size === 'lg',
                'h-8': size === 'xl',
              },
              {
                'w-6': size === 'base',
                'w-7': size === 'lg',
                'w-8': size === 'xl',
              },
              'text-white ml-2'
            )}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {iconPath}
          </svg>
        </>
      )}
    </button>
  );
};

export default Button;
