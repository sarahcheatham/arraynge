import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import LoginPage from './components/loginPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Navbar/>
        <LoginPage />
      </div>
    );
  }
}

export default App;
