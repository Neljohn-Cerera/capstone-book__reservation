import { DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { useUserLogOutMutation } from '../../../../generated/graphql';
import { set_loggedin_false } from '../../../../redux/slice/login';
import { useAppDispatch } from '../../../../redux/store';

interface Props {
  colors: any;
}

const DrawerFooter: React.FC<Props> = ({ colors }) => {
  const [userLogOut] = useUserLogOutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    Alert.alert(
      'Exit',
      'Do you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const logout = await userLogOut();
            if (logout.data?.userLogOut) {
              dispatch(set_loggedin_false());
            }
          },
        },
      ],

      { cancelable: false }
    );
  };
  return (
    <>
      <DrawerItem
        icon={({ size }) => (
          <Icon
            tvParallaxProperties
            name="logout"
            type="material-community"
            color={colors.drawerIconColor}
            size={size}
          />
        )}
        labelStyle={{ color: colors.drawerTextColor, fontSize: 12 }}
        label="Logout"
        onPress={() => handleLogout()}
      />
    </>
  );
};

export default DrawerFooter;
