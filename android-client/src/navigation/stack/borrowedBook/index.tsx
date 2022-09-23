import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BorrowedBooksHeader } from "../../headers";
import BorrowedBooksScreen from "../../../screens/borrowedBooks";

const Stack = createNativeStackNavigator();

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
