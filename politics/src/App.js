import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
/* IMPORT VIEWS */
import Hierarchy from './components/MyGovernment/Hierarchy';
import Ayuda from './components/MyGovernment/Ayuda';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <div className="body">
            <Route exact path="/" component={Hierarchy} />
            <Route exact path="/ayuda" component={Ayuda} />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
