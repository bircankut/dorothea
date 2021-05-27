import React, {Component} from 'react';
import {
  Alert,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  View,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import * as ImagePicker from 'react-native-image-picker';
import Button from '../components/button';
import Draggable from 'react-native-draggable';

export default function Ruler() {
  const [response, setResponse] = React.useState(null);
  const [rulerHorizontal, setRulerHorizontal] = React.useState(0);
  const [rulerVertical, setRulerVertical] = React.useState(0);
  const [lockRuler, setLockRuler] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [buttonText, setbuttonText] = React.useState('Lock Ruler');

  const OnPress = () => {
    setLockRuler(!lockRuler);
    if (lockRuler) {
      setbuttonText('Lock Ruler');
    } else {
      setbuttonText('Reliase Ruler');
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#FCF2F6'}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {response && (
            <ImageZoom
              cropWidth={398}
              cropHeight={398}
              imageWidth={398}
              imageHeight={398}>
              <ImageBackground
                resizeMode="contain"
                style={styles.image}
                source={{uri: response.uri}}>
                {new Array(rulerHorizontal).fill(0).map((e, i) => (
                  <Draggable
                    key={i}
                    x={5 + i * 40}
                    y={0}
                    minY={5}
                    maxY={-220}
                    disabled={lockRuler}>
                    <View
                      key={i}
                      style={[
                        {width: 2},
                        {height: 430},
                        {backgroundColor: '#20232a'},
                      ]}
                    />
                  </Draggable>
                ))}
                {new Array(rulerVertical).fill(0).map((e, i) => (
                  <Draggable
                    key={i}
                    x={0}
                    y={5 + i * 40}
                    minX={5}
                    maxX={220}
                    disabled={lockRuler}>
                    <View
                      key={i}
                      style={[
                        {width: 430},
                        {height: 2},
                        {backgroundColor: '#20232a'},
                      ]}
                    />
                  </Draggable>
                ))}
              </ImageBackground>
            </ImageZoom>
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          text={'Select Image'}
          style={styles.buttonStyle}
          variant={'primary'}
          onPress={() =>
            ImagePicker.launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 400,
                maxWidth: 400,
                quality: 1,
              },
              response => {
                setResponse(response);
              },
            )
          }
        />
        <View style={styles.rulerContainer}>
          <Button
            text={'Horizontal Ruler'}
            style={styles.secondaryButtonStyle}
            variant={'secondary'}
            onPress={() => setRulerHorizontal(rulerHorizontal + 1)}
          />

          <Button
            text={'Vertical Ruler'}
            style={styles.secondaryButtonStyle}
            variant={'secondary'}
            onPress={() => setRulerVertical(rulerVertical + 1)}
          />
        </View>
        <View style={styles.settingsContainer}>
          <Button
            text={'Erase Rulers'}
            style={styles.textButtonStyle}
            variant={'secondary'}
            onPress={() => {
              setRulerHorizontal(0);
              setRulerVertical(0);
            }}
          />

          <TouchableOpacity style={styles.textButtonStyle} onPress={OnPress}>
            <Text style={styles.text}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FCF2F6',
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  imageContainer: {
    marginTop: 10,
    marginHorizontal: 7,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#20232a',
    width: 400,
    height: 400,
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
  sizeBox: {
    flex: 1,
    width: 80,
    height: 40,
    borderWidth: 2,
    borderColor: '#20232a',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  buttonStyle: {
    marginHorizontal: 100,
    marginTop: 40,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  rulerContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  settingsContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  textButtonStyle: {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    borderColor: '#FCF2F6',
    marginTop: 10,
  },
  secondaryButtonStyle: {
    marginHorizontal: 100,
    marginTop: 30,
    width: 170,
  },
  text: {
    fontSize: 16,
    color: '#330000',
    fontWeight: '600',
  },
});
