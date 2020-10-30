import React from 'react'
import { StyleSheet, View, Text, Image, ImageStore } from 'react-native'

const ImageDetail = (props) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.item} source={props.imageSource}></Image>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: '#FFF',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOpacity: 0.24,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
    },
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 4,
  },
  item: {
    width: '50%',
    margin: 10
  },
  text: {
    fontSize: 14
  }
})

export default ImageDetail
