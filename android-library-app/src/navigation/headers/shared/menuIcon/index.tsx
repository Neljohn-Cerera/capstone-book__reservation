import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
interface Props {
  navigation: any;
  colors: any;
}

const MenuIcon: React.FC<Props> = ({ navigation, colors }) => {
  const handleDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <>
      <TouchableOpacity style={styles.menu} onPress={handleDrawer}>
        <Icon
          tvParallaxProperties
          containerStyle={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          name="menu"
          type="material-community"
          color={colors.headerIconColor}
        />
      </TouchableOpacity>
    </>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    left: 0,
    width: 50,
    height: 50,
  },
});
