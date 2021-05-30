import React, {Component, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from '../components/navigation';
import {ScrollView} from 'react-native-gesture-handler';
import ProgressImage from '../assets/progress.svg';
import {GlobalContext} from '../contexts/global';
import Button from '../components/button';
import Vector from '../assets/Vector.svg';


const Progress = ({navigation}) => {
  return (
    <GlobalContext.Consumer>
      {({drawings}) => (
        <View style={styles.containers}>
          <Navigation navigation={navigation} title="Progress" />
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.contentContainer}>
              {Object.keys(drawings.finished).length === 0 && (
                <View style={styles.startContainer}>
                  <Text style={styles.text2}>No practice done!</Text>
                  <Button
                    text={'Go to Practices'}
                    onPress={() => navigation.navigate('Practices')}
                  />
                </View>
              )}
              {Object.keys(drawings.finished).map(key => {
                return (
                  <View key={key} style={styles.itemContainer}>
                    <Text style={styles.text}>
                      {' '}
                      {JSON.stringify(drawings.finished[key].name)} practice
                      completed
                    </Text>
                    <View>
                      <Vector witdh="100%" height="100%" />
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.imageContainer}>
            <ProgressImage witdh="100%" height="100%" />
          </View>
        </View>
      )}
    </GlobalContext.Consumer>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 5,
    backgroundColor: '#FCF2F6',
    paddingTop: 10,
  },
  scrollViewContainer: {
    flex: 4,
  },
  imageContainer: {
    flex: 1,
    left: -10,
  },
  contentContainer: {
    padding: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 57,
    backgroundColor: '#FE6767',
    marginHorizontal: 17,
    borderRadius: 17,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  startContainer: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 45,
  },
  text2: {
    textAlign: 'center',
    marginBottom: 40,
    color: '#BEBEBE',
    fontSize: 22,
    fontWeight: 'bold',
  },
  imageBox: {
    flex: 1,
  },
});

export default Progress;
