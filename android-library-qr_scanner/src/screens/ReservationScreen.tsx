import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { useReservationScanQrQuery } from '../generated/graphql';
import ReservationComponent from '../components/reservation';

export default function ReservationScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState<boolean>(false);
  const [qrCode, setQrCode] = useState<string>('');
  const [type, setType] = useState<string>('');
  const { data, loading } = useReservationScanQrQuery({
    variables: {
      qrCode: qrCode,
    },
    skip: qrCode === '' ? true : false,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
    const { type, data } = scanningResult;
    setScanned(true);
    setQrCode(data);
    setType(type);
  };
  return (
    <View style={styles.container}>
      {isScannerOpen ? (
        <Camera
          style={styles.camera}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
        ></Camera>
      ) : null}
      {scanned && (
        <Button
          title="Scan Again"
          onPress={() => {
            setIsScannerOpen(true);
            setScanned(false);
          }}
        />
      )}
      {loading && (
        <ActivityIndicator
          style={{ marginTop: 10 }}
          size="large"
          color="#0000ff"
        />
      )}
      {data?.reservationScanQr.isSucess ? (
        <ReservationComponent data={data} />
      ) : (
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: '700' }}>
            Reservation Result :{' '}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: '600' }}>
            {!isScannerOpen ? null : data?.reservationScanQr.message}
          </Text>
        </View>
      )}
      <Button
        title={`${
          isScannerOpen
            ? 'Close Reservation Scanner'
            : 'Open Reservation Scanner'
        }`}
        color={`${isScannerOpen ? 'red' : 'green'}`}
        onPress={() => {
          setIsScannerOpen((prev) => !prev);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
