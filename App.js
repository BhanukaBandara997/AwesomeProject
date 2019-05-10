/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/bg-img.jpg';

export default class App extends Component {

  // State variable for the text input
  state = {
    places: []
  }

  placeAddedHander = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({ 
          key: Math.random(), 
          name: placeName,
          image: placeImage
        })
      };
    });
  };

  placeDeleteHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHander} />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeleteHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 25
  }
});
