import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import logo from './images/logo_planted.png';

let LandingPage = (props) =>
    <View style={styles.container}>
        <Image 
        source={logo}
        style={styles.logo}
        />

        <View style={styles.login}>
            <Button 
            style={styles.button}
            title="Log In"
            color='white'
            onPress={() => props.navigation.navigate('Login')}
        />
        </View>

        <View style={styles.login}>
        <Button
            style={styles.button}
            title="Create Account"
            color='white'
            onPress={() => props.navigation.navigate('Register')}
        />
        </View>
    </View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
     logo: {
        marginBottom: 20,
        width: 300,
        height: 150,
        resizeMode: 'contain'
     },
     login: {
         width: 300,
         height: 80,
         backgroundColor: '#5c720d',
         margin: 20,
         justifyContent: 'center',
         alignItems: 'center',
     },
     button: {
         height: 80,
         width: 300,
     }
  });

export default LandingPage;