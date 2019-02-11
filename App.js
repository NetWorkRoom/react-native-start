import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeComponent from './src/Home'
import ProfileComponent from './src/Profile'

const AppNavigator = createStackNavigator(
    {
      Home: HomeComponent,
      Profile: ProfileComponent
    },
);

const App = createAppContainer(AppNavigator);

export default App;
