import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text>Current Count: {counter} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
})

export default CounterScreen
