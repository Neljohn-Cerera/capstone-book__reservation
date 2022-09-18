import Head from 'next/head';
import { useState } from 'react';
import ReservationsComponents from '../../src/components/reservationsComponents';
import ReservationsBreadCrumbs from '../../src/components/reservationsComponents/breadCrumbs';
import Footer from '../../src/components/shared/footer';
import { useReservationsQuery } from '../../src/generated/graphql';

interface Props {}

const ReservationsPage: React.FC<Props> = () => {
  const [page, setPage] = useState(1);
  const perPage: number = 100;
  const [name, setName] = useState('');
  const [status, setStatus] = useState('PENDING');
  const { data, loading } = useReservationsQuery({
    variables: {
      page: 1,
      perPage: 100,
      filterByName: name,
      status: status,
    },
    fetchPolicy: 'cache-and-network',
    // pollInterval: 300000, // 5minutes use this for auto refetch
  });
  let totalNumberOfPages;
  // total number of books
  const total = data?.reservations.length;
  // total number of pages
  if (total!! < perPage) {
    totalNumberOfPages = 1;
  } else {
    totalNumberOfPages = total && total / perPage;
  }
  const handleNext = () => {
    console.log('next page : ', page);
    setPage(page + 1);
  };
  const handlePrevious = () => {
    console.log('prev page : ', page);
    setPage(page - 1);
  };

  return (
    <div>
      <Head>
        <title>Books Reservations</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      <ReservationsBreadCrumbs />
      <ReservationsComponents
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
      />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReservationsPage;
