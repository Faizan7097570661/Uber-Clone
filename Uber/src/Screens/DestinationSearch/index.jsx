import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native';
// import { GooglePlaceData } from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const navigation=useNavigation()
    const [fromText,setFromText]=useState()
    const [destinationText,setDestinationText]=useState()
    const [originPlace,setOriginPlace]=useState()
    const [destinationPlace,setDestinationPlace]=useState()

    useEffect(()=>{
       if(originPlace&&destinationPlace){
        navigation.navigate('SearchResults',{originPlace,destinationPlace})
       }
    },[originPlace,destinationPlace])
  return (
    <SafeAreaView style={{backgroundColor:'black',flex:1}}>
    <View style={styles.container}>
   
       <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel='Current location'
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        //   renderDescription={(data) => data.description || data.vicinity}
        //   predefinedPlaces={[homePlace, workPlace]}
        //
         />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />
        {/* Circle near Origin input */}
           <View style={styles.circle}/> 

        {/* Line between dots */}
           <View style={styles.line}/> 

        {/* square near Destination input */}
           <View style={styles.square}/> 
    <View></View>
    </View>
    </SafeAreaView>
  )
}

export default DestinationSearch