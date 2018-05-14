import React from 'react';
import { Text, View } from 'react-native';

let DataDisplay = ({data}) => 
<View>
        <Text>{data.time}</Text>
        <Text>Temperature: {data.temp}</Text>
        <Text>Sunlight: {data.sun}</Text>
        <Text>Soil Moisture: {data.moist}</Text>
        <Text>Humidity: {data.ph}</Text>
    </View>

export default DataDisplay;