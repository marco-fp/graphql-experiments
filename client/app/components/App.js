import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ChannelsList from './ChannelsList';
import apolloClient from '../api/ApolloClient';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div>
          <h1>GraphQL Experiments</h1>
          <ChannelsList />
        </div>
      </ApolloProvider>
    );
  }
};

export default App;
