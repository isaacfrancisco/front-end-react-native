import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Icon name="ios-more" size={24} style={styles.icon} />
        <Text style={styles.title}>Profile</Text>
        <Icon name="ios-more" size={24} style={styles.icon} />
      </View>
    );
  }
}
