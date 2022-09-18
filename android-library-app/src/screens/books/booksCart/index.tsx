import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { removeBookFromCart } from '../../../redux/slice/bookCart';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles';
import { useCreateReservationsMutation } from '../../../generated/graphql';
import { ActivityIndicator } from 'react-native-paper';

interface Props {
  navigation: any;
}

const BooksCartScreen: React.FC<Props> = ({ navigation }) => {
  const { background } = useTheme();
  const dispatch = useAppDispatch();
  const [errors_, setErrors_] = useState<string[]>([]);
  const booksCart = useAppSelector((state) => state.bookCart.bookCart);
  const booksCartFiltered = booksCart.map((book: any) => {
    return { title: book.title, userId: parseInt(book.userId) };
  });

  const [createReservations, { loading, data }] =
    useCreateReservationsMutation();

  const handleRemoveReservation = (book: any) => {
    dispatch(removeBookFromCart({ title: book.title }));
  };

  const handleReservation = async () => {
    if (booksCartFiltered.length === 0) {
      Alert.alert('Your List has no items', '', [
        {
          text: 'OK',
          onPress: () => {
            navigation.goBack();
          },
        },
      ]);
    } else {
      Alert.alert(
        'Reserved Now !!!.',
        'Continue Reservation ?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: async () => {
              const response = await createReservations({
                variables: { input: booksCartFiltered },
                onError: (err) => {
                  console.log('create error : ', err);
                },
              });
              console.log('response : ', response);
              if (response.data?.createReservations.errors) {
                const _err = response.data?.createReservations.errors;
                Promise.all(
                  _err.map((err: any) => {
                    setErrors_((state) => [...state, err.message]);
                  })
                );
              }
              if (
                !response.data?.createReservations.errors &&
                response.data?.createReservations.reservations
              ) {
                Alert.alert(
                  'Successfull',
                  'Your reservation was successfull, wait for the staff approval.'
                );
                navigation.navigate('BooksDetails');
              }
            },
          },
        ],
        { cancelable: false }
      );
    }
  };
  console.log('errors : ', errors_);
  return (
    <View
      style={[
        styles.containerMain,
        { backgroundColor: background.screenBackground },
      ]}
    >
      {loading && (
        <ActivityIndicator
          style={{ marginTop: 10 }}
          size="large"
          color="#0000ff"
        />
      )}
      {errors_ &&
        errors_.map((err: any, index) => (
          <View key={index} style={styles.container_error}>
            <Text style={{ color: '#C53030', fontSize: 12 }}>{err}</Text>
          </View>
        ))}
      {data?.createReservations.reservations && (
        <View style={styles.container_success}>
          <Text style={{ color: '#234E52', fontSize: 12 }}>
            Reservation Successfull
          </Text>
        </View>
      )}

      <Text style={styles.titleMain}>
        Reservation List : {booksCartFiltered.length}
      </Text>
      <FlatList
        keyExtractor={(book) => book.id}
        contentContainerStyle={{
          padding: 10,
          paddingTop: 10,
          paddingBottom: 20,
        }}
        data={booksCart}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.container,
              { backgroundColor: background.flatlistBackground },
            ]}
          >
            <Image
              source={require('../../../../assets/book.jpg')}
              style={styles.image}
            />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => handleRemoveReservation(item)}
              >
                <Text style={styles.touchable_text}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.borrowButton}
        onPress={() => handleReservation()}
      >
        <Text style={styles.borrowButton_text}>Procceed Reservation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BooksCartScreen;
