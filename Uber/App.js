/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import DestinationSearch from './src/Screens/DestinationSearch';
import SearchResult from './src/Screens/SearchResult';

function App() {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <StatusBar barStyle="dark-content" />
      {/* <HomeScreen /> */}
      {/* <DestinationSearch /> */}
      <SearchResult/>
    </View>
  );
}

export default App;
