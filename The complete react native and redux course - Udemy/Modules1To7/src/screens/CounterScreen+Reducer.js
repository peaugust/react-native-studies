import React, { useReducer } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const COUNTER_INCREMENT = 1
const COUNTER_DECREMENT = -1
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload }
    case DECREMENT:
      return { ...state, count: state.count + action.payload }
    default:
      return state
  }
}
const INITIAL_STATE = { count: 0 }
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: INCREMENT, payload: COUNTER_INCREMENT })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: DECREMENT, payload: COUNTER_DECREMENT })
        }}
      />
      <Text>Current Count: {state.count} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
  },
})

export default CounterScreen
