import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import ProfileIconPart from './ProfileIconPart';
import ProfileDataPart from './ProfileDataPart';

let ProfileScreen = (props) => {
    let { userObject, navigation } = props;
    // console.log(props.state)
    return (
        <View style={styles.container}>
            <ProfileIconPart user={userObject} navigation={navigation}/>
            <ProfileDataPart />
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default connect(
    (state,props) => ({
        navigation: props.navigation,
        userObject: state.userObject,
        // state: state,
    })
)(ProfileScreen);