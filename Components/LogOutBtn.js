import React from 'react';
import { StyleSheet, View, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { updateUserLoggedOut } from '../actions';


let LogOutBtn = ({navigation, dispatch, state}) =>
    <View style={styles.logout}>
        <Button 
            style={styles.logoutBtn}
            title="Log Out"
            color='green'
            onPress={() => {
                AsyncStorage.removeItem('token')
                dispatch(updateUserLoggedOut())
                navigation.navigate('Login')
            }}
        />
    </View>

const styles = StyleSheet.create({
    logout: {
        position: 'absolute',
        right: 0,
        top: 0,
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 2,
        width: 85,
        
    },
    logoutBtn: {
        margin: 0,
        width: 85,
    }
    
});

export default connect(
    (state, props) => ({
        navigation: props.navigation,
        state: state,
    })
)(LogOutBtn);