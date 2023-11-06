import { View, Text,FlatList } from 'react-native'
import React from 'react'
<<<<<<< HEAD
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
=======
import MapView from 'react-native-maps'
import cars from '../../assets/UberAssets/UberAssets/data/cars'

const HomeMap= () => {
  const getImage=(type)=>{
    if(type==='UberX'){
        return require(`../../assets/UberAssets/UberAssets/images/top-UberX.png`)
    }

    if(type==='Comfort'){
        return require(`../../assets/UberAssets/UberAssets/images/top-Comfort.png`)
    }

        return require(`../../assets/UberAssets/UberAssets/images/top-UberXL.png`)
   
}

  return (
    <View style={{height:300,backgroundColor:'#a0abff',justifyContent:'center',alignItems:'center'}}>
  <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      // showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
        {
          cars.map((car)=>(

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
          ))
        }
       
      </MapView>
    </View>
>>>>>>> 5d96259fbfd44e75bb2812a49582a44cb8d4998b
  )
}

export default HomeMap