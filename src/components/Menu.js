import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MenuCards from './MenuCards';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardBox}>
          <MenuCards></MenuCards>
          <MenuCards></MenuCards>
        </View>
        <View style={[styles.cardBox, styles.bottomPadding]}>
          <MenuCards></MenuCards>
          <MenuCards></MenuCards>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  cardBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 130,
  },
  bottomPadding: {
    paddingBottom: 80,
  },
});
