import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import Undo from '../assets/arrow-go-back-line.svg';
import Eraser from '../assets/eraser-fill.svg';
import Save from '../assets/save-fill.svg';
import Close from '../assets/close-circle-fill.svg';

export default class Draw extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.canvas}>
          <RNSketchCanvas
            containerStyle={{backgroundColor: 'transparent', flex: 1}}
            canvasStyle={{backgroundColor: 'transparent', flex: 1}}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            closeComponent={
              <View style={styles.functionButton}>
                <Close witdh="100%" height="100%" />
              </View>
            }
            onClosePressed={() =>
              this.props.navigation.navigate('Home', {
                screen: 'Main',
              })
            }
            undoComponent={
              <View style={styles.functionButton}>
                <Undo witdh="100%" height="100%" />
              </View>
            }
            eraseComponent={
              <View style={styles.functionButton}>
                <Eraser witdh="100%" height="100%" />
              </View>
            }
            strokeComponent={color => (
              <View
                style={[{backgroundColor: color}, styles.strokeColorButton]}
              />
            )}
            strokeSelectedComponent={(color, index, changed) => {
              return (
                <View
                  style={[
                    {backgroundColor: color, borderWidth: 2},
                    styles.strokeColorButton,
                  ]}
                />
              );
            }}
            strokeWidthComponent={w => {
              return (
                <View style={styles.functionButton}>
                  <View style={styles.strokeWidthButton}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        width: Math.sqrt(w / 3) * 10,
                        height: Math.sqrt(w / 3) * 10,
                        borderRadius: (Math.sqrt(w / 3) * 10) / 2,
                      }}
                    />
                  </View>
                </View>
              );
            }}
            saveComponent={
              <View style={styles.functionButton}>
                <Save witdh="100%" height="100%" />
              </View>
            }
            savePreference={() => {
              return {
                folder: 'RNSketchCanvas',
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: 'png',
              };
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCF2F6',
    paddingTop: 20,
  },
  canvas: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6464',
  },
  functionButton: {
    height: 35,
    width: 78,
    backgroundColor: '#FCF2F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
AppRegistry.registerComponent('Draw', () => Draw);
