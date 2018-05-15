import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0FBF0',
      alignItems: 'center',
      justifyContent: 'center',
      width: 350,
      marginBottom: 10, 
    }
})

let DataDisplay = ({data}) => 
<View style={styles.container}>
        <Text>{data.created}</Text>
        <Text>Temperature: {data.temp} °C</Text>
        <Text>Sunlight: {data.sun} lx</Text>
        <Text>Soil Moisture: {data.moist} %</Text>
        <Text>Humidity: {data.ph} %</Text>
    </View>

export let MoistureDisplay = ({data}) =>
    <View style={styles.container}>
        <Text>{data.created}</Text>
        <Text>Moisture: {data.moist} %</Text>
    </View>

export let TemperatureDisplay = ({data}) =>
    <View style={styles.container}>
        <Text>{data.created}</Text>
        <Text>Temperature: {data.temp} °C</Text>
    </View>


export let HumidityDisplay = ({data}) =>
    <View style={styles.container}>
        <Text>{data.created}</Text>
        <Text>Humidity: {data.humidity} %</Text>
    </View>

export let SunlightDisplay = ({data}) =>
    <View style={styles.container}>
        <Text>{data.created}</Text>
        <Text>Sunlight: {data.sun} lx</Text>
    </View>

export default DataDisplay;