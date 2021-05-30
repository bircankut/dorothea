import React, {Component, useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Home from '../screens/home';
import Practices from '../screens/practices';
import Progress from '../screens/Progress';
import Settings from '../screens/settings';
import HomeIcon from '../assets/home-fill.svg';
import PracticeIcon from '../assets/pencil-fill.svg';
import ProgressIcon from '../assets/file-edit-fill.svg';
import SettingIcon from '../assets/tools-fill.svg';
import CloseIcon from '../assets/close-fill.svg';
import {BackHandler} from 'react-native';
import {GlobalContext} from '../contexts/global';
import Vector from '../assets/Vector.svg';

const DrawerContent = ({props, navigation}) => {
  const {user} = useContext(GlobalContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.textContainerStyle}>
          <Text style={styles.welcomeStyle}>Hello!</Text>
          <Text style={[styles.userStyle, {paddingLeft: 10}]}>
            {user.data.name}
          </Text>
        </View>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={() => <HomeIcon witdh="100%" height="100%" />}
            label="Home"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />

          <DrawerItem
            icon={() => <PracticeIcon witdh="100%" height="100%" />}
            label="Practices"
            onPress={() => {
              navigation.navigate('Practices');
            }}
          />
          <DrawerItem
            icon={() => <ProgressIcon witdh="100%" height="100%" />}
            label="Progress"
            onPress={() => {
              navigation.navigate('Progress');
            }}
          />
          <DrawerItem
            icon={() => <SettingIcon witdh="100%" height="100%" />}
            label="Settings"
            onPress={() => {
              navigation.navigate('Settings');
            }}
          />
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/welcome.jpg')}
          />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => <CloseIcon witdh="120%" height="120%" />}
          label="Exit"
          onPress={() => {
            BackHandler.exitApp();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    flex: 1,
    width: 200,
    height: 223.66,
    resizeMode: 'contain',
  },
  drawerSection: {
    marginTop: 25,
  },
  bottomDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  welcomeStyle: {
    color: '#330000',
    fontSize: 23,
    fontWeight: 'bold',
  },
  userStyle: {
    color: '#330000',
    fontSize: 23,
  },
  textContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 20,
    paddingLeft: 22,
  },
});

export default DrawerContent;
