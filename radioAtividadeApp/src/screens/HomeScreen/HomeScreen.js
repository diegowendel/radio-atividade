import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './HomeScreen.styles';

class HomeScreen extends Component {
    render() {
        const { containerStyle, screenStyle } = styles;
        return (
            <View style={containerStyle}>
                <SafeAreaView style={screenStyle}>
                    <Text>Home Screen</Text>
                </SafeAreaView>
            </View>
        );
    }
}

export default HomeScreen;
