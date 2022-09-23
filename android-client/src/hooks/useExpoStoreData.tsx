import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

interface Props {
  key: any;
}

const useExpoStoreData: React.FC<Props> = ({ key }): any => {
  const [state, setState] = useState();
  useEffect(() => {
    async function fetchToken() {
      let result = await SecureStore.getItemAsync(key);
      if (result) {
        setState(result as any);
      } else {
        setState(undefined);
      }
    }
    fetchToken();
  }, []);
  return state;
};

export default useExpoStoreData;
