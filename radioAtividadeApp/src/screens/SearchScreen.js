import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import Player from '../components/Player/Player';

class SearchScreen extends Component {
    render() {
        const { containerStyle, screenStyle } = styles;
        return (
            <View style={containerStyle}>
                <Header headerText={'Pesquisar'}/>
                <SafeAreaView style={screenStyle}>
                    <Text>Search Screen</Text>
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

export default SearchScreen;
