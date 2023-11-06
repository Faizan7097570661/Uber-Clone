import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import HomeMap from '../../components/Homemap'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'

const HomeScreen = () => {
  return (
    <View>
      <View style={{height:Dimensions.get('window').height-400}}>
      <HomeMap/>
      </View>
      {/* Covid message */}
      <CovidMessage/>
      {/* Bottom Component */}
      <HomeSearch/>
    </View>
  )
}

export default HomeScreen