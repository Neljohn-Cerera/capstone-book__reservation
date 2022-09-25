import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "@rneui/themed";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Main from "./src";
import useCachedResources from "./src/hooks/useCachedResources";

const persistor = persistStore(store);
const client = new ApolloClient({
  uri: "https://book-reservation-v1.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
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
}
