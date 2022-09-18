import Head from 'next/head';
import CreateBooksBreadCrumbs from '../../../src/components/booksComponents/breadCrumbs/createBook';
import BooksCreateComponents from '../../../src/components/booksCreateComponents';
import Footer from '../../../src/components/shared/footer';
interface Props {}

const CreateBookPage: React.FC<Props> = () => {
  return (
    <div>
      <Head>
        <title>New Books Page</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      <CreateBooksBreadCrumbs />
      <BooksCreateComponents />
      <Footer />
    </div>
  );
};

export default CreateBookPage;
