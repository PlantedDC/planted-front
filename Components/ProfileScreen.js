import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

let ProfileScreen = (props) => {
    return <View style={styles.container}>
        <Text>Profile</Text>
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

export default ProfileScreen;