import { View, Text } from 'react-native'
import React from 'react'
import HomeMap from '../../components/Homemap'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'

const HomeScreen = () => {
  return (
    <View>
      <HomeMap/>
      {/* Covid message */}
      <CovidMessage/>
      {/* Bottom Component */}
      <HomeSearch/>
    </View>
  )
}

export default HomeScreen