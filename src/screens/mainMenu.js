import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Menu from '../components/Menu';
import MenuIcon from '../assets/menu-2-line.svg';
import 'react-native-gesture-handler';



export default class MainMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <MenuIcon width="40" height="40" />
          </TouchableOpacity>
          <View>
            <Text style={styles.header}>DOROTHEA</Text>
          </View>
          <View style={styles.box} />
        </View>
        <View style={styles.elipsContainer}>
          <View style={styles.dailySubject}>
            <View style={styles.dailyBox}>
              <View style={styles.dailyHeader}>
                <View style={styles.dailyHeaderBorder} />
              </View>
            </View>
          </View>
          <Menu></Menu>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#FCF2F6',
  },
  elipsContainer: {
    position: 'absolute',
    height: 640,
    width: 640,
    backgroundColor: '#C4C4C4',
    borderRadius: 350,
    left: -110,
    top: 150,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  dailySubject: {
    position: 'relative',
    height: 160,
    width: 320,
    right: -156,
    top: -45,
    backgroundColor: '#FCF2F6',
    borderRadius: 20,
  },
  header: {
    padding: 10,
    backgroundColor: '#C4C4C4',
    borderRadius: 5,
    color: '#330000',
  },
  box: {
    height: 40,
    width: 40,
  },
  dailyHeader: {
    height: 55,
    width: 250,
    backgroundColor: '#FE6767',
    borderRadius: 20,
    top: -25,
  },
  dailyHeaderBorder: {
    height: 55,
    width: 250,
    borderWidth: 1.2,
    borderColor: '#330000',
    borderRadius: 20,
    top: -5,
    left: -5,
  },
  dailyBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
