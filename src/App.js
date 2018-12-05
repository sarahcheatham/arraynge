import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import LoginPage from './components/loginPage';
import SignUpButton from './components/signupButton'

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
    return (
      <div className="App">
        <Header/>
        <Navbar/>
        <LoginPage/>
        <SignUpButton className='signupButton' onClick={(e)=>{this.handleSignupClick(e)}}/>
      </div>
    );
  }
}

export default App;
