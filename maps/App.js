import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: -21.7258111,
            longitude: -43.4024778,
            latitudeDelta: 0.0242,
            longitudeDelta: 0.0131,
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showsBuildings={false}></MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
