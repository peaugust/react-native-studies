import React from 'react'
import { View, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewOne}></View>
      <View style={styles.viewTwo}></View>
      <View style={styles.viewThree}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  viewOne: {
    backgroundColor: 'black',
    height: 50,
    width: 70,
  },
  viewTwo: {
    backgroundColor: 'red',
    height: 50,
    width: 70,
    top: 50
  },
  viewThree: {
    backgroundColor: 'blue',
    height: 50,
    width: 70,
  }
})

export default BoxScreen
