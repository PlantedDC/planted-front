# Planted

## Overview:
The Planted project purpose is to assist users by collecting data from a variety of sensors ex. humidity, temperature, sunlight, and soil moister.  This in hopes of helping users to keep their plants alive and thriving.
Sensors send data to the server and the React Native app visualizes the data

#### Github Links:
[Planted Github |](https://github.com/PlantedDC)
<a href="https://github.com/PlantedDC/planted-back"> Back End |</a>
<a href="https://github.com/PlantedDC/hardware"> Hardware Side</a>


#### Watch demo:

<a href="https://youtu.be/lKG6Cvn-An0" target="_blank">
  <img src="https://user-images.githubusercontent.com/34459770/40526186-c12a01d0-5fb2-11e8-8817-634b20ed2d6e.png" height="100"/>
</a>

#### Screenshots:


<br/>

<div style=" display: flex; justify-content: space-between">
  <img src="https://user-images.githubusercontent.com/34459770/40523781-49cfe166-5fa5-11e8-92e7-f10cd1fe21dd.jpg" width="150" border="5" style="margin: 50px;"/>
  <img src="https://user-images.githubusercontent.com/34459770/40523784-4b9f7916-5fa5-11e8-8ce3-693efbe1f7f3.jpg" width="150" style="margin: 50px;"/>
  <img src="https://user-images.githubusercontent.com/34459770/40523785-4d19c620-5fa5-11e8-86ac-b28ddf2796ca.jpg" width="150" style="margin: 50px;"/>
  <img src="https://user-images.githubusercontent.com/34459770/40523786-4eb230f8-5fa5-11e8-8d4a-377df698907a.jpg" width="150" style="margin: 50px;"/>
  <img src="https://user-images.githubusercontent.com/34459770/40523789-4fd75b84-5fa5-11e8-9682-8fdc51fa327b.jpg" width="150" style="margin: 50px; border: 2px solid black"/>
</div>

#### We took it to school!
<div>
  <img src="https://user-images.githubusercontent.com/34459770/40523648-ae53b5fa-5fa4-11e8-90ee-90042c96d635.jpg" width="255" style="margin: 10px;"/>
  <img src="https://user-images.githubusercontent.com/34459770/40524387-44a91fd8-5fa8-11e8-94d9-69d46daed6f3.png" width="300" margin='10'/>
  
</div>


## Team Members & Roles:
* [Ashley Parker](https://github.com/codingandcaring) React Wizard|Developer
* [Illia Chaban](https://github.com/illiaChaban) Backend|Database|Chart Wizard|Developer
* [Nick Wilson](https://github.com/NickWilsonDev) Hardware/Electrician|Developer

## Technologies used:
* React Native
* React
* Redux
* D3
* Node
* GraphQL
* PostgreSQL 
* Javascript
* Heroku
* Python

## Code snippets:

```javascript
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
```

