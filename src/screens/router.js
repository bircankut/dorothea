import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import practices from '../screens/practices';
import practices from '../screens/practices';
import practices from '../screens/practices';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class Router extends Component {
  render() {
    return (
      <View></View>
    );
  }
}

const styles = StyleSheet.create({});
