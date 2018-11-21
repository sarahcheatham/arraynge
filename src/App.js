import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Login/>
      </div>
    );
  }
}

export default App;
