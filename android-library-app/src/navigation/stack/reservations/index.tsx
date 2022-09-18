import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReservationsHeader } from '../../headers';
import ReservationsScreen from '../../../screens/reservations';

const Stack = createStackNavigator();

const ReservationStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Reservations"
        component={ReservationsScreen}
        options={({ navigation }) => ({
          header: () => {
            return <ReservationsHeader navigation={navigation} />;
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default ReservationStack;
