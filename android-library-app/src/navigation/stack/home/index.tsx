import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../screens/home';
import {
  BookDetailsHeader,
  BooksCartHeader,
  HomeHeader,
  SearchBookHeader,
} from '../../headers';
import {
  BookDetailsScreen,
  BooksCartScreen,
  SearchBooksScreen,
} from '../../../screens/books';

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          header: () => {
            return <HomeHeader navigation={navigation} />;
          },
        })}
      />
      <Stack.Screen
        name="SearchBook"
        component={SearchBooksScreen}
        options={({ navigation }) => ({
          header: () => {
            return <SearchBookHeader navigation={navigation} />;
          },
        })}
      />
      <Stack.Screen
        name="BookDetails"
        component={BookDetailsScreen}
        options={({ navigation }) => ({
          header: () => {
            return <BookDetailsHeader navigation={navigation} />;
          },
        })}
      />
      <Stack.Screen
        name="BooksCart"
        component={BooksCartScreen}
        options={({ navigation }) => ({
          header: () => {
            return <BooksCartHeader navigation={navigation} />;
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
