import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import { ReservationScanQrQuery } from '../../generated/graphql';

interface Props {
  data?: ReservationScanQrQuery | undefined;
}

const ReservationComponent: React.FC<Props> = ({ data }) => {
  const borrow = data?.reservationScanQr.borrowTransaction;

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        padding: 10,
      }}
    >
      <AntDesign
        style={styles.icon}
        name="checkcircle"
        size={60}
        color="green"
      />
      <Text style={styles.iconText}>Borrow Successfull</Text>
      <View
        style={{
          margin: 10,
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.dataContainer}>
          {/* Dates */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text style={{ fontSize: 12, fontWeight: '600', color: 'gray' }}>
                Borrow
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'gray' }}>
                {moment(parseInt(borrow?.borrowDate as any)).format(
                  'YYYY-MM-DD'
                )}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, fontWeight: '600', color: 'gray' }}>
                Return
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'gray' }}>
                {moment(parseInt(borrow?.returnDate as any)).format(
                  'YYYY-MM-DD'
                )}
              </Text>
            </View>
          </View>
          <View style={styles.horizontal} />
          {/* Books */}
          <View>
            <Text style={{ fontSize: 12, fontWeight: '600', color: 'gray' }}>
              Book
            </Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray' }}>
              {data?.reservationScanQr.borrowTransaction?.book.title}
            </Text>
          </View>
          <View style={styles.horizontal} />
          {/* User */}
          <View>
            <Text style={{ fontSize: 12, fontWeight: '600', color: 'gray' }}>
              Name
            </Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray' }}>
              {`${data?.reservationScanQr.borrowTransaction?.user.firstName} ${data?.reservationScanQr.borrowTransaction?.user.middleName} ${data?.reservationScanQr.borrowTransaction?.user.lastName}`}
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 12, fontWeight: '600', color: 'gray' }}>
              Idnumber
            </Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray' }}>
              {data?.reservationScanQr.borrowTransaction?.user.idNumber}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReservationComponent;

const styles = StyleSheet.create({
  dataContainer: {
    height: '100%',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  iconText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 16,
  },
  horizontal: {
    borderWidth: 0.5,
    borderColor: 'gray',
    margin: 10,
  },
});
