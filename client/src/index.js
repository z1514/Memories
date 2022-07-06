import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'

import App from './App';
import './index.css';

//compose style here
//Reducers can also specify an initial value by looking for an incoming state argument that is undefined, and returning the value they'd like to use as a default.
//https://redux.js.org/usage/structuring-reducers/initializing-state
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root')
);