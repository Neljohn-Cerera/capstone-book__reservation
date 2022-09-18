import classNames from 'classnames';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const BreadCrumbs: React.FC<Props> = ({ children }) => {
  return (
    <div className="divide-y divide-blue-200 bg-blue-100 sticky top-16 z-50">
      <nav
        className={classNames(
          'flex text-sm text-left text-blue-600',
          'h-12 items-center py-4 mt-2 rounded-md'
        )}
        role="alert"
      >
        <ol className="list-reset flex text-grey-dark">{children}</ol>
      </nav>
      <div></div>
    </div>
  );
};

export default BreadCrumbs;
