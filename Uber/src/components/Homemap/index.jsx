import { View, Text,FlatList } from 'react-native'
import React from 'react'

import  { useState, useEffect } from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const HomeMap= () => {
  const [cars, setCars] = useState([]);
  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/UberAssets/UberAssets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/UberAssets/UberAssets/images/top-Comfort.png');
    }
    return require('../../assets/UberAssets/UberAssets/images/top-UberXL.png');
  };

  return (
    <MapView
    style={{width: '100%', height: '100%'}}
    // provider={PROVIDER_GOOGLE}
    showsUserLocation={true}
    initialRegion={{
      latitude: 28.450627,
      longitude: -16.263045,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121,
    }}>
    {cars.map((car) => (
      <Marker
        key={car.id}
        coordinate={{latitude: car.latitude, longitude: car.longitude}}
      >
        <Image
          style={{
            width: 70,
            height: 70,
            resizeMode: 'contain',
            transform: [{
              rotate: `${car.heading}deg`
            }]
          }}
          source={getImage(car.type)}
        />
      </Marker>
     ))}
  </MapView>
  )}
export default HomeMap;