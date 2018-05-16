import React, {Component} from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import logo from './images/logo_planted.png';
import { connect } from 'react-redux';
import {submitNewUserInformation, setTokenToAsyncStorage} from './helperFunctions/Login';
import {updateUserObject, updateIsUserLoggedIn, updateToken} from '../actions';

class RegisterScreenDumb extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', username: '', avatar: '' };
      }

    registerUser() {
        let {navigation, dispatch} = this.props;
        let {email, password, username, avatar} = this.state;
        let userEmail = email.trim().toLowerCase();
        let userPassword = password.trim();
        submitNewUserInformation(userEmail, userPassword, username, avatar)
        .then( res => res.text())
        .then(res => {
            setTokenToAsyncStorage(res);
            dispatch(updateToken(res));
            dispatch(updateIsUserLoggedIn());
            this.setState({email: '', password: '', username: '', avatar: ''});
            navigation.navigate('Home')
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
        <Text style={styles.label}>Create a username</Text>
        <TextInput 
            style={styles.field}
            placeholder='username'
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}/>
        <Text style={styles.label}>Enter your email</Text>
        <TextInput 
            style={styles.field}
            placeholder='email@planted.com'
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}/>
        <Text style={styles.label}>Create a password</Text>
        <TextInput
            style={styles.field}
            placeholder='Password123'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
        />
        <Text style={styles.label}>Link to Avatar</Text>
        <TextInput
            style={styles.field}
            placeholder='Image URL'
            onChangeText={(avatar) => this.setState({avatar})}
            value={this.state.avatar}
        />
        <View style={styles.register}>
            <Text style={styles.font}>Already Registered?</Text>
            <Button 
            title="Sign In Here"
            color="#5c720d"
            onPress={() => navigation.navigate('Login')}
        />
        </View>
        <View style={styles.button}>
            <Button
            style={styles.register}
            title="Submit"
            color="white"
            onPress={() => this.registerUser()}
            />
        </View>
        </View>
}
}


let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

let RegisterScreen = connect(
    null,
    mapDispatchToProps
)(RegisterScreenDumb);

export default RegisterScreen;