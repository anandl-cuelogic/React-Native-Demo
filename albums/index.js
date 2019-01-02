// Import a library to help create a componet
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
// create a componet
const App = () => (
    <Header headerText={'Albums'} />
  );
//Render it to the device
AppRegistry.registerComponent('albums', () => App);
