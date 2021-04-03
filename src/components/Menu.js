import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Drawing from '../assets/drawing.svg';
import Grid from '../assets/grid.svg';
import Rulers from '../assets/rulers.svg';
import Camera from '../assets/camera.svg';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardBox}>
          <TouchableOpacity style={styles.cards}>
            <View style={styles.imageBox}>
              <Drawing witdh="100%" height="100%" />
            </View>
            <Text style={styles.textBox}>Draw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cards}>
            <View style={styles.imageBox}>
              <Grid witdh="100%" height="100%" />
            </View>
            <Text style={styles.textBox}>Grid</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardBox}>
          <TouchableOpacity style={styles.cards}>
            <View style={styles.imageBox}>
              <Rulers witdh="100%" height="100%" />
            </View>
            <Text style={styles.textBox}>Ruler</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cards}>
            <View style={styles.imageBox}>
              <Camera witdh="100%" height="100%" />
            </View>
            <Text style={styles.textBox}>Camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  cards: {
    flex: 0.4,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FCF2F6',
    borderRadius: 20,
  },
  textBox: {
    flex: 0.3,
    color: '#330000',
    fontSize: 25,
  },
  imageBox: {
    flex: 0.7,
  },
});
