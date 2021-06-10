import React from 'react';
import {View, Text} from 'react-native';

import './config/ReactotronConfig';
import Header from './components/Header';
import SubHeader from './components/SubHeader';

const App = () => (
  <View style={{flex: 1}}>
    <Header />
    <SubHeader />
  </View>
);

export default console.tron.overlay(App);
