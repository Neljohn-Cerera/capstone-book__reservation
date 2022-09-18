import React, { useRef, useEffect } from 'react';
import Input from '../../shared/input';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';
import { iconNew, iconSearch } from '../../../assets/icons';
import Button from '../../shared/buttons/base';
import { useAppDispatch } from '../../../redux/store';
import { removeBooksCategories } from '../../../redux/slice/booksCategories';
import { removeBooksAuthors } from '../../../redux/slice/booksAuthors';

interface indexProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  status?: string;
}

const FormBook: React.FC<indexProps> = ({ setTitle, status }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const inputRef: any = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [status]);
  // Pust to Create user page
  const handleNewBook = () => {
    dispatch(removeBooksCategories());
    dispatch(removeBooksAuthors());
    router.push({ pathname: 'books/create-book' });
  };

  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values) => setTitle(values.search)}
    >
      {(formik) => (
        <div className="flex w-full items-center mt-2">
          <Form className="w-2/6">
            <Input
              inputRef={inputRef}
              hasIcon
              icon="left"
              iconPath={iconSearch}
              placeholder="Search"
              type="text"
              id="search"
              name="search"
              size="base"
              search
              onKeyPress={() => formik.handleSubmit()}
            />
          </Form>
          <div className="flex-1 flex justify-end pr-6">
            <Button
              text="New"
              size="lg"
              textColor="base"
              backGroundColor="green"
              icon="left"
              iconPath={iconNew}
              onClick={handleNewBook}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default FormBook;
