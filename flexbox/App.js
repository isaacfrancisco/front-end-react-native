import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#CCC',
    flex: 1,
  },
  box: {
    height: 100,
    flex: 1,
    backgroundColor: '#666',
    borderColor: '#999',
    borderWidth: 5,
    margin: 10,
  },
});
