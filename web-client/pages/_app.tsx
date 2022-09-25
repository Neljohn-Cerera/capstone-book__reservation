import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import store from '../src/redux/store';
import MainLayout from '../src/layouts/mainLayout';

const persistor = persistStore(store);

const client = new ApolloClient({
  uri: 'https://book-reservation-v1.herokuapp.com/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
  // devtools true if development and false for production
  connectToDevTools: true,
});
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
};
export default MyApp;
