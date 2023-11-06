import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from '../Screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearch from '../Screens/DestinationSearch'
import SearchResult from '../Screens/SearchResult'

const Stack=createStackNavigator()

const HomeNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}
        initialRouteName={""}
        >
       <Stack.Screen
       name={"Home"}
       component={HomeScreen}
       />
       <Stack.Screen
       name={"DestinationSearch"}
       component={DestinationSearch}
       />
       <Stack.Screen
       name={"SearchResults"}
       component={SearchResult}
       />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeNavigator