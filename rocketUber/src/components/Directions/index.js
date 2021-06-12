import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyAUxkfej22h-qATKFI3DY7M13S60A80Ams"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
