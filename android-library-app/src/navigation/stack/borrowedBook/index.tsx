import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BorrowedBooksHeader } from '../../headers';
import BorrowedBooksScreen from '../../../screens/borrowedBooks';

const Stack = createStackNavigator();

const BorrowedBooksStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BorrowedBooks"
        component={BorrowedBooksScreen}
        options={({ navigation }) => ({
          header: () => {
            return <BorrowedBooksHeader navigation={navigation} />;
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default BorrowedBooksStack;
