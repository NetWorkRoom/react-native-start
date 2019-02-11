import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeComponent from './src/Home'
import ProfileComponent from './src/Profile'

const AppNavigator = createStackNavigator(
    {
      Home: HomeComponent,
      Profile: ProfileComponent
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
         headerStyle: {
            backgroundColor: '#f4511e',
         },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'normal',
         },
      },
    }
);

const App = createAppContainer(AppNavigator);

export default App;
