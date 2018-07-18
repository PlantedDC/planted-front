import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Image, AsyncStorage, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Chart from './Chart';
import getDataArr from './helperFunctions/getDataArr';



class ProfileDataPart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataLast24Hours: {}
        }
    }

    componentDidMount() {
        fetch('https://planted-dc.herokuapp.com/graphql', {
            headers: {
                "authorization": this.props.token,
            },
            method: 'POST',
            body:` 
                query {
                    currentUser {
                        getPlantDataFor(hours: 24) {
                            temp
                            sun
                            moist
                            humidity
                            created
                            dataid
                        }
                    }
                }`
            })
            .then( res => res.json())
            .then( data => this.setState({dataLast24Hours: data}))
        }
    

    render() {
        // let {data} = this.props;
        let { dataLast24Hours } = this.state;
        // let latestData = data && data[0]
        
        let data;
        if (dataLast24Hours.data) data = dataLast24Hours.data.currentUser.getPlantDataFor;

        return (
            <View style={styles.data}>
                <Text style={styles.textBold}>Last 24 Hours:</Text>
                { dataLast24Hours.data && 
                    <FlatList
                        style={{alignSelf: 'stretch'}}
                        data={[
                            {key: 'temp', title: 'Temperature: °C'}, 
                            {key: 'sun', title: 'Sunlight: lx'}, 
                            {key: 'moist', title: 'Soil Moisture: %'}, 
                            {key: 'humidity', title: 'Humidity: %'}]}
                        renderItem={({item}) => 
                            <View style={{alignSelf: 'stretch'}}>
                                <Text style={styles.text}>{item.title}</Text>
                                <Chart data={getDataArr(data, item.key)}/>
                            </View>
                        }
                    />
                    
                    
                }
            </View>
        )
    }
}





const styles = StyleSheet.create({
    chart: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        
    },
    data: {
        // backgroundColor: 'gray',
        flex: 3,
        alignItems: 'center',
        alignSelf: 'stretch',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        margin: 0,
        textAlign: 'center',
    },
    textBold: {
        margin: 10,
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default connect(
    state => ({
        data: state.plantData,
        token: state.token,
    })
)(ProfileDataPart);