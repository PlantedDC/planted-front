import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

let ProfileDataPart = ({data}) => {
    let latestData = data && data[0]
    console.log('profile page data', latestData)
    
    return (
        <View style={styles.data}>
            <Text style={styles.textBold}>Latest Data:</Text>
            {latestData &&
                <View>
                    <Text style={styles.text}>Temperature: {latestData.temp} °C</Text>
                    <Text style={styles.text}>Sunlight: {latestData.sun} lx</Text>
                    <Text style={styles.text}>Soil Moisture: {latestData.moist} %</Text>
                    <Text style={styles.text}>Humidity: {latestData.humidity} %</Text>
                </View>
            }
        </View>
    )
}



const styles = StyleSheet.create({
    data: {
        // backgroundColor: 'gray',
        flex: 3,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        margin: 5,
        textAlign: 'center',
    },
    textBold: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default connect(
    state => ({
        data: state.plantData
    })
)(ProfileDataPart);