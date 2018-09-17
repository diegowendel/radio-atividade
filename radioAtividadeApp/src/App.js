import React, { Component } from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import Colors from './constants/Colors';
import Header from './components/Header';
import Player from './components/Player/Player';

class App extends Component {

    render() {
        const { containerStyle } = styles;
        return (
            <SafeAreaView style={containerStyle}>
              <StatusBar backgroundColor={Colors.primaryDarkColor} />
              <Header headerText={'RadioAtividade'}/>
              <BottomTabNavigator />
              <Player />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    }
});

export default App;
