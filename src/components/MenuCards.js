import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class MenuCards extends Component {
  render() {
    return (
      <View style={styles.card}></View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: 175,
    backgroundColor: '#5555bb',
    borderRadius: 15,
  },
});
