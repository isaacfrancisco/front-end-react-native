import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from './services/api';
export default class App extends Component {
  state = {
    loggedInUser: null,
    errorMessage: null,
    projects: [],
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
        loggedInUser: user,
      });

      Alert.alert('Login com sucesso!');
    } catch (response) {
      this.setState({
        errorMessage: response.data.error,
      });
    }
  };

  getProjectList = async () => {
    try {
      const response = await api.get('/projects');

      const {projects} = response.data;

      this.setState({
        projects: projects,
      });
    } catch (response) {
      this.setState({
        errorMessage: response.data.error,
      });
    }
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@CodeApi:token');
    const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user'));

    if (token && user) {
      this.setState({
        loggedInUser: user,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.loggedInUser && (
          <Text>{this.state.loggedInUser.name}</Text>
        )}
        {!!this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}

        {this.state.loggedInUser ? (
          <Button onPress={this.getProjectList} title="Carregar Projetos" />
        ) : (
          <Button onPress={this.signIn} title="Entrar" />
        )}

        {this.state.projects.map(project => (
          <View key={project._id} style={{marginTop: 15}}>
            <Text style={{fontWeight: 'bold'}}>{project.title}</Text>
            <Text>{project.description}</Text>
          </View>
        ))}
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
