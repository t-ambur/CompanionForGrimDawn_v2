import React, { Component } from 'react';
// style things in this file
//import './App.css';
//import CompanionV1 from './companionV1';
import Nav from './nav'
import './companion.css';


class App extends Component {
state = {
    data: null
  };

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default App;