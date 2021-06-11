import React from 'react';
import {View, Text} from 'react-native';

import './config/ReactotronConfig';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import Tabs from './components/Tabs';

const App = () => (
  <View style={{flex: 1}}>
    <Header />
    <SubHeader />
    <ProductList />
    <Tabs />
  </View>
);

export default console.tron.overlay(App);
