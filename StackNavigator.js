import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Components/HomeScreen';
import SunlightScreen from './Components/SunlightScreen';
import MoistureScreen from './Components/MoistureScreen';
import TemperatureScreen from './Components/TemperatureScreen';

const StackNavigator = createBottomTabNavigator({
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          title: 'Home',
        }
      },
      Moisture: {
        screen: MoistureScreen,
        navigationOptions: {
          title: 'Moisture',
        }
      },
      Sunlight: {
        screen: SunlightScreen,
        navigationOptions: {
          title: 'Sunlight',
        }
      },
      Temperature: {
        screen: TemperatureScreen,
        navigationOptions: {
          title: 'Temperature',
        }
      }
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-home${focused ? '' : '-outline'}`;
          } else if (routeName === 'Moisture') {
            iconName = `ios-rainy${focused ? '' : '-outline'}`;
          } else if (routeName === 'Sunlight') {
            iconName = `ios-sunny${focused ? '' : '-outline'}`;
          } else if (routeName === 'Temperature') {
            iconName = `ios-thermometer${focused ? '' : '-outline'}`;
          }
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      },
    }
 );

export default StackNavigator;