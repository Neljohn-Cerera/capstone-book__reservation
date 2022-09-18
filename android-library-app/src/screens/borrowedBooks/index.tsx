import React, { useState } from 'react';
import { styles } from './styles';
import { TouchableOpacity, View, Text, FlatList, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import { useUserBorrowTransactionQuery } from '../../generated/graphql';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import useExpoStoreData from '../../hooks/useExpoStoreData';
import QRCode from 'react-native-qrcode-svg';

const reservationStatus: RadioButtonProps[] = [
  {
    id: '1',
    color: '#1E3A8A',
    labelStyle: { color: '#1E3A8A', fontSize: 12 },
    label: 'Borrowed',
    value: 'BORROWED',
    selected: true,
    size: 18,
  },
  {
    id: '2',
    color: '#1E3A8A',
    labelStyle: { color: '#1E3A8A', fontSize: 12 },
    label: 'Returned',
    value: 'RETURNED',
    size: 18,
  },
  {
    id: '3',
    color: '#1E3A8A',
    labelStyle: { color: '#1E3A8A', fontSize: 12 },
    label: 'Overdue',
    value: 'OVERDUE',
    size: 18,
  },
];

const BorrowedBooksScreen: React.FC = () => {
  const { background } = useTheme();
  const [status, setStatus] = useState<RadioButtonProps[]>(reservationStatus);
  const [showQrCode, setShowQrCode] = useState<boolean>(false);
  const [qrCodeValue, setQrCodeValue] = useState<string>('');
  const [stats, setStats] = useState<string>('BORROWED');
  const userId = useExpoStoreData({ key: 'userId' });
  const { data, loading } = useUserBorrowTransactionQuery({
    variables: {
      page: 1,
      perPage: 100,
      userId: parseInt(userId as any),
      status: stats,
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleStatusChange = (val: RadioButtonProps[]) => {
    const _stats = val
      .filter((status) => status.selected === true)
      .map((status) => {
        return status.value;
      });

    setStats(_stats[0] as string);
  };

  const handleGenerateQrcode = (qr: string) => {
    setQrCodeValue(qr);
    setShowQrCode(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Borrowed Records</Text>
      <Text style={{ fontSize: 12, marginLeft: 10 }}>Filter by </Text>
      <RadioGroup
        containerStyle={{ alignItems: 'flex-start' }}
        radioButtons={status}
        onPress={handleStatusChange}
        layout="column"
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          horizontal={false}
          keyExtractor={(borrow) => borrow.id}
          contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 20,
          }}
          data={data?.userBorrowTransaction}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.container,
                { backgroundColor: background.flatlistBackground },
              ]}
            >
              <Image
                source={require('../../../assets/book.jpg')}
                style={styles.image}
              />
              <View>
                <Text
                  style={styles.bookTitle}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 10 }}>{item.accountNumber}</Text>
                <Text style={{ fontSize: 10 }}>{item.bookId}</Text>
                <Text
                  style={[
                    {
                      fontSize: 10,
                      letterSpacing: 1,
                      marginTop: 5,
                      marginBottom: 5,
                    },
                    item.status === 'RETURNED'
                      ? { color: 'blue' }
                      : item.status === 'OVERDUE'
                      ? { color: '#C92E2E' }
                      : { color: '#C45621' },
                  ]}
                >
                  {new Date(item.returnDate).toDateString()}
                </Text>
                {item.status === 'RETURNED' ? null : (
                  <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => handleGenerateQrcode(item.qrCode as string)}
                  >
                    <Text style={styles.touchable_text}>Generate QR Code</Text>
                  </TouchableOpacity>
                )}
              </View>
              {item.status === 'OVERDUE' && (
                <Text style={styles.fine}>P {item.fine}.00</Text>
              )}
              <Text
                style={[
                  styles.status,
                  item.status === 'BORROWED'
                    ? {
                        backgroundColor: '#FCF7ED',
                        color: '#C45621',
                      }
                    : item.status === 'RETURNED'
                    ? {
                        backgroundColor: '#E6FFFA',
                        color: '#355652',
                      }
                    : {
                        backgroundColor: '#EEE5E5',
                        color: '#C92E2E',
                      },
                ]}
              >
                {item.status}
              </Text>
            </View>
          )}
        />
      )}
      {showQrCode ? (
        <View style={styles.qrCodeContainer}>
          <QRCode value={qrCodeValue} size={250} />
          <TouchableOpacity
            style={styles.qrtouchable}
            onPress={() => {
              setQrCodeValue('');
              setShowQrCode(false);
            }}
          >
            <Text style={styles.touchable_text}>Close</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default BorrowedBooksScreen;
