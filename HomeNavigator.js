import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import TemperatureScreen from './Components/TemperatureScreen';

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

export default HomeNavigator;