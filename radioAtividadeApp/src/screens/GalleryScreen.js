import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

class GalleryScreen extends Component {
    render() {
        const { screenStyle } = styles;
        return (
            <SafeAreaView style={screenStyle}>
                <Text>Gallery Screen</Text>
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

export default GalleryScreen;
