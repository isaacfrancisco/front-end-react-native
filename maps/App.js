import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
  state = {
    places: [
      {
        id: 1,
        title: 'Casa do café',
        description: 'Café quentinho...',
        latitude: -27.2106710,
        longitude: -49.6362700,
      },
      {
        id: 2,
        title: 'Rockseat',
        description: 'Programação, empreendedorismo e mindset',
        latitude: -27.2006710,
        longitude: -49.636270, 
      },
      {
        id: 3,
        title: 'Casa do José',
        description: 'José, tá em casa?',
        latitude: -27.2006710,
        longitude: -49.6262700,
      }
    ],
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.mapView.animateToCoordinate({
  //       latitude: -27.2606710,
  //       longitude: -49.6962700,
  //     }, 2000);
  //   }, 5000);
  // }

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  };

  render(){
    const { latitude, longitude } = this.state.places[0];

    return (
      <View style={styles.container} >
        <MapView provider={PROVIDER_GOOGLE}
          ref = { map => this.mapView = map }
          //Onde o mapa vai estar posicionado quando for iniciado.
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231,
          }}
          style = {styles.mapView}
          rotateEnabled = {false}
          scrollEnabled = {false}
          zoomEnabled = {false}
          showsPointsOfInterest = {false}
          showsBuildings = {false}
          onMapReady={this._mapReady}
        >
          { this.state.places.map(place => (
            <MapView.Marker 
              ref = { mark => place.mark = mark }
              title = {place.title}
              description = {place.description}
              key = {place.id}
              coordinate = {{
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
          pagingEnabled
          onMomentumScrollEnd = {e => {
            const scrolled = e.nativeEvent.contentOffset.x;

            const place = (scrolled > 0)
              ? scrolled / Dimensions.get('window').width
              : 0;

              const { latitude, longitude, mark } = this.state.places[place];

              this.mapView.animateToCoordinate({
                latitude,
                longitude
              }, 1000);

              setTimeout(()  => {
                mark.showCallout();
              }, 500);
          }}
        > 
          { this.state.places.map(place => ( 
            <View key={place.id}  style={styles.place} >
              <Text > {place.title} </Text>
              <Text > {place.description } </Text>
            </View>
          ))}
        
        </ScrollView>
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

  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});