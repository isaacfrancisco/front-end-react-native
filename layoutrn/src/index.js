import React from 'react';
import {View, Text} from 'react-native';

import './config/ReactotronConfig';

const App = () => (
  <View style={{flex: 1}}>
    <Text>Hello World</Text>
  </View>
);

export default console.tron.overlay(App);
