import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';

const AuthenticationNavigator = createStackNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Log In',
      }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
          title: 'Create An Account',
        }
      }
    })

    export default AuthenticationNavigator;