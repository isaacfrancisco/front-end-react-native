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
    backgroundColor: '#CCC',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
  },
  box: {
    height: 100,
    flex: 1,
    minWidth: 100,
    backgroundColor: '#666',
    borderColor: '#999',
    borderWidth: 5,
    margin: 10,
  },
});
