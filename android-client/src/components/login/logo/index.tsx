import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const SpctLogo = () => {
  return (
    <View style={styles.container_Logo}>
      <Image
        style={styles.logo}
        source={require('../../../../assets/spctLogo.jpeg')}
      />
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.logo_title}>St. Peter College of Toril Inc.</Text>
        <Text style={styles.logo_title}>Toril, Davao City</Text>
        <Text style={[styles.logo_title, { fontWeight: 'bold' }]}>
          College Department
        </Text>
      </View>
    </View>
  );
};

export default SpctLogo;

const styles = StyleSheet.create({
  container_Logo: {
    width: 280,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logo_title: {
    color: '#040262',
    fontSize: 12,
    width: 170,
    textAlign: 'center',
    marginLeft: 10,
    marginBottom: 2,
  },
  logo: {
    width: 70,
    height: 73,
    opacity: 0.7,
  },
});
