const UPDATE_IS_USER_LOGGED_IN = "UPDATE_IS_USER_LOGGED_IN";
export let updateIsUserLoggedIn = () => ({type: UPDATE_IS_USER_LOGGED_IN});
let updateIsUserLoggedInAction = (state, action) => {
    return ({...state, isUserLoggedIn: true});
  }
updateIsUserLoggedIn.toString = () => UPDATE_IS_USER_LOGGED_IN;

const UPDATE_TOKEN = "UPDATE_TOKEN";
export let updateToken = (token) => ({type: UPDATE_TOKEN, payload: token});
let updateTokenAction = (state, action) => {
    return ({...state, token: action.payload});
  }
updateToken.toString = () => UPDATE_TOKEN;

const UPDATE_USER_OBJECT = "UPDATE_USER_OBJECT";
export let updateUserObject = (userData) => ({type: UPDATE_USER_OBJECT, payload: userData});
let updateUserObjectAction = (state, action) => {
    let newUserObject = Object.assign({}, action.payload);
    return ({...state, userObject: newUserObject});
  }
updateUserObject.toString = () => UPDATE_USER_OBJECT;

const UPDATE_PLANT_DATA = "UPDATE_PLANT_DATA";
export let updatePlantData = (plantData) => ({type: UPDATE_PLANT_DATA, payload: plantData});
let updatePlantDataAction = (state, action) => {
    return ({...state, plantData: action.payload});
  }
updatePlantData.toString = () => UPDATE_PLANT_DATA;

let reducers = {
    [updateIsUserLoggedIn]: updateIsUserLoggedInAction,
    [updateToken]: updateTokenAction,
    [updateUserObject] : updateUserObjectAction,
    [updatePlantData] : updatePlantDataAction
}

export default reducers;