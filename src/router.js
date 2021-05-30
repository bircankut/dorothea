import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Home from './screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Practices from './screens/practices';
import Settings from './screens/settings';
import Progress from './screens/Progress';
import Welcome from './screens/Welcome';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Practices" component={Practices} />
            <Drawer.Screen name="Progress" component={Progress} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Welcome" component={Welcome} />
          </Drawer.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
