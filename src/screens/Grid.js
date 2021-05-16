import React, {Component} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ImageZoom from 'react-native-image-pan-zoom';
import * as ImagePicker from 'react-native-image-picker';
import Button from '../components/button';

import Grid4 from '../assets/4x4Grid.svg';
import Grid5 from '../assets/5x5Grid.svg';
import Grid6 from '../assets/6x6Grid.svg';
import Grid7 from '../assets/7x7Grid.svg';
import Grid8 from '../assets/8x8Grid.svg';
import Grid9 from '../assets/9x9Grid.svg';

export default function Grid() {
  const [response, setResponse] = React.useState(null);
  const [gridIndex, setGridIndex] = React.useState(0);
  const grids = [
    <View />,
    <Grid4 witdh="100%" height="100%" />,
    <Grid5 witdh="100%" height="100%" />,
    <Grid6 witdh="100%" height="100%" />,
    <Grid7 witdh="100%" height="100%" />,
    <Grid8 witdh="100%" height="100%" />,
    <Grid9 witdh="100%" height="100%" />,
  ];

  return (
    <ScrollView style={{backgroundColor: '#FCF2F6'}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {response && (
            <ImageZoom
              cropWidth={400}
              cropHeight={400}
              imageWidth={398}
              imageHeight={398}>
              <ImageBackground
                resizeMode="contain"
                style={styles.image}
                source={{uri: response.uri}}>
                {grids[gridIndex]}
              </ImageBackground>
            </ImageZoom>
          )}
        </View>

        <ScrollView
          horizontal={true}
          style={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.sizeBox}
            onPress={() => setGridIndex(1)}>
            <Text>4 x 4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeBox}
            onPress={() => setGridIndex(2)}>
            <Text>5 x 5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeBox}
            onPress={() => setGridIndex(3)}>
            <Text>6 x 6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeBox}
            onPress={() => setGridIndex(4)}>
            <Text>7 x 7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeBox}
            onPress={() => setGridIndex(5)}>
            <Text>8 x 8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sizeBox}
            onPress={() => setGridIndex(6)}>
            <Text>9 x 9</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <Button
        text={'Hide Grid'}
        style={styles.buttonStyle}
        onPress={() => setGridIndex(0)}
      />
      <Button
        text={'Select Image'}
        style={styles.buttonStyle}
        variant={'secondary'}
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
  scrollContainer: {
    marginVertical: 20,
  },
  buttonStyle: {
    marginHorizontal: 100,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
