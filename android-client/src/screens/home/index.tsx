import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAppDispatch } from '../../redux/store';
import { resetCart } from '../../redux/slice/bookCart';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const _resetCart = () => {
    dispatch(resetCart());
  };
  return (
    <View>
      <TouchableOpacity onPress={() => _resetCart()}>
        <Text style={{ color: 'blue' }}> Reset CART</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
