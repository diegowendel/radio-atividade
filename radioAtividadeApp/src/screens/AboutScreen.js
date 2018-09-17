import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

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
