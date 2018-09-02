import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import Player from '../components/Player/Player';

class AboutScreen extends Component {
    render() {
        const { containerStyle, screenStyle } = styles;
        return (
            <View style={containerStyle}>
                <Header headerText={'Sobre Nós'}/>
                <SafeAreaView style={screenStyle}>
                    <Text>About Screen</Text>
                </SafeAreaView>
                <Player />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    screenStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AboutScreen;
