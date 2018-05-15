import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image, AsyncStorage } from 'react-native';
import {CopyToClipboard} from 'react-copy-to-clipboard';


let ProfileIconPart =  ({user, navigation}) => {
    console.log('rendering', user)
    // let token = await AsyncStorage.getItem('token')
    // console.log(token)
    return (
        <View style={styles.profileInfo}>
            <View style={styles.icon}>
                <Image 
                    style={{width: 90, height: 90}}
                    source={{uri: user.avatar}} />
                <Text>Welcome {user.username}!</Text>
            </View>
            <View style={styles.logout}>
                <Button 
                    style={styles.logoutBtn}
                    title="Log Out"
                    onPress={() => {
                        return;
                    }}
                />
            </View>
            <Button 
                title='Your Token'
                onPress={() => {
                    return;
                }}
            />
        </View>
    )
}
   

const styles = StyleSheet.create({
    logout: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    profileInfo: {
        flex: 1,
        // width: 1,
        height: 1,
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    }
    
});

export default ProfileIconPart;