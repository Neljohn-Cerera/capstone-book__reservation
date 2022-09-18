import React from 'react';
import { Drawer } from 'react-native-paper';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import HeaderDrawer from './header';
import DrawerNavigation from './navigation';
import DrawerPreferences from './preferences';
import DrawerFooter from './footer';

const DrawerContent = (props: any) => {
  const { background, colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: background.drawerBackground }}>
      <DrawerContentScrollView {...props}>
        <View style={[styles.drawerContent]}>
          <View style={styles.userInfoSection}>
            {/* Header Component */}
            <HeaderDrawer colors={colors} />
          </View>
          <Drawer.Section style={styles.drawerSection}>
            {/* Navigation Component */}
            <DrawerNavigation colors={colors} props={props} />
          </Drawer.Section>
          <Drawer.Section>
            {/* Preferences Component */}
            <DrawerPreferences colors={colors} />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* Bottom */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerFooter colors={colors} />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
});

export default DrawerContent;
