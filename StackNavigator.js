import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavigator, {MoistureNavigator, TemperatureNavigator, HumidityNavigator, SunlightNavigator} from './HomeNavigator';

let StackNavigator = createBottomTabNavigator({
      Home: HomeNavigator,
      Moisture: MoistureNavigator,
      Sunlight: SunlightNavigator,
      Temperature: TemperatureNavigator,
      Humidity: HumidityNavigator
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
        } else if (routeName === 'Humidity') {
          iconName = `ios-cloudy${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
})

export default StackNavigator;