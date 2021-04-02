import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Practices from './screens/practices';

const Drawer = createDrawerNavigator();

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
              backgroundColor: '#FCF2F6',
            }}
            drawerContentOptions={{
              activeTintColor: '#FCF2F6',
              activeBackgroundColor: '#FE6767',
            }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Practices" component={Practices} />
          </Drawer.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
