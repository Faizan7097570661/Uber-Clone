import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { GooglePlaceData } from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
    const [fromText,setFromText]=useState()
    const [destinationText,setDestinationText]=useState()
    const [originPlace,setOriginPlace]=useState()
    const [destinationPlace,setDestinationPlace]=useState()

    useEffect(()=>{
       if(originPlace&&destinationPlace){
        
       }
    },[originPlace,destinationPlace])
  return (
    <SafeAreaView style={{backgroundColor:'black',flex:1}}>
    <View style={styles.container}>
      {/* <TextInput placeholder='From' style={styles.textInput} value={fromText} onChangeText={setFromText}/>
      <TextInput placeholder='Where to?' style={styles.textInput} value={destinationText} onChangeText={setDestinationText}/>
      <GooglePlacesAutocomplete
      styles={{textInput:styles.textInput}}
      placeholder='Where to?'
      onPress={(data:GooglePlaceData, details:GooglePlaceDetail|null=null) => {
        // setDestinationPlace(value:{data,details});
        console.log(data, details);
      }}
      fetchDetails
      query={{
        // key: 'AIzaSyDFhFUaYpyAjNE4Eq-sWCGWjrr6kyGnhbQ',
        key:'AIzaSyB1KoK7KQe0YzwScTNjC7lHRSi7my056bk',
        language: 'en',
      }}
    /> */}
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
        //   renderRow={(data) => <PlaceRow data={data} />}
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
        //   renderRow={(data) => <PlaceRow data={data} />}
        />

    </View>
    </SafeAreaView>
  )
}

export default DestinationSearch