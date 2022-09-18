import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { WIDTH, BODY_HEIGHT } from '../../../theme';
import SpctLogo from '../../../components/login/logo';
import SignInForm from '../../../components/login/signin/form';

interface Props {
  navigation?: any;
}

const SigninScreen: React.FC<Props> = ({ navigation }) => {
  //return
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../../../assets/loginBackground.png')}
      >
        <View style={styles.body}>
          <SpctLogo />
          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#040262',
              width: 280,
              marginBottom: 10,
              marginTop: 30,
              opacity: 0.3,
            }}
          />
          <SignInForm navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SigninScreen;
//styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: WIDTH,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: BODY_HEIGHT,
    width: WIDTH,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
