import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import LoginForm from './components/login-form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <LoginForm/>
      </div>
    );
  }
}

export default App;
