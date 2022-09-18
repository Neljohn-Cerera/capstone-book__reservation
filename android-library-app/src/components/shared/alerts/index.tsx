import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
  err?: boolean;
  success?: boolean;
}

const ALERTS: React.FC<Props> = ({ text, err, success }) => {
  return (
    <View
      style={[
        styles.container,
        { borderColor: `${err ? 'red' : success ? 'green' : 'blue'}` },
      ]}
    >
      <Text style={{ color: 'red', fontSize: 14 }}>{text}</Text>
    </View>
  );
};

export default ALERTS;
//styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 18,
    borderRadius: 8,
    borderWidth: 1,
  },
});
