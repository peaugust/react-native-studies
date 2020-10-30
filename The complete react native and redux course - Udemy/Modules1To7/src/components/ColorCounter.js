import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.colorTitleStyle}>{color}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => onIncrease()}>
          <Text style={styles.buttonLabelStyle}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => onDecrease()}>
          <Text style={styles.buttonLabelStyle}> - </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  colorTitleStyle: {
    fontSize: 18,
    marginVertical: 5
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 15
  },
  buttonStyle: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  buttonLabelStyle: {
    fontSize: 30,
    marginHorizontal: 10
  }
})

export default ColorCounter
