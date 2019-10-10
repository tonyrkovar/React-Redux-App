import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddlewar, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './App.css'

function App() {
  return (
    <div className="App">
      <p> MTG API</p>
    </div>
  );
}

export default App;
