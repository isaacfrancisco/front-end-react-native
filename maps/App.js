import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {
  state = {
    places: [
      {
        id: 1,
        title: 'Casa do café',
        description: 'Café quentinho...',
        latitude: -21.7258111,
        longitude: -43.4024778,
      },
      {
        id: 2,
        title: 'Rockseat',
        description: 'Programação, empreendedorismo e mindset',
        latitude: -21.7221119,
        longitude: -43.4097778,
      },
      {
        id: 3,
        title: 'Casa do José',
        description: 'José, tá em casa?',
        latitude: -21.7298121,
        longitude: -43.4097729,
      },
    ],
  };

  render() {
    const {latitude, longitude} = this.state.places[0];
    return (
      <View style={styles.container}>
        <MapView
          ref={map => (this.mapView = map)}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231,
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showsBuildings={false}>
          {this.state.places.map(place => (
            <MapView.Marker
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
            />
          ))}
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
