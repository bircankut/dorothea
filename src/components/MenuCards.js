import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class MenuCards extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.card}></View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 170,
    backgroundColor: '#FCF2F6',
    borderRadius: 20,
  },
});
