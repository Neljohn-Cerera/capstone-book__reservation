import Head from 'next/head';
import React, { useState } from 'react';
import BorrowTransactionsComponents from '../../src/components/borrowTransactionsComponents';
import BorrowTransactionsBreadCrumbs from '../../src/components/borrowTransactionsComponents/breadCrumbs';
import Footer from '../../src/components/shared/footer';
import { useBorrowTransactionQuery } from '../../src/generated/graphql';

interface Props {}

const BorrowTransactionsPage: React.FC<Props> = () => {
  const [page, setPage] = useState(1);
  const perPage: number = 100;
  const [name, setName] = useState('');
  const [status, setStatus] = useState('BORROWED');
  const { data, loading, networkStatus } = useBorrowTransactionQuery({
    variables: {
      page: page,
      perPage: perPage,
      filterByNameOrByTitle: name,
      status,
    },
    fetchPolicy: 'cache-and-network',
  });
  let totalNumberOfPages;
  // total number of books
  const total = data?.borrowTransaction?.length;
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
        <title>Borrow Transactions Records</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      <BorrowTransactionsBreadCrumbs />
      <BorrowTransactionsComponents
        data={data}
        loading={loading}
        page={page}
        total={total}
        setName={setName}
        setStatus={setStatus}
        status={status}
        totalNumberOfPages={totalNumberOfPages}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        networkStatus={networkStatus}
      />
      {/* <p>networkStatus : {networkStatus}</p> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BorrowTransactionsPage;
