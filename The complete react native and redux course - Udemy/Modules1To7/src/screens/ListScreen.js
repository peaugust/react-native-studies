import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'

const ListScreen = () => {
  const data = [
    { name: 'Pedro', age: 21 },
    { name: 'Déka', age: 19 },
    { name: 'Lígia', age: 29 },
    { name: 'Jéssica', age: 14 },
    { name: 'João', age: 21 },
    { name: 'Filomena', age: 21 },
    { name: 'Angelina', age: 11 },
  ]
  return (
    <View>
      <Text style={styles.listHeader}>List Screen</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.name}${item.age}${index}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.cellCardView}>
              <Text style={styles.cellText}>
                {item.name} - Age {item.age}
              </Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listHeader: {
    marginTop: 15,
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  cellCardView: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderColor: '#FFF',
    borderWidth: 1,
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
    elevation: 4,
  },
  cellText: {
    margin: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
})

export default ListScreen
