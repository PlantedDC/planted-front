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

let reducers = {
    [updateIsUserLoggedIn]: updateIsUserLoggedInAction,
    [updateToken]: updateTokenAction,
}

export default reducers;