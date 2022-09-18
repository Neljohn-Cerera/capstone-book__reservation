import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'react-native-elements';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Main from './src';

const persistor = persistStore(store);
const client = new ApolloClient({
  uri: 'http://192.168.43.27:5001/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <ThemeProvider>
            <ApolloProvider client={client}>
              <Main />
            </ApolloProvider>
          </ThemeProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
