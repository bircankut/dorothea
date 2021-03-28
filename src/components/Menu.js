import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MenuCards from './MenuCards';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardBox}>
          <MenuCards></MenuCards>
          <MenuCards></MenuCards>
        </View>
        <View style={styles.cardBox}>
          <MenuCards></MenuCards>
          <MenuCards></MenuCards>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 150,
    marginTop: 80,
  },
  cardBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});
