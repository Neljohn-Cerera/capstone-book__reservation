import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';
import MenuIcon from '../shared/menuIcon';
interface Props {
  navigation: any;
}

const HomeHeader: React.FC<Props> = ({ navigation }) => {
  const { background, colors } = useTheme();

  const handleSearch = () => {
    navigation.navigate('SearchBook');
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: background.headerBackground },
      ]}
    >
      <MenuIcon navigation={navigation} colors={colors} />

      <TouchableOpacity style={styles.search} onPress={handleSearch}>
        <Icon
          tvParallaxProperties
          containerStyle={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          name="magnify"
          type="material-community"
          color={colors.headerIconColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  search: {
    position: 'absolute',
    right: 0,
    width: 50,
    height: 50,
  },
  container: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: '100%',
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
