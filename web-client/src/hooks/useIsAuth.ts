import { useMeQuery } from '../generated/graphql';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useIsAuth = () => {
  const { data, loading } = useMeQuery({
    fetchPolicy: 'cache-and-network',
  });
  const router = useRouter();
  useEffect(() => {
    if (!loading && !data?.me) {
      router.replace('/login');
    }
  }, [loading, data, router]);
};
