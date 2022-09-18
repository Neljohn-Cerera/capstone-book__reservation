import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import IconButton from '../../shared/buttons/iconButton';
import Input from '../../shared/input';
import { useRouter } from 'next/router';
import { Form, Formik } from 'formik';
import { createPopper } from '@popperjs/core';
import { iconNew, iconSearch } from '../../../assets/icons';
//
interface indexProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const FormUser: React.FC<indexProps> = ({ setName }) => {
  const [tooltipShow, setTooltipShow] = React.useState(false);
  const btnRef: any = React.createRef();
  const tooltipRef: any = React.createRef();
  const inputRef: any = useRef();
  const router = useRouter();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Pust to Create user page
  const handleCreateUser = () => {
    router.push('/users/create-user');
  };
  // Open Tooltip
  const openTooltip = () => {
    createPopper(btnRef.current, tooltipRef.current, {
      placement: 'top-end',
    });
    setTooltipShow(true);
  };
  // Close Tooltip
  const closeTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values) => setName(values.search)}
    >
      {(formik) => (
        <div className="flex w-full items-center mt-2">
          <Form className="w-2/6">
            <Input
              inputRef={inputRef}
              hasIcon
              icon="left"
              iconPath={iconSearch}
              placeholder="Search here ..."
              type="text"
              id="search"
              name="search"
              size="base"
              search
              onKeyPress={() => formik.handleSubmit()}
            />
          </Form>
          <div
            ref={btnRef}
            className="flex-1 flex items-center justify-end pr-16"
          >
            <IconButton
              size="xl"
              textColor="green"
              backGroundColor="green"
              iconPath={iconNew}
              onClick={handleCreateUser}
              onMouseEnter={openTooltip}
              onMouseLeave={closeTooltip}
            />
            <div
              ref={tooltipRef}
              className={classNames(
                `${tooltipShow ? 'flex' : 'hidden'}`,
                'font-normal leading-normal z-50 ',
                'text-sm'
              )}
            >
              <span className="mr-20 mb-1 px-1 py-1 text-base text-white bg-blue-500 rounded-md">
                New User
              </span>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default FormUser;
