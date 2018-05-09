const UPDATE_IS_USER_LOGGED_IN = "UPDATE_IS_USER_LOGGED_IN";
export let updateIsUserLoggedIn = () => ({type: UPDATE_IS_USER_LOGGED_IN});
let updateIsUserLoggedInAction = (state, action) => {
    return ({...state, isUserLoggedIn: true});
  }
updateIsUserLoggedIn.toString = () => UPDATE_IS_USER_LOGGED_IN;

const UPDATE_USER_OBJECT = "UPDATE_USER_OBJECT";
export let updateUserObject = (token) => ({type: UPDATE_USER_OBJECT, payload: token});
let updateUserObjectAction = (state, action) => {
    let newUserObject = Object.assign({}, action.payload);
    return ({...state, userObject: newUserObject});
  }
updateUserObject.toString = () => UPDATE_USER_OBJECT;

let reducers = {
    [updateIsUserLoggedIn]: updateIsUserLoggedInAction,
    [updateUserObject]: updateUserObjectAction,
}

export default reducers;