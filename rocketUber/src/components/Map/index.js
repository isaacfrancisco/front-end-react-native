import React, {Component, Fragment} from 'react';
import {View, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Search from '../Search';
import Directions from '../Directions';
export default class Map extends Component {
  state = {
    region: null,
    destination: null,
  };
  async componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        const {coords} = position;
        getGeoCoderAddress(coords);
        console.log(coords);
        this.setState({
          ...state,
          region: {
            ...state.region,
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
        });
        console.log(this.state.region);
      }, // sucesso
      () => {}, // erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  }

  handleLocationSelected = (data, {geometry}) => {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      },
    });
  };

  render() {
    const {region, destination} = this.state;
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          region={region}
          showsUserLocation
          loadingEnabled>
          {destination && (
            <Directions
              origin={region}
              destination={destination}
              onReady={() => {}}
            />
          )}
        </MapView>
        <Search onLocationSelected={this.handleLocationSelected} />
      </View>
    );
  }
}
