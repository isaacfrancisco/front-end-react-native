import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="arrow-left" size={24} style={styles.icon} />
        <Text style={styles.title}>Profile</Text>
        <Icon name="ellipsis-h" size={24} style={styles.icon} />
      </View>
    );
  }
}
