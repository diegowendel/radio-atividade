import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import Player from '../components/Player/Player';
import EditText from '../components/EditText/EditText';

class MessageScreen extends Component {
    render() {
        const { containerStyle, screenStyle } = styles;
        return (
            <View style={containerStyle}>
                <Header headerText={'Contato'}/>
                <SafeAreaView style={screenStyle}>
                    <EditText placeholder={'Nome'} />
                    <EditText placeholder={'Email'} />
                    <EditText placeholder={'Telefone'} />
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
        flex: 1
    }
});

export default MessageScreen;
