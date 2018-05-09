import React from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

let submitUserLoginInformation = (props) => {
    console.log(props);
    // let email = event.target.email.value;
    // let password = event.target.password.value;
    // console.log(email, password)
    // event.target.reset();
};

let LoginScreen = (props) =>
    <View style={styles.container}>
        <Text>LOGIN</Text>
        <TextInput 
            style={styles.field}
            placeholder='Email Address'/>

        <TextInput
            style={styles.field}
            placeholder='Password'
        />

        <View style={styles.register}>
            <Text>Not Registered?</Text>
            <Button title="Create an account"
            onPress={() => props.navigation.navigate('Register')}
        />
        </View>

        <Button
            style={styles.button}
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
     field: {
       height: 40, 
       width: 200,
       margin: 10,
       borderColor: 'gray', 
       borderWidth: 1
     },
     register: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
     }
  });

    export default LoginScreen;