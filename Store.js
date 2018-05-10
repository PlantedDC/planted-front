import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import reducer from './Reducer';


let store = createStore(
  reducer, devToolsEnhancer());

export default store;