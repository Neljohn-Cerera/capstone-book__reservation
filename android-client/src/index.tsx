import React from "react";
import StackLogin from "./navigation/stack/login";
import Drawer from "./navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "./redux/store";

const Main = () => {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
  // const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <>
      {isLoggedIn ? (
        <NavigationContainer>
          <Drawer />
        </NavigationContainer>
      ) : (
        <StackLogin />
      )}
    </>
  );
};

export default Main;
