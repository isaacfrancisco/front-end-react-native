import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export class Tabs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="bell-g" size={16} style={[styles.icon, styles.active]} />
        <Icon name="bell-g" size={16} style={styles.icon} />
        <View style={styles.main}>
          <Icon name="bell-g" size={16} style={styles.mainIcon} />
        </View>
        <Icon name="bell-g" size={16} style={styles.icon} />
        <Icon name="bell-g" size={16} style={styles.icon} />
      </View>
    );
  }
}

export default Tabs;
