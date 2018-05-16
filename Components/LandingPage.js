import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import logo from './images/logo_planted.png';
import FadeIn from './animations/FadeIn';

let LandingPage = (props) =>
    <View style={styles.container}>
        <FadeIn time={2000}>
        <Image 
        source={logo}
        style={styles.logo}
        />

        <View style={styles.login}>
        <TouchableOpacity 
            style={styles.login} 
            onPress={() => props.navigation.navigate('Login')}
        >
            <Text style={styles.button}>Log In</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.login}>

        <TouchableOpacity 
            style={styles.login} 
            onPress={() => props.navigation.navigate('Register')}
        >
            <Text style={styles.button}>Create Account</Text>
        </TouchableOpacity>
        </View>
        </FadeIn>
        
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
        color: 'white',
        fontSize: 20,
     }
  });

export default LandingPage;