import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class DailySubject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBorder} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 50,
    backgroundColor: '#FCF2F6',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  header: {
    flex: 0.35,
    backgroundColor: '#FE6767',
    borderRadius: 20,
    bottom: 20,
  },
  headerBorder: {
    bottom: 5,
    left: -5,
    flex: 1,
    borderWidth: 2,
    borderColor: '#330000',
    borderRadius: 20,
  },
});
