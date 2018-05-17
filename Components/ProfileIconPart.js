import React from 'react';
import { StyleSheet, View} from 'react-native';
import ProfileIcon from './ProfileIcon';
import LogOutBtn from './LogOutBtn';
import CopyTokenBtn from './CopyTokenBtn';
import FadeIn from './animations/FadeIn';


let ProfileIconPart = ({user, navigation}) =>
        <View style={styles.profileInfo}>
            <FadeIn time={1000}>
                <ProfileIcon user={user}/>
                <LogOutBtn navigation={navigation}/>
                <CopyTokenBtn />
            </FadeIn>
        </View>
   

const styles = StyleSheet.create({
    profileInfo: {
        flex: 2,
        alignSelf: 'stretch',
    },
});

export default ProfileIconPart;