import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, Text, ImageBackground} from 'react-native';
import Menu from '../components/Menu';
import Navigation from '../components/navigation';
import DailySubject from '../components/dailySubject';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/backgroundImage.png')}
        style={styles.image}>
        <View style={styles.menuContainer}>
          <Navigation navigation={navigation} title="DOROTHEA" />
          <View style={styles.dailySubjectContainer}>
            <DailySubject></DailySubject>
          </View>
          <View style={styles.contentContainer}>
            <Menu></Menu>
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

export default Home;
