import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.autem maiores doloremque numquam quidem sunt tempore blanditiis maxime laborum voluptate perferendis voluptatem, aspernatur quia.</Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  )
}

export default CovidMessage