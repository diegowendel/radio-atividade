import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';

class App extends Component {

    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Header headerText={'RadioAtividade'}/>
                <Text>RadioAtividade</Text>
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
