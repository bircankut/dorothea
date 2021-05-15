import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
import Button from '../components/button';

export default function Grid() {
  const [response, setResponse] = React.useState(null);

  return (
    <ScrollView style={{backgroundColor: '#FCF2F6'}}>
      <View style={styles.container}>
        <View style={styles.image}>
          {response && (
            <Image
              style={{width: 398, height: 398}}
              source={{uri: response.uri}}
            />
          )}
        </View>
        <ScrollView horizontal={true} style={styles.scrollContainer}   showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.sizeBox}>
            <Text>4 x 4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeBox}>
            <Text>5 x 5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeBox}>
            <Text>6 x 6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeBox}>
            <Text>7 x 7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeBox}>
            <Text>8 x 8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeBox}>
            <Text>9 x 9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeBox}>
            <Text>10 x 10</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <Button text={'Select'} style={styles.buttonStyle} />
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
  image: {
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
});
