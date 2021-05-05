import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from '../components/navigation';
import {GlobalContext} from '../contexts/global';
import Button from '../components/button';

const Settings = ({navigation}) => {
  const [storeText, setStoreText] = useState('');
  const fetchDrawingsStoreData = drawings => {
    setStoreText(JSON.stringify(drawings.store.getFinished() || {}));
  };

  return (
    <GlobalContext.Consumer>
      {({drawings}) => (
        <View style={styles.root}>
          <Navigation navigation={navigation} title="Settings" />
          <Button
            text={'Clear Drawings Data'}
            onPress={() => drawings.store.clear()}
          />
          <Button
            text={'Fetch Drawings Store Data'}
            onPress={() => {
              fetchDrawingsStoreData(drawings);
            }}
          />
          <View style={styles.textContainer}>
            <Text>{storeText}</Text>
          </View>
        </View>
      )}
    </GlobalContext.Consumer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FCF2F6',
    paddingTop: 10,
  },
  textContainer: {
    padding: 15,
  },
});

export default Settings;
