import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Home from '../screens/home';
import Practices from '../screens/practices';
import Progress from '../screens/Progress';
import Settings from '../screens/settings';
import Welcome from '../screens/Welcome';
import HomeIcon from '../assets/home-fill.svg';
import PracticeIcon from '../assets/pencil-fill.svg';
import ProgressIcon from '../assets/file-edit-fill.svg';
import SettingIcon from '../assets/tools-fill.svg';
import CloseIcon from '../assets/close-fill.svg';
import {BackHandler} from 'react-native';

const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={() => <HomeIcon witdh="100%" height="100%" />}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />

          <DrawerItem
            icon={() => <PracticeIcon witdh="100%" height="100%" />}
            label="Practices"
            onPress={() => {
              props.navigation.navigate('Practices');
            }}
          />
          <DrawerItem
            icon={() => <ProgressIcon witdh="100%" height="100%" />}
            label="Progress"
            onPress={() => {
              props.navigation.navigate('Progress');
            }}
          />
          <DrawerItem
            icon={() => <SettingIcon witdh="100%" height="100%" />}
            label="Settings"
            onPress={() => {
              props.navigation.navigate('Settings');
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
    marginTop: 80,
  },
});

export default DrawerContent;
