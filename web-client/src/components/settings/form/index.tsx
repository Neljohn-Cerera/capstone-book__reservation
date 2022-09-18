import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { iconCancel, iconSubmit } from '../../../assets/icons';
import Alerts from '../../shared/alerts';
import Input from '../../shared/input';
import Button from '../../shared/buttons/base';
import { useUpdateSettingsMutation } from '../../../generated/graphql';

interface Props {
  openForm: boolean;
  refetch: any;
}

const SettingsForm: React.FC<Props> = ({ openForm, refetch }) => {
  const [updateSettings] = useUpdateSettingsMutation();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState('');

  return (
    <Formik
      initialValues={{ fine: 0 }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await updateSettings({
            variables: {
              fine: parseFloat(values.fine as any),
            },
          });
          if (response.data?.updateSettings.isSucess) {
            setIsSuccess(true);
            refetch();
          }
        } catch (error) {
          console.log('settings err : ', error);
          setIsError('settings Update Failed');
        }

        setTimeout(() => {
          setIsSuccess(false);
          setIsError('');
        }, 5000);
      }}
    >
      {(formik) => (
        <Form className="flex-1 border border-gray-500 p-10 rounded">
          {isSuccess && (
            <Alerts top="10" success text="Settings Updated Successfully" />
          )}
          {isError && <Alerts top="10" _error text={isError} />}
          {openForm ? (
            <>
              <Input
                hasIcon={false}
                placeholder="type here ..."
                type="text"
                id="fine"
                name="fine"
                size="base"
                mb="lg"
                label="Fine"
                labelColor="gray"
              />
              <Button
                type="submit"
                text="Submit"
                size="base"
                icon="right"
                iconPath={iconSubmit}
                isLoading={formik.isSubmitting}
              />
              <Button
                backGroundColor="red"
                type="reset"
                text="Reset"
                size="base"
                icon="right"
                ml="base"
                iconPath={iconCancel}
                isLoading={formik.isSubmitting}
                onClick={() => console.log('reset')}
              />
            </>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default SettingsForm;
