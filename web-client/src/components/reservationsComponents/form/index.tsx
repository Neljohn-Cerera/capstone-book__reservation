import React, { useRef, useEffect } from 'react';
import Input from '../../shared/input';
import { Form, Formik } from 'formik';
import { iconSearch } from '../../../assets/icons';

interface indexProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
  status?: string;
}

const FormSearchReservations: React.FC<indexProps> = ({ setName, status }) => {
  const inputRef: any = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [status]);
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values) => setName(values.name)}
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
              id="name"
              name="name"
              size="base"
              search
              onKeyPress={() => formik.handleSubmit()}
            />
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default FormSearchReservations;
