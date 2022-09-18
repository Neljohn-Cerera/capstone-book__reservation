import React, { useState } from 'react';
import { styles } from './styles';
import { TouchableOpacity, View, Text, FlatList, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import { useBorrowTransactionQuery } from '../../generated/graphql';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import QRCode from 'react-native-qrcode-svg';
import { FontAwesome } from '@expo/vector-icons';

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
    label: 'Overdue',
    value: 'OVERDUE',
    size: 18,
  },
];

const RecordsScreen: React.FC = () => {
  const { background } = useTheme();
  const [status, setStatus] = useState<RadioButtonProps[]>(reservationStatus);
  const [showQrCode, setShowQrCode] = useState<boolean>(false);
  const [qrCodeValue, setQrCodeValue] = useState<string>('');
  const [stats, setStats] = useState<string>('BORROWED');
  const { data, loading } = useBorrowTransactionQuery({
    variables: {
      page: 1,
      perPage: 100,
      filterByNameOrByTitle: '',
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
      <Text style={styles.title}>All Borrowers Records</Text>
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
          data={data?.borrowTransaction}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.container,
                { backgroundColor: background.flatlistBackground },
              ]}
            >
              <FontAwesome
                style={{ marginRight: 10, marginLeft: 10 }}
                name="user-circle"
                size={60}
                color="gray"
              />
              <View>
                <Text
                  style={styles.fullName}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {`${item.firstName} ${item.middleName} ${item.lastName}`}
                </Text>
                <View style={styles.horizontal} />
                <Text
                  style={styles.bookTitle}
                  ellipsizeMode="tail"
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 10, marginLeft: 10 }}>
                  {item.accountNumber}
                </Text>
                <Text
                  style={[
                    {
                      fontSize: 10,
                      letterSpacing: 1,
                      marginTop: 5,
                      marginLeft: 10,
                    },
                    item.status === 'OVERDUE'
                      ? { color: '#C92E2E' }
                      : { color: '#C45621' },
                  ]}
                >
                  {new Date(item.returnDate).toDateString()}
                </Text>
                <Text
                  style={[
                    {
                      fontSize: 10,
                      marginLeft: 10,
                    },
                    item.status === 'OVERDUE'
                      ? { color: '#C92E2E' }
                      : { color: '#C45621' },
                  ]}
                >
                  {`${item.status === 'BORROWED' ? 'remaining ' : 'overdue '}`}
                  days : {item.remainingDays}
                </Text>
              </View>

              <Text
                style={[
                  styles.status,
                  item.status === 'BORROWED'
                    ? {
                        backgroundColor: '#FCF7ED',
                        color: '#C45621',
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

export default RecordsScreen;
