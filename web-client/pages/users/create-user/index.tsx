import Head from 'next/head';
import Footer from '../../../src/components/shared/footer';
import CreateUsersBreadCrumbs from '../../../src/components/usersComponents/breadCrumbs/createUser';
import UsersCreateComponents from '../../../src/components/usersCreateComponents';

interface Props {}

const CreateUserPage: React.FC<Props> = () => {
  return (
    <div>
      <Head>
        <title>New User Page</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      <CreateUsersBreadCrumbs />
      <UsersCreateComponents />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CreateUserPage;
