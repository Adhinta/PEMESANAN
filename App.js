import React from 'react';
import { StyleSheet, Text, Button,  TouchableHighlight, View, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './src/Home';
import TambahScreen from './src/Tambah';
import CustemerScreen from './src/Custemer';
//import CalendarScreen from './src/Calendar';

const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    TambahScreen: {
      screen: TambahScreen,
    },
    CustemerScreen: {
      screen: CustemerScreen,
    },
  //  CalendarScreen: {
   //   screen: CalendarScreen,
   // },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);
export default class App extends React.Component {
  render() {
    return (
    <RootStack />
    
    );
  }
}