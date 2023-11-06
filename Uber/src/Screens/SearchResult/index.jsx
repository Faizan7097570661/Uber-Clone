<<<<<<< HEAD
import { View, Text, Dimensions } from 'react-native'
=======
import { View, Text ,Dimensions} from 'react-native'
>>>>>>> 5d96259fbfd44e75bb2812a49582a44cb8d4998b
import React from 'react'
import UberTypes from '../../components/uberTypes'
<<<<<<< HEAD
import { useRoute } from '@react-navigation/native'
=======
>>>>>>> 5d96259fbfd44e75bb2812a49582a44cb8d4998b
import RouteMap from '../../components/RouteMap'

const SearchResult = () => {
  const route=useRoute()
  const {destinationPlace,originPlace}=route.params
  return (
<<<<<<< HEAD
    <View style={{display:'flex',justifyContent:'space-between'}}>
    <View style={{height:Dimensions.get('window').height-400}}>
    <RouteMap origin={origin} destination={destination}/>
    </View>
    <View style={{height:400}}>
=======
    <View style={{display:'flex'}}>
<View style={{height:Dimensions.get('window').height-400}}>
    <RouteMap/>
</View>
<View style={{height:400}}>
>>>>>>> 5d96259fbfd44e75bb2812a49582a44cb8d4998b
    <UberTypes/>
</View>
    </View>
    </View>
  )
}

export default SearchResult