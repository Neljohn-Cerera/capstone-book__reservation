import { Dispatch, SetStateAction, useState } from 'react';
import { produce } from 'immer';
import { generate } from 'shortid';
import IconButton from '../../buttons/iconButton';
import { iconNew } from '../../../../assets/icons';

interface Props {
  label?: string;
  bookCategoriesLocal?: string[];
  bookAuthorsLocal?: string[];
  setState: Dispatch<SetStateAction<string[]>>;
  children: any;
}

const InputTag: React.FC<Props> = ({
  label,
  bookCategoriesLocal,
  bookAuthorsLocal,
  setState,
  children,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddState = () => {
    setState((cur) =>
      produce(cur, (draft) => {
        draft.push(inputValue);
      })
    );
  };

  return (
    <div className="w-full mb-2">
      <div className="flex flex-col w-full">
        <label className="text-base text-gray-400" htmlFor="tag">
          {label}
        </label>
        <div className="flex">
          <input
            id="tag"
            placeholder="type here ..."
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            list="categories"
            className="w-full rounded px-3 py-3 placeholder-gray-300 text-gray-600"
          />
          <datalist id="categories">
            {bookCategoriesLocal &&
              bookCategoriesLocal?.map((category) => (
                <option key={generate()} value={category}></option>
              ))}
            {bookAuthorsLocal &&
              bookAuthorsLocal?.map((author) => (
                <option key={generate()} value={author}></option>
              ))}
          </datalist>

          <IconButton
            backGroundColor="green"
            textColor="green"
            iconPath={iconNew}
            ml="base"
            onClick={handleAddState}
          />
        </div>
      </div>
      <div className="flex flex-wrap">{children}</div>
    </div>
  );
};

export default InputTag;
