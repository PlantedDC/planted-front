import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import plant from './images/clipart2.png';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f9d2',
      alignItems: 'center',
      justifyContent: 'center',
      width: 350,
      marginBottom: 10, 
      flexDirection: 'row'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 20
    }
})

let DataDisplay = ({data}) => 
<View style={styles.container}>
        <Image 
          style={styles.image}
          source={plant}
        />
        <View>
        <Text>{data.created}</Text>
        <Text>Temperature: {data.temp} °C</Text>
        <Text>Sunlight: {data.sun} lx</Text>
        <Text>Soil Moisture: {data.moist} %</Text>
        <Text>Humidity: {data.ph} %</Text>
        </View>
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