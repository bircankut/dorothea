import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Menu from './Menu';

export default class MainMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBox}>
          <TouchableOpacity></TouchableOpacity>
        </View>
        <View style={styles.elipsContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 11,
    flexDirection: 'column',
    backgroundColor: '#FCF2F6',
  },
  elipsContainer: {
    flex: 10,
    height: 640,
    width: 640,
    backgroundColor: '#C4C4C4',
    borderRadius: 350,
    left: -90,
    top: 90,
  },
  headerBox: {
    flex: 1,
    backgroundColor: '#bcbfca',
  },
  dailySubject: {
    position: 'relative',
    height: 170,
    width: 400,
    bottom: 20,
    backgroundColor: '#baca52',
  },
});
