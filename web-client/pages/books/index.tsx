import React from 'react';
import Head from 'next/head';
import BooksComponents from '../../src/components/booksComponents';
import BooksBreadCrumbs from '../../src/components/booksComponents/breadCrumbs';
import Footer from '../../src/components/shared/footer';
import { useGetAllBooksGroupByTitleQuery } from '../../src/generated/graphql';

interface Props {}
const BooksPage: React.FC<Props> = () => {
  // states
  const [page, setPage] = React.useState(1);
  const perPage: number = 10;
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('AVAILABLE');
  const { data, loading } = useGetAllBooksGroupByTitleQuery({
    variables: {
      page,
      perPage,
      filterByTitle: title,
      status,
    },
    fetchPolicy: 'cache-and-network',
  });
  let totalNumberOfPages;
  // total number of books
  const total = data?.getAllBooksGroupByTitle?.books?.length;
  // total number of pages
  if (total!! < perPage) {
    totalNumberOfPages = 1;
  } else {
    totalNumberOfPages = total && total / perPage;
  }
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrevious = () => {
    setPage(page - 1);
  };

  return (
    <div>
      <Head>
        <title>Books Page</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      {/* BreadCrumbs */}
      <BooksBreadCrumbs />
      <BooksComponents
        data={data}
        loading={loading}
        page={page}
        total={total}
        setTitle={setTitle}
        setStatus={setStatus}
        status={status}
        totalNumberOfPages={totalNumberOfPages}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BooksPage;
