import React, { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useGetAllBooksGroupByTitleQuery } from '../../../generated/graphql';
import useExpoStoreData from '../../../hooks/useExpoStoreData';
import { useAppSelector, useAppDispatch } from '../../../redux/store';
import { addBookToCart } from '../../../redux/slice/bookCart';
import { set_reset_searchValue } from '../../../redux/slice/searchValue';

interface Props {
  navigation: any;
}

const SearchBooksScreen: React.FC<Props> = ({ navigation }) => {
  const { background, colors } = useTheme();
  const userId = useExpoStoreData({ key: 'userId' });
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.searchValue.searchValue);
  const bookCart = useAppSelector((state) => state.bookCart.bookCart);
  const bookCartfilt = bookCart?.map((book: any) => {
    return book.title;
  });
  const { data, loading } = useGetAllBooksGroupByTitleQuery({
    variables: {
      page: 1,
      perPage: 100,
      filterByTitle: searchValue,
      status: 'AVAILABLE',
    },
    skip: searchValue ? false : true,
  });
  const filteredData = data?.getAllBooksGroupByTitle.books?.filter(
    (book) => !bookCartfilt?.includes(book.title)
  );
  useEffect(() => {
    dispatch(set_reset_searchValue());
  }, []);

  const handleReserve = (item: any) => {
    dispatch(
      addBookToCart({
        id: item.id,
        title: item.title,
        userId: userId as any,
      })
    );
  };
  const handleNavigateBookDetails = (item: any) => {
    navigation.navigate('BookDetails', item);
  };
  const handleNavigateBookCart = () => {
    navigation.navigate('BooksCart');
  };
  return (
    <View
      style={{
        paddingBottom: 10,
        backgroundColor: background.screenBackground,
        height: '100%',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 10,
        }}
      >
        <Text style={[styles.result, { color: colors.screenIconColor }]}>
          Results : {filteredData ? filteredData?.length : 0}
        </Text>
        <View style={styles.cart}>
          <TouchableOpacity onPress={() => handleNavigateBookCart()}>
            <Text style={[styles.cart_text, { color: colors.screenIconColor }]}>
              Reservations : {bookCart ? bookCart.length : 0}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          keyExtractor={(book) => book.id}
          contentContainerStyle={{
            padding: 10,
            paddingTop: 10,
            paddingBottom: 20,
          }}
          data={filteredData}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleNavigateBookDetails(item)}>
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
                  <Text
                    style={styles.title}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  {/* <Text style={styles.authors}>{item.authors}</Text> */}
                  <Text style={styles.copyrightYear}>{item.copyRightYear}</Text>
                  {/* <Text style={styles.authors}>{item.authors}</Text> */}
                  <Text style={styles.copyrightYear}>
                    Copies : {item.copies}
                  </Text>
                  <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => handleReserve(item)}
                    // disabled={bookCart_.length > 2 ? true : false}
                  >
                    <Text style={styles.touchable_text}>Reserve now</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.bookType}>{item.type}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default SearchBooksScreen;
const styles = StyleSheet.create({
  result: {
    color: '#2699FB',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  image: {
    width: 70,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  title: {
    width: 220,
    fontSize: 16,
    fontWeight: '700',
  },
  bookType: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    fontSize: 12,
    opacity: 0.5,
  },
  authors: {
    fontSize: 14,
    opacity: 0.7,
  },
  copyrightYear: {
    fontSize: 12,
    opacity: 0.5,
  },
  touchable: {
    width: 100,
    height: 30,
    backgroundColor: '#FF9900',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  touchable_text: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  cart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  cart_text: {
    color: '#2699FB',
    fontSize: 12,
    fontWeight: '900',
    display: 'flex',
  },
});
