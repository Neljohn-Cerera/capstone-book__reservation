import React from 'react';
import Head from 'next/head';
import UsersComponents from '../../src/components/usersComponents';
import Footer from '../../src/components/shared/footer';
import UsersBreadCrumbs from '../../src/components/usersComponents/breadCrumbs';
import { useGetAllUserAccountsQuery } from '../../src/generated/graphql';
interface Props {}

const UsersPage: React.FC<Props> = () => {
  const [page, setPage] = React.useState(1);
  const perPage: number = 100;
  const [name, setName] = React.useState('');
  const { data, loading } = useGetAllUserAccountsQuery({
    variables: {
      page: page,
      perPage: perPage,
      filterByFnameMnameLname: name,
    },
  });
  let totalNumberOfPages;
  // total number of books
  const total: number | undefined = parseInt(
    data?.getAllUserAccounts.count as any
  );

  // total number of pages
  if (total < perPage) {
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
        <title>Users Page</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      {/* BreadCrumbs */}
      <UsersBreadCrumbs />
      {/* Components */}
      <UsersComponents
        data={data}
        loading={loading}
        page={page}
        total={total}
        setName={setName}
        totalNumberOfPages={totalNumberOfPages}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UsersPage;
