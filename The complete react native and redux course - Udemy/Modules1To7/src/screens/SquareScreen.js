import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const CHANGE_RED = 'CHANGE_RED'
const CHANGE_GREEN = 'CHANGE_GREEN'
const CHANGE_BLUE = 'CHANGE_BLUE'
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
  switch (action.type) {
    case CHANGE_RED:
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }
    case CHANGE_GREEN:
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload }
    case CHANGE_BLUE:
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload }
    default:
      return state
  }
}

const SquareScreen = () => {
  const COLOR_INCREMENT = 15
  const COLOR_DECREMENT = -15
  const INITIAL_STATE = {
    red: 0,
    green: 0,
    blue: 0,
  }
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const { red, green, blue } = state
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Color Picker Screen</Text>
      <View
        style={{ height: 160, width: 160, borderRadius: 80, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      />
      <View style={styles.counterContainer}>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: 'CHANGE_RED', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'CHANGE_RED', payload: COLOR_DECREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: 'CHANGE_GREEN', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'CHANGE_GREEN', payload: COLOR_DECREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: 'CHANGE_BLUE', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'CHANGE_BLUE', payload: COLOR_DECREMENT })}
      />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: '400',
    marginVertical: 10
  },
  container: {
    alignItems: 'center'
  },
  counterContainer: {
    flexDirection: 'row',
    marginTop: 10
  }
})

export default SquareScreen
