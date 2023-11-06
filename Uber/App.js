/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {PermissionsAndroid, Platform, StatusBar, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import HomeScreen from './src/Screens/HomeScreen';
import DestinationSearch from './src/Screens/DestinationSearch';
import SearchResult from './src/Screens/SearchResult';
navigator.geolocation=require("react-native-community/geolocation")
function App() {
  const androidPermission=async()=>{
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Camera Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }
 
  useEffect(()=>{
if(Platform.OS==='android'){
  androidPermission()
}else{
  //IOS
  Geolocation.requestAuthorization();
}
  },[])

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
      <DestinationSearch />
      <SearchResult/>
    </View>
  );
}

export default App;
