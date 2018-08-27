import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import BottomTabNavigator from './navigation/BottomTabNavigator';

class App extends Component {

    render() {
        const { containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <BottomTabNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    }
});

export default App;
