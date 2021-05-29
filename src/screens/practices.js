import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Navigation from '../components/navigation';
import {FlatGrid} from 'react-native-super-grid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {drawings} from '../animations/drawings';

const Practises = ({navigation}) => {
  return (
    <View style={styles.containers}>
      <Navigation navigation={navigation} title="Practises" />
      <FlatGrid
        itemDimension={120}
        data={Object.values(drawings)}
        style={styles.gridView}
        spacing={30}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Home', {
                screen: 'ReferenceDrawing',
                params: {item},
              })
            }>
            <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
              <View style={styles.itemBorder}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.imageContainer}>{item.image}</View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#FCF2F6',
    paddingTop: 10,
  },
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20,
    height: 220,
  },
  itemName: {
    fontSize: 16,
    color: '#330000',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 50,
  },

  itemBorder: {
    bottom: 8,
    left: -8,
    flex: 1,
    borderWidth: 2,
    borderColor: '#330000',
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    marginTop: 10,
  },
});

export default Practises;
