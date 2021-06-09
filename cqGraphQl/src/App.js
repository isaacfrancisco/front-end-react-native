import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ApolloProvider} from 'react-apollo';

import apolloClient from './services/apollo';
class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <View>
          <Text>Hello World</Text>
        </View>
      </ApolloProvider>
    );
  }
}

export default App;
