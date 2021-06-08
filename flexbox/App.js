import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Voltar</Text>
          <Text>Titulo</Text>
          <Text>Perfil</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#FFF',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
