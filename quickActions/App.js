import React, {Component} from 'react';
import {Text, View, StyleSheet, DeviceEventEmitter} from 'react-native';
import QuickActions from 'react-native-quick-actions';

QuickActions.setShortcutItems([
  {
    type: 'contacts',
    title: 'Listar contatos',
    subtitle: 'Ver amigos',
    icon: Platform.OS === 'ios' ? 'Icon' : 'icon',
    userInfo: {
      url: 'app://contacts',
    },
  },
]);

DeviceEventEmitter.addListener('quickActionShortcut', data => {
  console.log(data);
});

QuickActions.popInitialAction().then(data => {
  console.log(data);
});
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
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
