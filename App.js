import React from 'react';

// import {HttpLink} from 'apollo-link-http';
// import {ApolloProvider} from 'react-apollo';
// import {ApolloClient} from 'apollo-client';
// import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Navigation from './src/navigation/Navigation';


const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}


