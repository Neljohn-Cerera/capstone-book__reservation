import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';

interface Props {
  title?: string;
  show?: boolean;
  navigation?: any;
}

const LoginHeader: React.FC<Props> = ({ title, navigation, show }) => {
  return (
    <View style={styles.container}>
      {show && (
        <Icon
          tvParallaxProperties
          containerStyle={{
            position: 'absolute',
            left: 20,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          name="arrow-left"
          type="material-community"
          color="#ffffff"
          onPress={() => navigation.goBack()}
        />
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#2699FB',
    width: '100%',
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    color: 'red',
  },
});
