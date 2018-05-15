import React from 'react';
import { StyleSheet, View, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { updateUserLoggedOut } from '../actions';


let LogOutBtn = ({navigation, dispatch, state}) =>
    <View style={styles.logout}>
        <Button 
            style={styles.logoutBtn}
            title="Log Out"
            onPress={() => {
                AsyncStorage.removeItem('token')
                console.log(dispatch)
                dispatch(updateUserLoggedOut())
                console.log('just logged out', state)
                navigation.navigate('Login')
            }}
        />
    </View>

const styles = StyleSheet.create({
    logout: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    logoutBtn: {

    }
    
});

export default connect(
    (state, props) => ({
        navigation: props.navigation,
        state: state,
    })
)(LogOutBtn);