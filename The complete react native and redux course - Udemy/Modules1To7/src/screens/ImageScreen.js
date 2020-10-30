import React from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import ImageDetail from './../components/ImageDetail'

const ImageScreen = () => {
  const data = [
    { image: require('../../assets/beach.jpg'), title: 'Beach' },
    { image: require('../../assets/forest.jpg'), title: 'Forest' },
    { image: require('../../assets/mountain.jpg'), title: 'Mountain' },
  ]
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `$(item.image)$(item.title)${index}`}
        renderItem={({ item }) => {
          return <ImageDetail title={item.title} imageSource={item.image}></ImageDetail>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageScreen
