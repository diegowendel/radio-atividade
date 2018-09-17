import React, { Component } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Image, View } from 'react-native'

import data from '../lib/getGalleryImages';

class GalleryScreen extends Component {
  constructor () {
    super()
    this.state = { data }
  }


  createRows(data, columns) {
    // Define a quantidade de linhas no grid
    const rows = Math.floor(data.length / columns);
    // Calcula a quantidade de elementos na última columa
    let lastRowElements = data.length - rows * columns;

    // Cria elementos vazios na última coluna para que todas as imagens tenham o
    // mesmo tamanho
    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }

    return data;
  }

  render () {
    const columns = 3;
    const {containerStyle, screenStyle} = styles
    return (
      <View style={containerStyle}>
        <SafeAreaView style={containerStyle}>
          <FlatList
            data={this.createRows(this.state.data, columns)}
            keyExtractor={item => item.id}
            numColumns={columns}
            renderItem={({ item }) => {
              if (item.empty) {
                return <View style={[styles.item, styles.itemEmpty]} />;
              }
              return (
                <View style={styles.item}>
                  <Image source={item.source} style={styles.imageItem} />
                </View>
              );
            }}
          />
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  screenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    alignItems: "center",
    flexBasis: 0,
    flexGrow: 1,
    margin: 5
  },
  imageItem: {
    width: 128,
    height: 128
  },
  itemEmpty: {
    backgroundColor: "transparent"
  }
})

export default GalleryScreen
