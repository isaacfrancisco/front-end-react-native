import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ApolloProvider} from 'react-apollo';

import apolloClient from './services/apollo';

import TodoList from './components/TodoList';
class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <View>
          <TodoList />
        </View>
      </ApolloProvider>
    );
  }
}

export default App;
