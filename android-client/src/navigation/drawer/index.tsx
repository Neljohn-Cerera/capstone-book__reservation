import React from 'react';
import BookStack from '../stack/book';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawerContent';
import HomeStack from '../stack/home';
import ReservationStack from '../stack/reservations';
import BorrowedBooksStack from '../stack/borrowedBook';
import RecordsStack from '../stack/records';

const Drawer_ = createDrawerNavigator();

const Drawer: React.FC = () => {
  return (
    <Drawer_.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer_.Screen
        options={{ headerShown: false }}
        name="HomeStack"
        component={HomeStack}
      />
      <Drawer_.Screen
        options={{ headerShown: false }}
        name="BookStack"
        component={BookStack}
      />
      <Drawer_.Screen
        options={{ headerShown: false }}
        name="ReservationStack"
        component={ReservationStack}
      />
      <Drawer_.Screen
        options={{ headerShown: false }}
        name="BorrowedBooksStack"
        component={BorrowedBooksStack}
      />
      <Drawer_.Screen
        options={{ headerShown: false }}
        name="RecordsStack"
        component={RecordsStack}
      />
    </Drawer_.Navigator>
  );
};

export default Drawer;
