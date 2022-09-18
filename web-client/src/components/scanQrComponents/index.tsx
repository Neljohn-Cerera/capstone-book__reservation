import { Dispatch, SetStateAction, useState } from 'react';
import { ReservationScanQrQuery } from '../../generated/graphql';
import ReserveResult from './scanReserve/result';
import dynamic from 'next/dynamic';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });
// import ScanReturn from './scanReturn';

interface Props {
  qrReserve: string;
  reserveData: ReservationScanQrQuery | undefined;
  setQrReserve: Dispatch<SetStateAction<string>>;
}

const ScanQrComponents: React.FC<Props> = ({
  qrReserve,
  reserveData,
  setQrReserve,
}) => {
  // const [returnResult, setReturnResult] = useState('');
  const [openScanReserve, setOpenScanReserve] = useState(false);
  // const [openScanReturn, setOpenScanReturn] = useState(false);

  // Scan Reserve
  const handleOpenReserveScan = () => {
    setOpenScanReserve(true);
  };
  const handleCloseReserveScan = () => {
    setOpenScanReserve(false);
  };
  // Scan Return
  // const handleOpenReturnScan = () => {
  //   setOpenScanReturn(true);
  // };
  // const handleCloseReturnScan = () => {
  //   setOpenScanReturn(false);
  // };
  // QR reader function
  // RESERVE RESULT
  const handleScanReserveResult = (result: any) => {
    console.log('result : ', result);
    if (result) {
      setQrReserve(result);
      setOpenScanReserve(false);
    }
  };
  // RETURN RESULT
  // const handleScanReturnResult = (result: any) => {
  //   if (result) {
  //     setReturnResult(result);
  //     setOpenScanReturn(false);
  //   }
  // };
  const handleError = (err: any) => {
    console.error(err);
  };
  return (
    <div className="w-full flex flex-col">
      <div>
        <button
          className="p-6 mt-4 bg-yellow-500 text-white text-lg font-bold hover:bg-blue-900 rounded-md"
          onClick={handleOpenReserveScan}
        >
          Scan Reserve QR Code
        </button>
        {/* <button
          className="p-6 mt-4 bg-green-500 text-white text-lg font-bold hover:bg-blue-900 rounded-md ml-4"
          onClick={handleOpenReturnScan}
        >
          Scan Return QR Code
        </button> */}
        {/* Reserve Scan Qr */}
        {openScanReserve ? (
          <div className="absolute top-0 left-0 bg-gray-900 bg-opacity-70 border border-gray-700 w-full h-full z-50">
            <div className="absolute top-16 left-16 bg-transparent text-white">
              <p className="font-bold text-xl mb-2">Scan</p>
              <p className="font-bold text-5xl mb-2">RESERVE</p>
              <p className="font-bold text-5xl">QR Code</p>
            </div>
            <QrReader
              onError={handleError}
              onScan={handleScanReserveResult}
              className="w-2/4 ml-auto mr-auto"
            />

            <button
              onClick={handleCloseReserveScan}
              className="absolute top-16 right-32 p-10 text-lg font-bold bg-yellow-500 text-white hover:bg-blue-500"
            >
              Close
            </button>
          </div>
        ) : null}
        {/* Return Scan Qr */}
        {/* {openScanReturn ? (
          <ScanReturn
            handleError={handleError}
            handleScan={handleScanReturnResult}
            handleCloseReturnScan={handleCloseReturnScan}
          />
        ) : null} */}
      </div>

      <fieldset className="w-full mt-2 p-4 bg-blue-100 text-blue-400 border border-blue-300 rounded">
        <legend className="font-bold text-lg">Result</legend>
        {reserveData ? (
          <ReserveResult qrReserve={qrReserve} reserveData={reserveData} />
        ) : (
          <p>No Data</p>
        )}

        {/* <p>QR Code return: {returnResult}</p> */}
      </fieldset>
    </div>
  );
};

export default ScanQrComponents;
