import React, {Component} from 'react';
import {Text, View, StyleSheet, DeviceEventEmitter} from 'react-native';
import QuickActions from 'react-native-quick-actions';

QuickActions.setShortcutItems([
  {
    type: 'contacts',
    title: 'Listar contatos',
    subtitle: 'Ver amigos',
    icon: Platform.OS === 'ios' ? 'Rocket' : 'rocket',
    userInfo: {
      url: 'app://contacts',
    },
  },
]);

DeviceEventEmitter.addListener('quickActionShortcut', data => {
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
