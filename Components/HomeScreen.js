import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

let HomeScreen = (props) => {
    return <View style={styles.container}>
        <Text>PLANTED is AWESOME!!!</Text>
        <Text>This would show our current data!!!!</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;