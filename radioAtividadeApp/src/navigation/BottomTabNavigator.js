import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from 'react-navigation';

import AboutScreen from '../screens/AboutScreen';
import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import SearchScreen from '../screens/SearchScreen';
 
const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon name="home" size={24} color={tintColor} />
                )
            })
        },
        Galeria: {
            screen: GalleryScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon name="image" size={24} color={tintColor} />
                )
            })
        },
        Pesquisar: {
            screen: SearchScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon name="search" size={24} color={tintColor} />
                )
            })
        },
        Contato: {
            screen: MessageScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Feather name="message-circle" size={24} color={tintColor} />
                )
            })
        },
        Sobre: {
            screen: AboutScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon name="group" size={24} color={tintColor} />
                )
            })
        }
    },
    {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#F8F8F8',
            inactiveTintColor: '#A9A9A9',
            style: {
                backgroundColor: '#D3D3D3'
            }
        }
    }
);

export default BottomTabNavigator;
