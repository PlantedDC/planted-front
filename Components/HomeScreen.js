import React from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {getData} from './helperFunctions/fetchRequests';
import { updateUserObject, updatePlantData } from '../actions';


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

    let {navigation} = this.props;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

    return <View style={styles.container}>
        <Text>PLANTED is AWESOME!!!</Text>
        <Text>This would show our current data!!!!</Text>
        <Button 
        title="Profile"
        onPress={() => navigation.navigate('Profile')} />
    </View>
}
}

let mapStateToProps = (state) => {
  return {token: state.token,
          isUserLoggedIn: state.isUserLoggedIn}
};

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

let HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);

export default HomeScreen;