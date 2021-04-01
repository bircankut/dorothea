import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import Home from './src/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Practices from './src/screens/practices';

const Drawer = createDrawerNavigator();

const App: () => Node = () => {
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
};

export default App;
