import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));