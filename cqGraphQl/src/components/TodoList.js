import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class TodoList extends Component {
  render() {
    return (
      <View>
        <Text>Fazer café</Text>
        <Text>Estudar GraphQl</Text>
      </View>
    );
  }
}