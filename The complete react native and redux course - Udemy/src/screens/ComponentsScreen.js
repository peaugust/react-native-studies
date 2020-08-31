import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ComponentScreen = () => {
  const myName = 'Pedro Freddi'
  return (
    <View>
      <Text style={styles.titleStyle}>Getting started with react native!</Text>
      <Text style={styles.subtitleStyle}>My name is {myName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45,
  },
  subtitleStyle: {
    fontSize: 20,
  },
})

export default ComponentScreen
