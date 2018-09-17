import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Colors from '../constants/Colors';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <SafeAreaView style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: Colors.white,
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        // Específico iOS
        //shadowColor: '#000',
        //shadowOffset: { width: 0, height: 20 },
        //shadowOpacity: 0.2,
        // Específico Android
        //elevation: 2,
        //position: 'relative'
    }
});

export default Header;
