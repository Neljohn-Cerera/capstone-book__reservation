import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BookDetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Love Ones</Text>

      <View style={styles.text_container}>
        <Text style={styles.label}>Book ID </Text>
        <Text style={styles.data}>: bok102102</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>Account Number </Text>
        <Text style={styles.data}>: acc-202</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>ISBN Number </Text>
        <Text style={styles.data}>: 10202-20203-23</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>Author </Text>
        <Text style={styles.data}>: Neljohn </Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>Publisher Name </Text>
        <Text style={styles.data}>: The Ones</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>Copyright Year </Text>
        <Text style={styles.data}>: 2009</Text>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.label}>Book Type </Text>
        <Text style={styles.data}>: No Reserve</Text>
      </View>
    </View>
  );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 18,
  },
  text_container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  label: {
    textAlign: 'left',
    fontWeight: '300',
    fontSize: 14,
    width: 150,
    marginTop: 1,
  },
  data: {
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 16,
  },
});
