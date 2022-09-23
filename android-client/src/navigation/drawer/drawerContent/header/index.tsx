import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Caption, Title } from 'react-native-paper';

interface Props {
  colors: {
    drawerTitleColor: string;
  };
}

const HeaderDrawer: React.FC<Props> = ({ colors }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15 }}>
      <Avatar.Image
        source={require('../../../../../assets/spctLogo.jpeg')}
        size={50}
      />
      <View style={{ marginLeft: 15, flexDirection: 'column' }}>
        <Title
          style={[
            styles.title,
            { marginTop: 0, color: colors.drawerTitleColor },
          ]}
        >
          Book Reservation
        </Title>
        <Caption style={[styles.caption, { color: colors.drawerTitleColor }]}>
          Version 1.0
        </Caption>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 10,
    lineHeight: 10,
  },
});

export default HeaderDrawer;
