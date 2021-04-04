import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import MenuIcon from '../assets/menu-2-line.svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Navigation = ({navigation, title}) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...styles.headerContainer, paddingTop: top}}>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <MenuIcon width="40" height="40" />
      </TouchableOpacity>

      <View style={{height: 40}}>
        <Text style={{marginTop: 5, fontSize: 25, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FCF2F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#000',
  },
  box: {
    height: 40,
    width: 40,
  },
});

export default Navigation;
