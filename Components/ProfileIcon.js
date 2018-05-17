import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

let ProfileIcon = ({user}) => 
    <View style={styles.icon}>
        <Image 
            style={styles.image}
            source={{uri: user.avatar}} />
        <Text>Welcome {user.username}!</Text>
    </View>

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'yellow'
    },
    image: {
        width: 110, 
        height: 110, 
        borderRadius: 55
    }
    
});

export default ProfileIcon;