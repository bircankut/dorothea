import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Button, Text, ImageBackground} from 'react-native';
import Menu from '../components/Menu';
import Navigation from '../components/navigation';
import DailySubject from '../components/dailySubject';
import {createStackNavigator} from '@react-navigation/stack';

import Draw from './Draw';
import Grid from './Grid';
import Ruler from './Ruler';
import Camera from './Camera';
import ReferenceDrawing from './ReferenceDrawing';
import {GlobalContext} from '../contexts/global';

const Stack = createStackNavigator();

const Main = ({navigation}) => {
  const {user} = useContext(GlobalContext);
  useEffect(() => {
    if (user.data === {}) {
      console.log(user.data);
    }
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/backgroundImage.png')}
        style={styles.image}>
        <View style={styles.menuContainer}>
          <Navigation navigation={navigation} title="DOROTHEA" />
          <View style={styles.dailySubjectContainer}>
            <DailySubject />
          </View>
          <View style={styles.contentContainer}>
            <Menu navigation={navigation} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  menuContainer: {
    flex: 7,
    flexDirection: 'column',
    paddingTop: 10,
  },
  dailySubjectContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: 10,
  },
  contentContainer: {
    flex: 5,
    flexDirection: 'column',
    paddingVertical: 10,
  },
});

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Main"
        component={Main}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Draw"
        component={Draw}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#FCF2F6',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
        }}
        name="Grid"
        component={Grid}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#FCF2F6',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
        }}
        name="Ruler"
        component={Ruler}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Camera"
        component={Camera}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#FCF2F6',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
        }}
        name="ReferenceDrawing"
        component={ReferenceDrawing}
      />
    </Stack.Navigator>
  );
};

export default Home;
