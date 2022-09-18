import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';
import {
  FONT_COLOR,
  BORDER_COLOR,
  TEXTBOX_BACKGROUND,
  PLACEHOLDER_COLOR,
} from '../../../../theme';

interface Props {
  label?: string;
  formikProps?: any;
  formikKey?: any;
  placeholder?: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLength?: number | undefined;
  secureTextEntry?: boolean | undefined;
}

const FormikTextInput: React.FC<Props> = ({
  label,
  formikProps,
  formikKey,
  placeholder,
  keyboardType,
  maxLength,
  secureTextEntry,
  ...rest
}) => {
  // TextInput style
  const input_container = {
    width: 280,
    borderWidth: 1,
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: TEXTBOX_BACKGROUND,
    borderColor: BORDER_COLOR,
  };
  // If error overrider TextInput border should be red
  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    input_container.borderColor = 'red';
  }
  return (
    <View style={styles.container_text}>
      {/* Label */}
      <Text style={styles.label}>{label}</Text>
      {/* TextInput */}
      <View style={input_container as any}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={PLACEHOLDER_COLOR}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          onChangeText={formikProps.handleChange(formikKey)}
          onBlur={formikProps.handleBlur(formikKey)}
          {...rest}
        />
      </View>

      {/* Error Handler */}
      {formikProps.touched[formikKey] && formikProps.errors[formikKey] ? (
        <Text style={{ marginTop: 5, fontSize: 10, color: 'red' }}>
          {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </Text>
      ) : null}
    </View>
  );
};

export default FormikTextInput;

const styles = StyleSheet.create({
  container_text: {
    width: 280,
    marginTop: 20,
  },
  input: {
    width: 260,
    height: 50,
    color: FONT_COLOR,
    fontSize: 14,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: FONT_COLOR,
    marginBottom: 10,
  },
});
