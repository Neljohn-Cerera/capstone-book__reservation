import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MenuIcon from '../shared/menuIcon';
interface Props {
  navigation: any;
}

const RecordsHeader: React.FC<Props> = ({ navigation }) => {
  const { background, colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: background.headerBackground },
      ]}
    >
      <MenuIcon navigation={navigation} colors={colors} />
    </View>
  );
};

export default RecordsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: '100%',
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
