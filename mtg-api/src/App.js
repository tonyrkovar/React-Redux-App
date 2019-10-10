import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CardDisplay from './components/CardDisplay'
import SetCardsDisplay from './components/SetCardsDisplay'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={CardDisplay} />
        <Route path='/ktk' component={SetCardsDisplay} />
      </Router>
    </div>
  );
}

export default App;
