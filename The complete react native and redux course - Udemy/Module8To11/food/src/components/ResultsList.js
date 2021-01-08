import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import ResultDetails from './ResultDetails'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ navigation, results, title }) => {
  if (!results) {
    return null
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Results', { id: item.id })}>
              <ResultDetails result={item}></ResultDetails>
            </TouchableOpacity>
          )
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
})

export default withNavigation(ResultsList)
