/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen/>
    </>
  );
}

export default App;
