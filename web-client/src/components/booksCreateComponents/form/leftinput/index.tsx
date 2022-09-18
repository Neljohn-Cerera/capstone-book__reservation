import React, { useRef, useEffect } from 'react';
import { generate } from 'shortid';
import { iconCancel, iconSubmit } from '../../../../assets/icons';
import Button from '../../../shared/buttons/base';
import DropDown from '../../../shared/dropDown';
import Input from '../../../shared/input';
import InputTag from '../../../shared/input/inputTag';

interface Props {
  query: any;
  bookType: any;
  setBookType: any;
  bookCategoriesLocal: string[];
  setCategories: any;
  uniqueCategories: any[];
  handleRemoveCategory: (val: string) => void;
  formik?: any;
}

const LeftInput: React.FC<Props> = ({
  query,
  bookType,
  setBookType,
  bookCategoriesLocal,
  setCategories,
  uniqueCategories,
  handleRemoveCategory,
  formik,
}) => {
  const inputRef: any = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <DropDown
        label="Booktype"
        data={['RESERVED', 'NOT RESERVED']}
        state={bookType}
        setState={setBookType}
      />
      <InputTag
        label="Categories"
        bookCategoriesLocal={bookCategoriesLocal}
        setState={setCategories}
      >
        {uniqueCategories?.map((category) => (
          <div
            key={generate()}
            className="relative bg-gray-200 p-2 mr-2 mt-2  flex flex-row border border-gray-400 rounded"
          >
            <p className="flex-1 mr-6 text-base">{category}</p>
            <button
              className="flex-1 px-2 text-sm absolute top-0 right-0 hover:bg-gray-600 hover:text-white"
              onClick={() => handleRemoveCategory(category)}
            >
              x
            </button>
          </div>
        ))}
      </InputTag>
      <Input
        inputRef={inputRef}
        hasIcon={false}
        placeholder="type bookid ..."
        type="text"
        id="bookId"
        name="bookId"
        size="base"
        label="Bookid"
        labelColor="gray"
        mb="lg"
        mt="lg"
      />
      <Input
        hasIcon={false}
        placeholder="type title ..."
        type="text"
        id="title"
        name="title"
        size="base"
        label="Title"
        labelColor="gray"
        mb="lg"
        disabled={Object.entries(query).length === 0 ? false : true}
      />
      <Input
        hasIcon={false}
        placeholder="type accountNumber ..."
        type="text"
        id="accountNumber"
        name="accountNumber"
        size="base"
        label="Account Number"
        labelColor="gray"
        mb="lg"
      />
      <Input
        hasIcon={false}
        placeholder="type isbnNumber ..."
        type="text"
        id="isbnNumber"
        name="isbnNumber"
        size="base"
        label="IsbnNumber"
        labelColor="gray"
        disabled={Object.entries(query).length === 0 ? false : true}
      />
      <div className="flex mt-4">
        <Button
          icon="right"
          iconPath={iconSubmit}
          type="submit"
          text="Submit"
          size="base"
          backGroundColor="blue"
          mr="lg"
          isLoading={formik.isSubmitting}
        />
        <Button
          icon="right"
          iconPath={iconCancel}
          type="reset"
          text="Reset"
          size="base"
          backGroundColor="red"
        />
      </div>
    </>
  );
};

export default LeftInput;
