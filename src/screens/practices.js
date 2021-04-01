import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Navigation from '../components/navigation';

const Practises = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Navigation navigation={navigation} title="Practises" />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FCF2F6',
        }}>
        <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 15}}>
          Practises
        </Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Practises;
