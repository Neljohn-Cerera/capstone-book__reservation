import Head from 'next/head';
import Footer from '../../src/components/shared/footer';

interface Props {}

const GuideLinesPage: React.FC<Props> = () => {
  return (
    <div>
      <Head>
        <title>Guide Lines Page</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      <p>Guidelines</p>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GuideLinesPage;
