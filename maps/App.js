import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {
  state = {
    latitude: -21.7258111,
    longitude: -43.4024778,
  };
  render() {
    const {latitude, longitude} = this.state;
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0242,
            longitudeDelta: 0.0131,
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showsBuildings={false}>
          <MapView.Marker
            coordinate={{
              latitude,
              longitude,
            }}
          />
        </MapView>
        <ScrollView
          style={styles.placesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          <View style={styles.place}></View>
          <View style={styles.place}></View>
        </ScrollView>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');

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
  placesContainer: {
    width: '100%',
    maxHeight: 200,
  },
  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
  },
});
