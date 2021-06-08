import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from './services/api';
export default class App extends Component {
  state = {
    loggedInUser: null,
    errorMessage: null,
  };

  signIn = async () => {
    try {
      const response = await api.post('/auth/authenticate', {
        email: 'isaacfranisco1@gmail.com',
        password: '0123456789',
      });

      const {user, token} = response.data;

      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ]);

      this.setState({
        loggedInUser: user.name,
      });

      Alert.alert('Login com sucesso!');
    } catch (response) {
      this.setState({
        errorMessage: response.data.error,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.loggedInUser && <Text>{this.state.loggedInUser}</Text>}
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
