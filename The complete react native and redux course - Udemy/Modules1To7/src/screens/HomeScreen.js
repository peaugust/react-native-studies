import React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>React Native - Udemy Course</Text>
      <Button onPress={() => navigation.navigate('Component')} title="Go to Components Demo" />
      <Button onPress={() => navigation.navigate('List')} title="Go to List Demo" />
      <Button onPress={() => navigation.navigate('Image')} title="Go to Image Demo" />
      <Button onPress={() => navigation.navigate('Counter')} title="Go to Counter Screen" />
      <Button onPress={() => navigation.navigate('Color')} title="Go to Color Screen" />
      <Button onPress={() => navigation.navigate('Square')} title="Go to Square Screen" />
      <Button
        onPress={() => navigation.navigate('CounterReducer')}
        title="Go to Counter + Reducer Screen"
      />
      <Button onPress={() => navigation.navigate('Password')} title="Go to Password Screen" />
      <Button onPress={() => navigation.navigate('Box')} title="Go to Box Screen" />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
