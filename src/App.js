import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import LoginPage from './components/loginPage';
import NewUserPage from './components/newUserPage';


class App extends Component {
  constructor(){
    super();
    this.state={
        isClicked: false,
        isLoggedIn: false,
    }
    this.handleSignupClick = this.handleSignupClick.bind(this);
  };

  handleSignupClick(e){
    e.preventDefault();
    console.log(e)
    this.setState({isClicked: true})
  }
 

  render() {
  //   let isClicked = this.state.isClicked;
  //   // {if (isClicked === false){
  //     {if (isClicked === false){
  //       return (
  //         <div className="App">
  //           <Header/>
  //           <Navbar/>
  //           <LoginPage/>
  //           <div className='buttonBox'>
  //             <SignUpButton className='signupButton' onClick={(e)=>{this.handleSignupClick(e)}}/>
  //             <LoginButton onClick={(e)=>{this.handleLoginClick(e)}} className="loginButton"/>
  //           </div>
  //         </div>
  //       );
  //     }else {
  //        return (
  //          <div className="App">
  //            <Header/>
  //            <Navbar/>
  //            <NewUserPage/>
  //          </div>
  //        )
  //      }} 
  //    }
  //  }
   
  
      return (
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Navbar/>
            <Switch>
              <Route path="/signup" component={NewUserPage}/>
              <Route path='/' component={LoginPage}/>
            </Switch>
          </div>
        </BrowserRouter>
      ); 
    }
  }

export default App;
