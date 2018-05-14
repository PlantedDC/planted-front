import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';


class HomeScreen extends React.Component {

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

    let {navigation} = this.props;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

    return <View style={styles.container}>
        <Text>PLANTED is AWESOME!!!</Text>
        <Text>This would show our current data!!!!</Text>
        <Button 
        title="Profile"
        onPress={() => navigation.navigate('Profile')} />
    </View>
}
}



export default HomeScreen;