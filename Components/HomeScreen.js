import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

let HomeScreen = (props) => {
    return <View style={styles.container}>
        <Text>PLANTED is AWESOME!!!</Text>
        <Text>This would show our current data!!!!</Text>
        <Button
          title="Temperature"
          onPress={() => props.navigation.navigate('Temperature')}
        />
        <Button
          title="Moisture"
          onPress={() => props.navigation.navigate('Moisture')}
        />
        <Button
        title="Sunlight"
        onPress={() => props.navigation.navigate('Sunlight')}
        />
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