import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

let SunlightScreen = (props) => {
    return <View style={styles.container}>
        <Text>Sunlight</Text>
        <Button
          title="Go to Home"
          onPress={() => props.navigation.navigate('Home')}
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

export default SunlightScreen;