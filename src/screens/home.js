import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, Text, ImageBackground} from 'react-native';
import Menu from '../components/Menu';
import Navigation from '../components/navigation';
import DailySubject from '../components/dailySubject';
import {createStackNavigator} from '@react-navigation/stack';

import Draw from './Draw';
import Grid from './Grid';
import Ruler from './Ruler';
import Camera from './Camera';

const Stack = createStackNavigator();

const Main = ({navigation}) => {
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
      <Stack.Screen name="Draw" component={Draw} />
      <Stack.Screen name="Grid" component={Grid} />
      <Stack.Screen name="Ruler" component={Ruler} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  );
};

export default Home;
