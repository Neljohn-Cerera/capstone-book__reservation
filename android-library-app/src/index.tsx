import React, { useState, useEffect } from 'react';
import StackLogin from './navigation/stack/login';
import Drawer from './navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { BlueTheme, darkTheme } from './theme';
import { useAppSelector } from './redux/store';

const Main = () => {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <>
      {isLoggedIn ? (
        <NavigationContainer
          theme={isDarkMode ? (darkTheme as any) : (BlueTheme as any)}
        >
          <Drawer />
        </NavigationContainer>
      ) : (
        <StackLogin />
      )}
    </>
  );
};

export default Main;
