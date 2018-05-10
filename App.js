import React from 'react';
import {Provider} from 'react-redux';
import RootStack from './RootStack';
import store from './Store';

let App = () => 
    <Provider store={store}>
        <RootStack />
    </Provider>


export default App;