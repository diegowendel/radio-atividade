import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

class MessageScreen extends Component {
    render() {
        const { screenStyle } = styles;
        return (
            <SafeAreaView style={screenStyle}>
                <Text>Message Screen</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MessageScreen;
