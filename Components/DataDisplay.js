import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import plant from './images/clipart2.png';
import Moment from 'react-moment';
import 'moment-timezone';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f9d2',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      marginBottom: 10, 
      flexDirection: 'row'
    },
    readings: {
        flex: 1,
        backgroundColor: '#f1f9d2',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginBottom: 10, 
        flexDirection: 'column'
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
        <Moment format="YYYY-MM-DD HH:mm" element={Text}>{data.created}</Moment>
        <Text>Temperature: {data.temp} °C</Text>
        <Text>Sunlight: {data.sun} lx</Text>
        <Text>Soil Moisture: {data.moist} %</Text>
        <Text>Humidity: {data.humidity} %</Text>
        </View>
    </View>

export let MoistureDisplay = ({data}) =>
    <View style={styles.readings}>
        <Moment format="YYYY-MM-DD HH:mm" element={Text}>{data.created}</Moment>
        <Text>Moisture: {data.moist} %</Text>
    </View>

export let TemperatureDisplay = ({data}) =>
    <View style={styles.readings}>
        <Moment format="YYYY-MM-DD HH:mm" element={Text}>{data.created}</Moment>
        <Text>Temperature: {data.temp} °C</Text>
    </View>


export let HumidityDisplay = ({data}) =>
    <View style={styles.readings}>
        <Moment format="YYYY-MM-DD HH:mm" element={Text}>{data.created}</Moment>
        <Text>Humidity: {data.humidity} %</Text>
    </View>

export let SunlightDisplay = ({data}) =>
    <View style={styles.readings}>
        <Moment format="YYYY-MM-DD HH:mm" element={Text}>{data.created}</Moment>
        <Text>Sunlight: {data.sun} lx</Text>
    </View>

export default DataDisplay;