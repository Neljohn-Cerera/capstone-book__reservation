import React from 'react';
import { Icon } from 'react-native-elements';

interface Props {
  navigation: any;
  colors: any;
}

const BackIcon: React.FC<Props> = ({ navigation, colors }) => {
  return (
    <>
      <Icon
        tvParallaxProperties
        containerStyle={{
          position: 'absolute',
          left: 0,
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        name="arrow-left"
        type="material-community"
        color={colors.headerIconColor}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </>
  );
};

export default BackIcon;
