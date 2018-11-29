import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Login from './components/login';
import Navbar from './components/navbar';
import LoginControl from './components/loginControl';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Navbar/>
        <Login/>
        <LoginControl/>
      </div>
    );
  }
}

export default App;
