import React from 'react';
import { StyleSheet, View} from 'react-native';
import ProfileIcon from './ProfileIcon';
import LogOutBtn from './LogOutBtn';
import CopyTokenBtn from './CopyTokenBtn';


let ProfileIconPart = ({user, navigation}) =>
        <View style={styles.profileInfo}>
            <ProfileIcon user={user}/>
            <LogOutBtn navigation={navigation}/>
            <CopyTokenBtn />
        </View>
   

const styles = StyleSheet.create({
    profileInfo: {
        flex: 1,
        alignSelf: 'stretch',
    },
});

export default ProfileIconPart;