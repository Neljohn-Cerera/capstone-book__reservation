import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TouchableRipple, Switch } from 'react-native-paper';
import { set_theme } from '../../../../redux/slice/theme';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';

interface Props {
  colors: any;
}
const DrawerPreferences: React.FC<Props> = ({ colors }) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch = useAppDispatch();
  // delaying theme
  const handleDarkmode = () => {
    setTimeout(() => {
      dispatch(set_theme());
    }, 400);
  };
  return (
    <View>
      <Text
        style={{
          color: colors.drawerTitleColor,
          marginLeft: 15,
          fontSize: 10,
        }}
      >
        Preferences
      </Text>
      <TouchableRipple onPress={() => handleDarkmode()}>
        <View style={styles.preference}>
          <Text style={{ color: colors.drawerTextColor, fontSize: 12 }}>
            Dark Theme
          </Text>
          <View pointerEvents="none">
            <Switch value={isDarkMode} />
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerPreferences;
