import React, { Component } from 'react'
import { FlatList, SafeAreaView, Image, View } from 'react-native'

import data from '../../lib/getGalleryImages';
import styles from './GalleryScreen.styles';

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
    return (
      <View style={styles.containerStyle}>
        <SafeAreaView style={styles.containerStyle}>
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

export default GalleryScreen;
