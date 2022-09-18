import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  BookDetailsScreen,
  BooksCartScreen,
  BooksScreen,
} from '../../../screens/books';
import { BookDetailsHeader, BooksCartHeader, BooksHeader } from '../../headers';

const Stack = createStackNavigator();

const BookStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Books"
        component={BooksScreen}
        options={({ navigation }) => ({
          header: () => {
            return <BooksHeader navigation={navigation} />;
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

export default BookStack;
