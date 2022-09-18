import React, { useState, useRef, useEffect } from 'react';
import Input from '../../shared/input';
import { Form, Formik } from 'formik';
import { useCreateUserAccountMutation } from '../../../generated/graphql';
import Button from '../../shared/buttons/base';
import { iconCancel, iconSubmit } from '../../../assets/icons';
import DropDown from '../../shared/dropDown';
import { toErrorMap } from '../../../helpers/toErrorMap';
import { UserCreateSchema } from './validation';
import Alerts from '../../shared/alerts';

interface Props {}

const initialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  idNumber: '',
  age: 0,
  birthDate: '',
  address: '',
  email: '',
  mobileNumber: '',
  password: '',
  confirmPassword: '',
};

const FormCreateUser: React.FC<Props> = () => {
  const [success, setSuccess] = useState(false);
  const [selectedRole, setSelectedRole] = useState('STUDENT');
  const [createUserAccount] = useCreateUserAccountMutation();
  const inputRef: any = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserCreateSchema}
      onSubmit={async (values, { setStatus, setSubmitting }) => {
        const response = await createUserAccount({
          variables: {
            roleInput: selectedRole,
            accountInput: {
              email: values.email,
              mobileNumber: values.mobileNumber,
              password: values.password,
            },
            userInput: {
              firstName: values.firstName,
              middleName: values.middleName,
              lastName: values.lastName,
              idNumber: values.idNumber,
              age: values.age,
              address: values.address,
              birthDate: values.birthDate,
            },
          },
        });
        if (response.data?.createUserAccount.errors) {
          setStatus(toErrorMap(response.data?.createUserAccount.errors));
        } else {
          setSuccess(true);
          setSubmitting(false);
          setTimeout(() => {
            setSuccess(false);
            setStatus(undefined);
          }, 5000);
        }
      }}
    >
      {(formik) => (
        <div className="flex w-full items-center mt-2">
          <Form className="w-full border mb-8">
            {formik.status ? (
              <Alerts
                _error
                top="top-32"
                text={JSON.stringify(formik.status)}
              />
            ) : null}
            {success ? (
              <Alerts success top="top-32" text="User Created Successfully" />
            ) : null}
            <div className="flex flex-row justify-center items-start bg-gray-100 rounded-md">
              <div className="flex-1 p-8">
                <h1 className="text-gray-400 text-center text-lg font-semibold mb-4">
                  Personal Informations
                </h1>
                <DropDown
                  label="Role"
                  data={['STUDENT', 'TEACHER']}
                  state={selectedRole}
                  setState={setSelectedRole}
                />
                <Input
                  inputRef={inputRef}
                  hasIcon={false}
                  placeholder="your firstname ..."
                  type="text"
                  id="firstName"
                  name="firstName"
                  size="base"
                  mb="lg"
                  label="First Name"
                  labelColor="gray"
                />
                <Input
                  hasIcon={false}
                  placeholder="your middlename ..."
                  type="text"
                  id="middleName"
                  name="middleName"
                  size="base"
                  mb="lg"
                  label="Middle Name"
                  labelColor="gray"
                />
                <Input
                  hasIcon={false}
                  placeholder="your lastname ..."
                  type="text"
                  id="lastName"
                  name="lastName"
                  size="base"
                  mb="lg"
                  label="Last Name"
                  labelColor="gray"
                />
                <Input
                  hasIcon={false}
                  placeholder="ex. cphxxxxx"
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  size="base"
                  mb="lg"
                  label="Id Number"
                  labelColor="gray"
                />
                <Input
                  hasIcon={false}
                  placeholder="your age ..."
                  type="number"
                  id="age"
                  name="age"
                  size="base"
                  mb="lg"
                  label="Age"
                  labelColor="gray"
                />
                <Input
                  hasIcon={false}
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  size="base"
                  mb="lg"
                  label="Birth Date"
                  labelColor="gray"
                />
                <Input
                  hasIcon={false}
                  placeholder="your address ..."
                  type="text"
                  id="address"
                  name="address"
                  size="base"
                  label="Address"
                  labelColor="gray"
                />
              </div>
              <div className="flex-1 p-8">
                <h1 className="text-gray-400 text-center text-lg font-semibold mb-4">
                  Account
                </h1>
                <Input
                  hasIcon={false}
                  placeholder="xxxxx@gmail.com"
                  type="email"
                  id="email"
                  name="email"
                  size="base"
                  mb="lg"
                  label="Email"
                  labelColor="gray"
                />
                <Input
                  hasIcon={false}
                  placeholder="09xxxxxxxxx"
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  size="base"
                  mb="lg"
                  label="Mobile Number"
                  labelColor="gray"
                />
                <Input
                  hasIcon={false}
                  placeholder="pass ..."
                  type="password"
                  id="password"
                  name="password"
                  size="base"
                  mb="lg"
                  label="Password"
                  labelColor="gray"
                />
                <Input
                  hasIcon={false}
                  placeholder="confirm pass ..."
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  size="base"
                  label="Confirm Password"
                  labelColor="gray"
                />
                <div className="flex mt-8">
                  <Button
                    type="submit"
                    text="Submit"
                    size="base"
                    icon="right"
                    iconPath={iconSubmit}
                    isLoading={formik.isSubmitting}
                  />
                  <Button
                    type="reset"
                    text="Reset"
                    size="base"
                    icon="right"
                    iconPath={iconCancel}
                    backGroundColor="red"
                    ml="lg"
                  />
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default FormCreateUser;
