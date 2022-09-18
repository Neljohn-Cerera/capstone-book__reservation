import { iconNext, iconPrevious } from '../../../assets/icons';
import IconButton from '../buttons/iconButton';

interface Props {
  total: number | null | undefined;
  totalNumberOfPages: number | null | undefined;
  handlePrevious: () => void;
  handleNext: () => void;
  page: number;
}

const Pagination: React.FC<Props> = ({
  total,
  totalNumberOfPages,
  handlePrevious,
  handleNext,
  page,
}) => {
  return (
    <div className="flex items-center p-2 w-full h-12 bg-blue-100">
      <div className="flex-1 text-gray-500">
        Page {page} of {Math.round(totalNumberOfPages!!)}, Total - {total}
      </div>
      <div className="flex-1 flex items-center justify-end">
        <IconButton
          size="xs"
          textColor="gray"
          backGroundColor="blue"
          iconPath={iconPrevious}
          onClick={handlePrevious}
          disabled={page === 1}
        />
        <p className="text-base text-gray-500">Previous</p>
        <p className="ml-5 text-base text-gray-500">Next</p>
        <IconButton
          size="xs"
          textColor="gray"
          backGroundColor="blue"
          iconPath={iconNext}
          onClick={handleNext}
          disabled={page === Math.round(totalNumberOfPages!!)}
        />
      </div>
    </div>
  );
};

export default Pagination;
