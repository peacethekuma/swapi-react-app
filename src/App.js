import React, { Component } from 'react';
import './App.css';
import PersonList from './PersonList';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="tc"> Star Wars</h1>
        <PersonList />
      </div>
    );
  }
}

export default App;
