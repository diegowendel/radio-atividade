import React from 'react';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { createMaterialTopTabNavigator } from 'react-navigation';

import AboutScreen from '../screens/AboutScreen';
import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen/MessageScreen';
import SearchScreen from '../screens/SearchScreen';
import Colors from '../constants/Colors';
 
const BottomTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (<Icon name="home" size={20} color={tintColor} />),
        tabBarLabel: 'Home'
      }
    },
      Galeria: {
      screen: GalleryScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (<Icon name="image" size={20} color={tintColor} />),
        tabBarLabel: 'Galeria'
      }
    },
    Pesquisar: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (<Icon name="search" size={20} color={tintColor} />),
        tabBarLabel: 'Pesquisar'
      }
    },
    Contato: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (<Feather name="message-circle" size={20} color={tintColor} />),
        tabBarLabel: 'Contato'
      }
    },
    Sobre: {
      screen: AboutScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (<Icon name="group" size={20} color={tintColor} />),
        tabBarLabel: 'Sobre Nós'
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.white,
      inactiveTintColor: Colors.white,
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        height: 0
      },
      style: {
        backgroundColor: Colors.primaryColor,
        height: 40
      }
    }
  }
);

export default BottomTabNavigator;
