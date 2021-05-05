import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <View style={styles.inner}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 50,
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: '#FE6767',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FE6767',
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default Button;
