import React from 'react';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from '@apollo/client';
import store from './store';
import { Provider } from 'react-redux';
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { setContext } from 'apollo-link-context';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
  credentials: 'same-origin',
});
const authLink = setContext(()=>{
  const token = localStorage.getItem('userToken');
  return {
    headers : {
      Authorization : token ? `Bearer ${JSON.parse(token)}` : ''
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export default (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ApolloProvider>
);
