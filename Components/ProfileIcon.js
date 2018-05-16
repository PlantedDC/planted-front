import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

let ProfileIcon = ({user}) => 
    <View style={styles.icon}>
        <Image 
            style={{width: 90, height: 90}}
            source={{uri: user.avatar}} />
        <Text>Welcome {user.username}!</Text>
    </View>

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

export default ProfileIcon;