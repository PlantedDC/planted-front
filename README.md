# Planted

## Overview:
The Planted project purpose is to assist users by collecting data from a variety of sensors ex. humidity, temperature, sunlight, and soil moister.  This in hopes of helping the user to keep their plants alive and thriving.

<img src="https://user-images.githubusercontent.com/34459770/40523648-ae53b5fa-5fa4-11e8-90ee-90042c96d635.jpg" width="100" />
<img src="https://user-images.githubusercontent.com/34459770/40523781-49cfe166-5fa5-11e8-92e7-f10cd1fe21dd.jpg" width="100" display='inline-block'/>
<img src="https://user-images.githubusercontent.com/34459770/40523784-4b9f7916-5fa5-11e8-8ce3-693efbe1f7f3.jpg" width="100" display='inline-block'/>
<img src="https://user-images.githubusercontent.com/34459770/40523785-4d19c620-5fa5-11e8-86ac-b28ddf2796ca.jpg" width="100" display='inline-block'/>
<img src="https://user-images.githubusercontent.com/34459770/40523786-4eb230f8-5fa5-11e8-8d4a-377df698907a.jpg" width="100" />
<img src="https://user-images.githubusercontent.com/34459770/40523789-4fd75b84-5fa5-11e8-9682-8fdc51fa327b.jpg" width="100" />

![im2](https://user-images.githubusercontent.com/34459770/40523781-49cfe166-5fa5-11e8-92e7-f10cd1fe21dd.jpg =200)
![im1](https://user-images.githubusercontent.com/34459770/40523781-49cfe166-5fa5-11e8-92e7-f10cd1fe21dd.jpg =200)



## Github Link:
[Planted Github](https://github.com/PlantedDC/planted-front)

## Team Members & Roles:
* [Ashley Parker](https://github.com/codingandcaring) React Wizard|Developer
* [Illia Chaban](https://github.com/illiaChaban) Backend|Database|Chart Wizard|Developer
* [Nick Wilson](https://github.com/NickWilsonDev) Hardware/Electrician|Developer

## Technologies used:
### Languages:
* JavaScript

### Frameworks:
* React-Native

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

