import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import Map from './components/Map';

export default class App extends Component {
  render() {
    return <Map />;
  }
}

const styles = StyleSheet.create({});
