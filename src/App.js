import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import LoginPage from './components/loginPage';
import SignUpButton from './components/signupButton';
import NewUserPage from './components/newUserPage';

class App extends Component {
  constructor(){
    super();
    this.state={
        isClicked: false
    }
    this.handleSignupClick = this.handleSignupClick.bind(this);
  };

  handleSignupClick(e){
    e.preventDefault();
    console.log(e)
    this.setState({isClicked: true})
  }

  render() {
    let isClicked = this.state.isClicked;
    {if (this.state.isClicked == false){
      return (
        <div className="App">
          <Header/>
          <Navbar/>
          <LoginPage/>
          <SignUpButton className='signupButton' onClick={(e)=>{this.handleSignupClick(e)}}/>
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
