import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  PermissionsAndroid,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

const App: React.FC = ({navigation}) => {
  const camera = useRef(null);
  const [imageUri, setImageUri] = useState('');
  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: false};
      const data = await camera.current
        ?.takePictureAsync(options)
        .then(data => {
          console.log(data.uri);
          setImageUri(data == undefined ? '' : data.uri);
          requestStoragePermission(() =>
            CameraRoll.saveToCameraRoll(data.uri, 'photo'),
          );
        });
    }
  };

  const requestStoragePermission = async (callback: any) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Galeri kaydetme izni gerekiyor',
          message: 'Fotoğrafınızın galeriye kaydedilmesi için izin veriniz',
          buttonNeutral: 'Daha sonra sor',
          buttonNegative: 'İptal',
          buttonPositive: 'Tamam',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('✅İzin verildi');
        callback();
      } else {
        console.log('❌İzin verilmedi');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return imageUri == '' ? (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Kamera izni gerekiyor',
          message:
            'Kamera ile manzara fotoğrafı çekmek için izin vermeniz gerekiyor.',
          buttonPositive: 'Tamam',
          buttonNegative: 'İptal',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Mikrofon izni gerekiyor',
          message:
            'Mikrofon ile ses kaydı yapmak için için izin vermeniz gerekiyor.',
          buttonPositive: 'Tamam',
          buttonNegative: 'İptal',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainer2}>
          <TouchableOpacity
            style={styles.greyBox}
            onPress={() =>
              navigation.navigate('Home', {
                screen: 'Main',
              })
            }>
            <Text style={styles.darkText}>Go to Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pinkBox} onPress={takePicture}>
            <Text style={styles.whiteText}>Take a Picture</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.imageBackground}
        source={{uri: imageUri}}
      />
      <View style={styles.okButtonContainer}>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity
            style={styles.pinkBox}
            onPress={() => setImageUri('')}>
            <Text style={styles.whiteText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 40,
    paddingHorizontal: 25,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  okButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  whiteText: {
    color: '#FCF2F6',
    fontSize: 20,
  },
  buttonContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pinkBox: {
    backgroundColor: '#FF6464',
    alignItems: 'center',
    width: '45%',
    paddingVertical: 10,
    borderRadius: 15,
  },
  greyBox: {
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    width: '45%',
    paddingVertical: 10,
    borderRadius: 15,
  },
  darkText: {
    color: '#20232a',
    fontSize: 20,
  },
  saveButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
export default App;
