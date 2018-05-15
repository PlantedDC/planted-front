import React from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {getData} from './helperFunctions/fetchRequests';
import { updateUserObject, updatePlantData } from '../actions';
import DataDisplay from './DataDisplay';

class HomeScreenComponent extends React.Component {

  static navigationOptions = ({ navigation }) => {

    return {
      headerRight: (
        <Button
        title="Profile"
        color="green"
        onPress={() => navigation.navigate('Profile')}
        />
      ),
    };
  }

  componentDidMount() {
    getData(this.props.token)
    .then((res) => {
      this.props.dispatch(updateUserObject(res.data.currentUser.user));
      this.props.dispatch(updatePlantData(res.data.currentUser.plantData));
    })
  }

  render() {

    let {navigation, plantData} = this.props;

    const styles = StyleSheet.create({
      dataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      font: {
        fontSize: 20,
      }
    });

    let DisplayDataOnScreen = () => {
      let key = 0;
      if (plantData === null || plantData === undefined) {
        return <View><Text>Loading...</Text></View>
      } else {
        return <FlatList
          data={plantData}
          renderItem={({item}) => <DataDisplay data={item} />}
          />
      }
    };

    return <View style={styles.container}>
      <Text style={styles.font}>Current Readings</Text>
      <DisplayDataOnScreen />
      </View>
}
}

let mapStateToProps = (state) => {
  return {token: state.token,
          plantData: state.plantData}
};

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

let HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);

export default HomeScreen;