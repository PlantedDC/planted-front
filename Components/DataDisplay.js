import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d2f8d2',
      alignItems: 'center',
      justifyContent: 'center',
      width: 350,
      marginBottom: 10, 
    }
})

let DataDisplay = ({data}) => 
<View style={styles.container}>
        <Text>{data.time}</Text>
        <Text>Temperature: {data.temp}</Text>
        <Text>Sunlight: {data.sun}</Text>
        <Text>Soil Moisture: {data.moist}</Text>
        <Text>Humidity: {data.ph}</Text>
    </View>

export default DataDisplay;