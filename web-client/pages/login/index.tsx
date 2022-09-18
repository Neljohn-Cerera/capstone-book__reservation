import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMeQuery } from '../../src/generated/graphql';

interface Props {}

const LoginPage: React.FC<Props> = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    if (data?.me) {
      router.back();
    }
  }, [loading, data, router]);
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Saint Peter Colloge of Toril Library"
        />
        <link rel="icon" href="/spct.ico" />
      </Head>
      <p>Login</p>
      {/* Footer */}
    </div>
  );
};

export default LoginPage;
