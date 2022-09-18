import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

interface Props {
  colors: any;
  props: any;
}

const DrawerNavigation: React.FC<Props> = ({ colors, props }) => {
  return (
    <>
      <DrawerItem
        icon={({ size }) => (
          <Icon
            tvParallaxProperties
            name="home"
            color={colors.drawerIconColor}
            size={size}
            type="material-community"
          />
        )}
        labelStyle={{ color: colors.drawerTextColor, fontSize: 12 }}
        label="Home"
        onPress={() => {
          props.navigation.navigate('HomeStack');
        }}
      />
      <DrawerItem
        icon={({ size }) => (
          <Icon
            tvParallaxProperties
            name="account-circle"
            type="material-community"
            color={colors.drawerIconColor}
            size={size}
          />
        )}
        labelStyle={{ color: colors.drawerTextColor, fontSize: 12 }}
        label="Account"
        onPress={() => {
          console.log('account');
        }}
      />
      <DrawerItem
        icon={({ size }) => (
          <Icon
            tvParallaxProperties
            name="bookshelf"
            type="material-community"
            color={colors.drawerIconColor}
            size={size}
          />
        )}
        labelStyle={{ color: colors.drawerTextColor, fontSize: 12 }}
        label="Books"
        onPress={() => {
          props.navigation.navigate('BookStack');
        }}
      />

      <DrawerItem
        icon={({ size }) => (
          <Icon
            tvParallaxProperties
            name="text-box-multiple"
            type="material-community"
            color={colors.drawerIconColor}
            size={size}
          />
        )}
        labelStyle={{ color: colors.drawerTextColor, fontSize: 12 }}
        label="Reservations"
        onPress={() => {
          props.navigation.navigate('ReservationStack');
        }}
      />
      <DrawerItem
        icon={({ size }) => (
          <Icon
            tvParallaxProperties
            name="bookshelf"
            type="material-community"
            color={colors.drawerIconColor}
            size={size}
          />
        )}
        labelStyle={{ color: colors.drawerTextColor, fontSize: 12 }}
        label="Borrowed Books"
        onPress={() => {
          props.navigation.navigate('BorrowedBooksStack');
        }}
      />
      <DrawerItem
        icon={({ size }) => (
          <Icon
            tvParallaxProperties
            name="text-box-search"
            type="material-community"
            color={colors.drawerIconColor}
            size={size}
          />
        )}
        labelStyle={{ color: colors.drawerTextColor, fontSize: 12 }}
        label="Records"
        onPress={() => {
          props.navigation.navigate('RecordsStack');
        }}
      />
      <DrawerItem
        icon={({ size }) => (
          <Icon
            tvParallaxProperties
            name="cog"
            type="material-community"
            color={colors.drawerIconColor}
            size={size}
          />
        )}
        labelStyle={{ color: colors.drawerTextColor, fontSize: 12 }}
        label="Settings"
        onPress={() => {
          console.log('settings');
          // props.navigation.navigate("Settings");
        }}
      />
    </>
  );
};

export default DrawerNavigation;
