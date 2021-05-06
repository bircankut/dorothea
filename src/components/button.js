import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Primary = ({text, onPress, style}) => {
  const styles = primaryStyles;
  const rootStyle = {...styles.root, ...style};
  return (
    <TouchableOpacity style={rootStyle} onPress={onPress}>
      <View style={styles.inner}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Secondary = ({text, onPress, style}) => {
  const styles = secondaryStyles;
  const rootStyle = {...styles.root, ...style};
  return (
    <TouchableOpacity style={rootStyle} onPress={onPress}>
      <View style={styles.inner}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const variants = {
  primary: Primary,
  secondary: Secondary,
};

const Button = ({text, onPress, style, variant = 'primary'}) => {
  const Component = variants[variant];
  return <Component text={text} onPress={onPress} style={style} />;
};

const primaryStyles = StyleSheet.create({
  root: {
    height: 50,
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
    color: '#FCF2F6',
    fontWeight: '600',
    alignSelf: 'center',
  },
});

const secondaryStyles = StyleSheet.create({
  root: {
    height: 50,
    backgroundColor: '#FCF2F6',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#330000',
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#330000',
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default Button;
