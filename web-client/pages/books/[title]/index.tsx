import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import TitleBooksBreadCrumbs from '../../../src/components/booksComponents/breadCrumbs/titleBooks';
import BooksTitlesComponents from '../../../src/components/booksTitleComponents';
import Footer from '../../../src/components/shared/footer';
import { useGetAllBooksQuery } from '../../../src/generated/graphql';

interface Props {}

const BookTitlePage: React.FC<Props> = () => {
  const [page, setPage] = React.useState(1);
  const perPage: number = 100;
  const router = useRouter();
  const { data, loading } = useGetAllBooksQuery({
    variables: {
      page,
      perPage,
      filterByTitle: router.query.title as string,
    },
  });
  let totalNumberOfPages;
  // total number of books
  const total = data?.getAllBooks?.books?.length;
  // total number of pages
  if (total!! < perPage) {
    totalNumberOfPages = 1;
  } else {
    totalNumberOfPages = total && total / perPage;
  }
  // Next Page
  const handleNext = () => {
    console.log('next page : ', page);
    setPage(page + 1);
  };
  // Previous Page
  const handlePrevious = () => {
    console.log('prev page : ', page);
    setPage(page - 1);
  };

  return (
    <div>
      <Head>
        <title>Book Titles Records</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      <TitleBooksBreadCrumbs />
      <BooksTitlesComponents
        data={data}
        loading={loading}
        page={page}
        total={total}
        totalNumberOfPages={totalNumberOfPages}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      {/* <p>Tiltles</p>
      <pre>{JSON.stringify(router, null, 2)}</pre> */}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BookTitlePage;
