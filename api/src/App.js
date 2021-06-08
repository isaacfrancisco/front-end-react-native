import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from './services/api';
export default class App extends Component {
  state = {
    errorMessage: null,
  };

  signIn = async () => {
    try {
      const response = await api.post('/auth/authenticate', {
        email: 'isaacfranisco123@gmail.com',
        password: '0123456789',
      });

      const {user, token} = response.data;
      console.log(user, token);

      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ]);
    } catch (response) {
      this.setState({
        errorMessage: response.data.error,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}
        <Button onPress={this.signIn} title="Entrar" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
