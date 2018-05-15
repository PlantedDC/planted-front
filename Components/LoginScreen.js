import React, {Component} from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import logo from './images/logo_planted.png';
import { connect } from 'react-redux';
import {submitUserLoginInformation} from './helperFunctions/Login';
import {updateToken, updateIsUserLoggedIn} from '../actions';

class LoginScreenDumb extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
      }

    loginUser () {
        let {navigation, dispatch} = this.props;
        let {email, password} = this.state;
        let userEmail = (email.trim()).toLowerCase();
        let userPassword = password.trim();
        submitUserLoginInformation(userEmail, userPassword)
        .then((res) => {
            if (res) {
                dispatch(updateToken(res));
                dispatch(updateIsUserLoggedIn());
                this.setState({email: '', password: ''});
                navigation.navigate('Home');
            } else {
                this.setState({email: '', password: ''});
            }
        })
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
            button: {
                width: 200,
                height: 50,
                backgroundColor: '#5c720d',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
            },
             field: {
               height: 40, 
               width: 300,
               marginBottom: 20,
               borderColor: 'gray', 
               borderWidth: 1,
               borderRadius: 5,
               paddingLeft: 10,
               backgroundColor: '#f1f9d2'
        
             },
             register: {
                 flexDirection: 'row',
                 alignItems: 'center',
                 justifyContent: 'center',
                 width: 200,
                 height: 50,
             },
             logo: {
                marginBottom: 20,
                width: 300,
                height: 150,
                resizeMode: 'contain'
             },
             font: {
                fontSize: 15,
            },
            label: {
                width: 300,
                textAlign: 'left',
            }
        })

        return <View style={styles.container}>
        <Image 
        source={logo}
        style={styles.logo}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput 
            style={styles.field}
            placeholder='email@planted.com'
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}/>
        <Text style={styles.label}>Password:</Text>
        <TextInput
            style={styles.field}
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
        />
        <View style={styles.register}>
            <Text style={styles.font}>Not Registered?</Text>
            <Button 
            title="Create an account"
            color="#5c720d"
            onPress={() => navigation.navigate('Register')}
        />
        </View>
        <View style={styles.button}>
            <Button
            style={styles.register}
            title="Submit"
            color="white"
            onPress={() => this.loginUser()}
            />
        </View>
        </View>
}
}


let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let LoginScreen = connect(
    null,
    mapDispatchToProps
)(LoginScreenDumb);

export default LoginScreen;