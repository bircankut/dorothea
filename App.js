import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import Router from './src/router';
import {GlobalContextProvider} from './src/contexts/global';

const App: () => Node = () => {
  return (
    <GlobalContextProvider>
      <Router />
    </GlobalContextProvider>
  );
};

export default App;
