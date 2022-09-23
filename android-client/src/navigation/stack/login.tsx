import React from "react";
import { SigninScreen } from "../../screens/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginHeader from "../../components/login/header";

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{
            header: () => {
              return <LoginHeader title="Login" show={false} />;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;
