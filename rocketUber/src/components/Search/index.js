import React, {Component} from 'react';
import {Platform} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default class Search extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Para onde?"
        placeholderTextColor="#333"
        onPress={() => {}}
        query={{
          key: 'AIzaSyAXSeUEH35lTVrixSvSBC5s8j-sQQ80Pic',
          language: 'pt',
        }}
        textInputProps={{
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
        fetchDetails
        enablePoweredByContainer={false}
      />
    );
  }
}
