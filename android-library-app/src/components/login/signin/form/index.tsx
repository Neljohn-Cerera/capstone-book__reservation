import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { FONT_COLOR } from '../../../../theme';
import { FormikTextInput, FormikButton } from '../../../shared';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useUserLoginMutation } from '../../../../generated/graphql';
import { LoginSchema } from './validation';
import { toErrorMap } from '../../../../utils/toErrorMap';
import * as SecureStore from 'expo-secure-store';
import { useAppDispatch } from '../../../../redux/store';
import { set_loggedin_true } from '../../../../redux/slice/login';
import ALERTS from '../../../shared/alerts';

interface Props {
  navigation?: any;
}

const SignInForm: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [errNetwork, setErrNetwork] = useState();
  const [errResponse, setErrResponse] = useState('');
  const [userLogin, { loading }] = useUserLoginMutation({
    onError: (err) => {
      setErrNetwork(err.networkError as any);
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setErrNetwork(undefined);
    }, 10000);
  }, [errNetwork]);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        try {
          const response = await userLogin({
            variables: {
              email: values.email,
              password: values.password,
            },
          });
          if (response.data?.userLogin.errors) {
            setErrResponse(response.data.userLogin.errors[0].message);
          }
          if (response.data?.userLogin.isSucess) {
            Alert.alert('Login Successful', 'Welcome User...');
            await SecureStore.setItemAsync(
              'userId',
              response.data.userLogin.userAccount?.id!
            );
            dispatch(set_loggedin_true());
          }
        } catch (error) {
          console.log('userLogin error : ', error);
        }
      }}
    >
      {(formik) => (
        <View>
          {errNetwork ? (
            <ALERTS
              err
              text="  There was a problem establishing your connection .."
            />
          ) : null}
          {errResponse ? <ALERTS err text={errResponse} /> : null}
          <FormikTextInput
            label="Email"
            formikProps={formik}
            formikKey="email"
            placeholder="Enter Email..."
            keyboardType="email-address"
          />
          <FormikTextInput
            label="Password"
            formikProps={formik}
            formikKey="password"
            placeholder="Enter password..."
            keyboardType="default"
            maxLength={20}
            secureTextEntry={false}
          />
          {/* Button Container */}
          <View style={styles.buttonGroup}>
            {/* Login Button */}
            <FormikButton
              label="Login"
              icon="account-arrow-right-outline"
              bgColor="#2699FB"
              submitting={loading}
              onPress={formik.handleSubmit}
            />
            {/* Signup Button */}
            <FormikButton
              label="Signup"
              icon="account-plus-outline"
              bgColor="#ACA7A7"
              onPress={() => navigation.push('Signup')}
            />
          </View>
          {/* Privacy */}
          <TouchableOpacity>
            <Text style={styles.privacy}>Privacy and Terms</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;

//styles
const styles = StyleSheet.create({
  buttonGroup: {
    width: 280,
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  privacy: {
    color: FONT_COLOR,
    fontSize: 12,
    marginTop: 25,
    alignSelf: 'center',
  },
});
