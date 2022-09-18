import Head from 'next/head';
import SettingsComponents from '../../src/components/settings';
import Footer from '../../src/components/shared/footer';

interface Props {}

const SettingsPage: React.FC<Props> = () => {
  return (
    <div>
      <Head>
        <title>Settings Page</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      <SettingsComponents />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SettingsPage;
