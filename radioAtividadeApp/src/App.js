import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import BottomTabNavigator from './navigation/BottomTabNavigator';

class App extends Component {

    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Header headerText={'RadioAtividade'}/>
                <BottomTabNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;
