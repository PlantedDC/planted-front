import React, {Component} from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import logo from './images/logo.png';
import { connect } from 'react-redux';
import {submitUserLoginInformation} from './helperFunctions/Login';
import {updateUserObject, updateIsUserLoggedIn} from '../actions';

class LoginScreenDumb extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
      }

    render() {
        let {navigation, dispatch} = this.props;
        let {email, password} = this.state;

        let loginUser = () => {
            submitUserLoginInformation(email, password)
            .then(res => dispatch(updateUserObject(res)))
            .then(dispatch(updateIsUserLoggedIn()))
            .then(this.setState({email: '', password: ''}))
            .then(navigation.navigate('Home'))
        }

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
                backgroundColor: '#077C4A',
                alignItems: 'center',
                justifyContent: 'center',
            },
             field: {
               height: 40, 
               width: 300,
               marginBottom: 20,
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
                 marginBottom: 50,
             },
             font: {
                fontSize: 15,
            }
        })

        return <View style={styles.container}>
        <Image 
        source={logo}
        style={styles.logo}
        />
        <TextInput 
            style={styles.field}
            placeholder='email@planted.com'
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}/>

        <TextInput
            style={styles.field}
            placeholder='Password'
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
        />
        <View style={styles.register}>
            <Text style={styles.font}>Not Registered?</Text>
            <Button 
            title="Create an account"
            style={styles.button}
            onPress={() => navigation.navigate('Register')}
        />
        </View>
        <View style={styles.button}>
            <Button
            style={styles.register}
            title="Submit"
            color="white"
            onPress={() => loginUser()}
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