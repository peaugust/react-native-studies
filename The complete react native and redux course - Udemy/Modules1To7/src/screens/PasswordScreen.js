import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const reducer = (state, action) => {
}
const PasswordScreen = () => {
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Password: </Text>
      <TextInput
      style={styles.input}
      autoCapitalize = "none"
      autoCorrect={false}
      secureTextEntry={true}
      value = {password}
      onChangeText = {(newValue) => setPassword(newValue)}
      />
      <Text style={password.length < 5 ? styles.errorText : styles.validText}>{ password.length < 5 ? 'Password must be longer than 5 characters' : 'Your password is valid 🎉' }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  errorText: {
    fontSize: 14,
    color: 'red'
  },
  validText: {
    fontSize: 14,
    color: 'green'
  }
})

export default PasswordScreen
