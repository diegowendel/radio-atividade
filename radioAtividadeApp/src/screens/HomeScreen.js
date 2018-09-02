import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import Player from '../components/Player/Player';

class HomeScreen extends Component {
    render() {
        const { containerStyle, screenStyle } = styles;
        return (
            <View style={containerStyle}>
                <Header headerText={'RadioAtividade'}/>
                <SafeAreaView style={screenStyle}>
                    <Text>Home Screen</Text>
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

export default HomeScreen;
