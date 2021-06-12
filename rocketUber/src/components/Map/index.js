import React, {Component, Fragment} from 'react';
import {View, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Search from '../Search';

export default class Map extends Component {
  state = {
    region: null,
  };
  async componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        const {coords} = position;
        getGeoCoderAddress(coords);

        this.setState({
          ...state,
          region: {
            ...state.region,
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
        });
      }, // sucesso
      () => {}, // erro
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  }

  render() {
    const {region} = this.state;
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          region={region}
          showsUserLocation
          loadingEnabled
        />
        <Search />
      </View>
    );
  }
}
