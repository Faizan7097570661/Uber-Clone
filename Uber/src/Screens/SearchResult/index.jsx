import { View, Text, Dimensions } from 'react-native'
import { View, Text ,Dimensions} from 'react-native'
import React from 'react'
import UberTypes from '../../components/uberTypes'
import { useRoute } from '@react-navigation/native'
import RouteMap from '../../components/RouteMap'

const SearchResult = () => {
  const route=useRoute()
  const {destinationPlace,originPlace}=route.params
  return (
    <View style={{display:'flex',justifyContent:'space-between'}}>
    <View style={{height:Dimensions.get('window').height-400}}>
    <RouteMap origin={origin} destination={destination}/>
    </View>
    <View style={{height:400}}>
    <View style={{display:'flex'}}>
<View style={{height:Dimensions.get('window').height-400}}>
    <RouteMap/>
</View>
<View style={{height:400}}>
    <UberTypes/>
</View>
    </View>
    </View>
    </View>
  )
}

export default SearchResult