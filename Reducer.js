import reducers from './actions';

const initialState = {
    isUserLoggedIn: false, 
    token: '',
    plantData: null,
    userObject: {}
}

let fallbackReducer = state => state; 

let reducer = (state = initialState, action) => {
    let babyReducer = reducers[action.type];
    babyReducer = babyReducer || fallbackReducer;
    let newState = babyReducer(state, action);
    return newState;
}

export default reducer;