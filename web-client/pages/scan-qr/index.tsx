import Head from 'next/head';
import { useState } from 'react';
import ScanQrComponents from '../../src/components/scanQrComponents';
import ScanQrBreadCrumbs from '../../src/components/scanQrComponents/breadCrumbs';
import Footer from '../../src/components/shared/footer';
import { useReservationScanQrQuery } from '../../src/generated/graphql';

interface Props {}

const ScanQrPage: React.FC<Props> = () => {
  const [qrReserve, setQrReserve] = useState('');
  const { data: reserveData } = useReservationScanQrQuery({
    variables: {
      qrCode: qrReserve,
    },
    skip: qrReserve ? false : true,
  });
  return (
    <div>
      <Head>
        <title>Scan QR CODE Page</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      <ScanQrBreadCrumbs />
      <ScanQrComponents
        qrReserve={qrReserve}
        reserveData={reserveData}
        setQrReserve={setQrReserve}
      />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ScanQrPage;
