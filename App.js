import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet,
} from 'react-native';
import MainMenu from './src/screens/mainMenu';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainMenu></MainMenu>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
