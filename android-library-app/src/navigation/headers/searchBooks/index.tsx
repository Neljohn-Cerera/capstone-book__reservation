import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  TextInput,
  Text,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import BackIcon from '../shared/backIcon';
import { useAppDispatch } from '../../../redux/store';
import { set_searchValue } from '../../../redux/slice/searchValue';

interface Props {
  navigation: any;
}

const SearchBookHeader: React.FC<Props> = ({ navigation }) => {
  const [textValue, setTextValue] = useState('');
  const dispatch = useAppDispatch();
  const { background, colors } = useTheme();

  const handleSubmitSearch = () => {
    dispatch(set_searchValue({ searchValue: textValue }));
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: background.headerBackground },
      ]}
    >
      <BackIcon navigation={navigation} colors={colors} />
      <TextInput
        style={[styles.input, { backgroundColor: colors.headerIconColor }]}
        placeholder="Search Title of the Book"
        keyboardType="default"
        value={textValue}
        onChangeText={setTextValue}
        onSubmitEditing={() => handleSubmitSearch()}
      />
    </View>
  );
};

export default SearchBookHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: '100%',
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 5,
    padding: 8,
    width: '80%',
    marginLeft: 30,
  },
});
