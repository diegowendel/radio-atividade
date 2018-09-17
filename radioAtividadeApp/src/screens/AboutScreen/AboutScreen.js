import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './AboutScreen.styles';

class AboutScreen extends Component {
  render() {
    const { containerStyle, screenStyle } = styles;
    return (
      <View style={containerStyle}>
        <SafeAreaView style={screenStyle}>
          <Text>About Screen</Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default AboutScreen;
