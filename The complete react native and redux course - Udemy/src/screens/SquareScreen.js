import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'
const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  const COLOR_INCREMENT = 15
  const COLOR_DECREMENT = -15

  console.log(red, green, blue)

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +15, -15
    console.log('Color and change', color, change)
    switch (color) {
      case 'red':
        const nextRed = red + change
        nextRed < 255 || nextRed > 0 ? setRed(red + change) : null
        console.log('Seting RED', red, change)
        return
      case 'green':
        const nextGreen = green + change
        nextGreen < 255 || nextGreen > 0 ? setGreen(green + change) : null
        console.log('Seting GREEN', green, change)
        return
      case 'blue':
        const nextBlue = blue + change
        nextBlue < 255 || nextBlue > 0 ? setBlue(blue + change) : null
        console.log('Seting BLUE', blue, change)
        return
      default:
        return
    }
  }

  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', COLOR_DECREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', COLOR_DECREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', COLOR_DECREMENT)}
      />
      <View
        style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
