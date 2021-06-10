import React from 'react';
import {View, Text} from 'react-native';

import './config/ReactotronConfig';
import Header from './components/Header';

const App = () => (
  <View style={{flex: 1}}>
    <Header />
  </View>
);

export default console.tron.overlay(App);
