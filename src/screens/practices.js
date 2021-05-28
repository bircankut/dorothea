import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from '../components/navigation';
import {FlatGrid} from 'react-native-super-grid';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {drawings} from '../animations/drawings';

const Practises = ({navigation}) => {
  const [items, setItems] = React.useState([
    {name: 'TURQUOISE', code: '#FDA697'},
    {name: 'EMERALD', code: '#ADD8CE'},
    {name: 'PETER RIVER', code: '#B2CEB2'},
    {name: 'AMETHYST', code: '#FED992'},
    {name: 'WET ASPHALT', code: '#FDA697'},
    {name: 'GREEN SEA', code: '#ADD8CE'},
    {name: 'NEPHRITIS', code: '#B2CEB2'},
    {name: 'BELIZE HOLE', code: '#FED992'},
    {name: 'WISTERIA', code: '#FDA697'},
    {name: 'MIDNIGHT BLUE', code: '#ADD8CE'},
    {name: 'WISTERIA', code: '#B2CEB2'},
    {name: 'MIDNIGHT BLUE', code: '#FED992'},
    {name: 'WISTERIA', code: '#FDA697'},
    {name: 'MIDNIGHT BLUE', code: '#ADD8CE'},
    {name: 'WISTERIA', code: '#B2CEB2'},
    {name: 'MIDNIGHT BLUE', code: '#FED992'},
  ]);

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
                <Text style={styles.itemCode}/>
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
    marginTop: 20,
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  itemBorder: {
    bottom: 8,
    left: -8,
    flex: 1,
    borderWidth: 2,
    borderColor: '#330000',
    borderRadius: 20,
  },
});

export default Practises;
