import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import SunlightScreen from './Components/SunlightScreen';
import MoistureScreen from './Components/MoistureScreen';
import TemperatureScreen from './Components/TemperatureScreen';
import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';


const RootStack = createStackNavigator(
    {
      Login: LoginScreen,
      Home: HomeScreen,
      Moisture: MoistureScreen,
      Sunlight: SunlightScreen,
      Temperature: TemperatureScreen,
      Register: RegisterScreen
    }
  );

export default RootStack;