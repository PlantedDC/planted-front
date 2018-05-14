import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import TemperatureScreen from './Components/TemperatureScreen';
import MoistureScreen from './Components/MoistureScreen';
import SunlightScreen from './Components/SunlightScreen';
import HumidityScreen from './Components/HumidityScreen';


let HomeNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
          headerTitle: 'Home',
        }
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          headerTitle: 'Profile',
        }
      }
})

export let MoistureNavigator =  createStackNavigator({
  Moisture: {
      screen: MoistureScreen,
      navigationOptions: {
        headerTitle: 'Moisture',
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerTitle: 'Profile',
      }
    }
})

export let TemperatureNavigator =  createStackNavigator({
  Temperature: {
      screen: TemperatureScreen,
      navigationOptions: {
        headerTitle: 'Temperature',
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerTitle: 'Profile',
      }
    }
})

export let HumidityNavigator =  createStackNavigator({
  Humidity: {
      screen: HumidityScreen,
      navigationOptions: {
        headerTitle: 'Humidity',
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerTitle: 'Profile',
      }
    }
})

export let SunlightNavigator =  createStackNavigator({
  Sunlight: {
      screen: SunlightScreen,
      navigationOptions: {
        headerTitle: 'Sunlight',
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerTitle: 'Profile',
      }
    }
})
export default HomeNavigator;