import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './SearchScreen.styles';

class SearchScreen extends Component {
  render() {
    const { containerStyle, screenStyle } = styles;
    return (
      <View style={containerStyle}>
        <SafeAreaView style={screenStyle}>
          <Text>Search Screen</Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default SearchScreen;
