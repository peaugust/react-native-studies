import React, { useState } from 'react'
import { View, Button, Text, FlatList, StyleSheet } from 'react-native'

const ColorScreen = () => {
  const [colors, setColors] = useState([])
  return (
    <View style={styles.container}>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
      />
      <FlatList
        key={'FlatList'}
        keyExtractor={(item) => item}
        data={colors}
        numColumns={3}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item, margin: 5 }}></View>
        }}
      />
    </View>
  )
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})

export default ColorScreen
