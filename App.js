import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home';
import Deck from './src/screens/Deck';
import Ball from './src/components/Ball';

const navigation = createStackNavigator({
  Home: Home,
  Deck: Deck,
  Ball: Ball,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'React Native Animation'
  }
});

export default App = createAppContainer(navigation);
