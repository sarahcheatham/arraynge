import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import LoginPage from './components/loginPage';
import LoginButton from './components/loginButton';
import SignUpButton from './components/signupButton';
import NewUserPage from './components/newUserPage';

class App extends Component {
  constructor(){
    super();
    this.state={
        isClicked: false,
        isLoggedIn: false,
    }

    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  };

  handleSignupClick(e){
    e.preventDefault();
    console.log(e)
    this.setState({isClicked: true})
  }

  handleLoginClick(e){
    e.preventDefault();
    console.log(e)
    this.setState({isLoggedIn: true})
  }

  render() {
    let isClicked = this.state.isClicked;
    {if (isClicked === false){
      return (
        <div className="App">
          <Header/>
          <Navbar/>
          <LoginPage/>
          <div className='buttonBox'>
            <SignUpButton className='signupButton' onClick={(e)=>{this.handleSignupClick(e)}}/>
            <LoginButton onClick={(e)=>{this.handleLoginClick(e)}} className="loginButton"/>
          </div>
        </div>
      );
    }else {
      return (
        <div className="App">
          <Header/>
          <Navbar/>
          <NewUserPage/>
        </div>
      )
    }} 
  }
}

export default App;
