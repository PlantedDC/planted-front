import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AuthenticationNavigator from './AuthenticationNavigator';
import StackNavigator from './StackNavigator';
import LandingPage from './Components/LandingPage';

let AppNavigator = createSwitchNavigator({
    Landing: LandingPage,
    Auth: AuthenticationNavigator, 
    AppComponents: StackNavigator,
  });


export default AppNavigator;