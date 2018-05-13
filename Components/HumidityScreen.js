import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HumidityScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
        title="Profile"
        color="green"
        onPress={() => navigation.navigate('Profile')}
        />
      ),
    };
  }

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

    return <View style={styles.container}>
        <Text>Humidity</Text>
      </View>
  }
}

export default HumidityScreen;