import dynamic from 'next/dynamic';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });
interface indexProps {
  handleError: (err: any) => void;
  handleScan: (result: any) => void;
  handleCloseReserveScan: () => void;
}

const ScanReserve: React.FC<indexProps> = ({
  handleError,
  handleScan,
  handleCloseReserveScan,
}) => {
  return (
    <div className="absolute top-0 left-0 bg-gray-900 bg-opacity-70 border border-gray-700 w-full h-full z-50">
      <div className="absolute top-16 left-16 bg-transparent text-white">
        <p className="font-bold text-xl mb-2">Scan</p>
        <p className="font-bold text-5xl mb-2">RESERVE</p>
        <p className="font-bold text-5xl">QR Code</p>
      </div>
      <QrReader
        onError={handleError}
        onScan={handleScan}
        className="w-2/4 ml-auto mr-auto"
      />

      <button
        onClick={handleCloseReserveScan}
        className="absolute top-16 right-32 p-10 text-lg font-bold bg-yellow-500 text-white hover:bg-blue-500"
      >
        Close
      </button>
    </div>
  );
};

export default ScanReserve;
