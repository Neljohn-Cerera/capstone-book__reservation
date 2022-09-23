import React from 'react';
import { StyleSheet, ActivityIndicator, View, ColorValue } from 'react-native';
import { Button } from 'react-native-paper';

interface Props {
  label?: string;
  icon?: any;
  bgColor?: ColorValue | undefined;
  submitting?: any;
  smsCode?: any;
  onPress?: () => void;
}

const FormikButon: React.FC<Props> = ({
  label,
  icon,
  bgColor,
  submitting,
  onPress,
  smsCode,
  ...rest
}) => {
  return (
    <>
      {submitting ? (
        <View
          style={[
            styles.button,
            smsCode
              ? { backgroundColor: bgColor, width: 200 }
              : { backgroundColor: bgColor },
          ]}
        >
          <ActivityIndicator color="#ffffff" size="small" />
        </View>
      ) : (
        <Button
          icon={icon}
          mode="contained"
          style={[
            styles.button,
            smsCode
              ? { backgroundColor: bgColor, width: 200 }
              : { backgroundColor: bgColor },
          ]}
          labelStyle={styles.label}
          onPress={onPress}
          {...rest}
        >
          {label}
        </Button>
      )}
    </>
  );
};

export default FormikButon;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
