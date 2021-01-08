import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.border}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  border: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
  },
})

export default ResultDetails
