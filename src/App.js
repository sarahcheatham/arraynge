import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
// import Login from './components/login';
import Navbar from './components/navbar';
import LoginPage from './components/loginPage';
// import LoginControl from './components/loginControl';
// import SignUp from './components/signup';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Navbar/>
        <LoginPage/>
        {/* <Login/> */}
        {/* <SignUp/> */}
        {/* <LoginControl/> */}

      </div>
    );
  }
}

export default App;
