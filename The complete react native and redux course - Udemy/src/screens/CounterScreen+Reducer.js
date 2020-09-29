import React, { useReducer } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const COUNTER_INCREMENT = 1
const COUNTER_DECREMENT = -1
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + COUNTER_INCREMENT
    case DECREMENT:
      return state + COUNTER_DECREMENT
  }
}
const INITIAL_STATE = 0
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const counter = state
  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={() => dispatch({ type: INCREMENT })} />
      <Button title="Decrease" onPress={() => dispatch({ type: DECREMENT })} />
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
