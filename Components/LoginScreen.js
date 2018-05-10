import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import logo from './images/logo.png';

let submitUserLoginInformation = (props) => {
    console.log(props);
    // let email = event.target.email.value;
    // let password = event.target.password.value;
    // console.log(email, password)
    // event.target.reset();
};

let LoginScreen = (props) =>
    <View style={styles.container}>
        <Image 
        source={logo}
        style={styles.logo}
        />
        <Text style={styles.text}>Log In</Text>
        <TextInput 
            style={styles.field}
            placeholder='Email Address'/>

        <TextInput
            style={styles.field}
            placeholder='Password'
        />

        <View style={styles.register}>
            <Text style={styles.font}>Not Registered?</Text>
            <Button 
            title="Create an account"
            style={styles.button}
            onPress={() => props.navigation.navigate('Register')}
        />
        </View>

        <Button
            style={styles.register}
          title="Submit"
          color="#841584"
          onPress={() => submitUserLoginInformation()}
        />

        <Button
            style={styles.button}
          title="Go to Home"
          color="#841584"
          onPress={() => props.navigation.navigate('Home')}
        />
    </View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
     field: {
       height: 40, 
       width: 300,
       margin: 10,
       borderColor: 'gray', 
       borderWidth: 1,
       borderRadius: 5,
       paddingLeft: 10,
       backgroundColor: '#F0FBF0'

     },
     register: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
     },
     logo: {
         marginBottom: 30,
     },
     font: {
        fontSize: 15,
     }
  });

    export default LoginScreen;