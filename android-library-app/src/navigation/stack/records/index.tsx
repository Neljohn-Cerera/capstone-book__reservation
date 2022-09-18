import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RecordsHeader } from '../../headers';
import RecordsScreen from '../../../screens/records';

const Stack = createStackNavigator();

const RecordsStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Records"
        component={RecordsScreen}
        options={({ navigation }) => ({
          header: () => {
            return <RecordsHeader navigation={navigation} />;
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default RecordsStack;
