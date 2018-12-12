import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
// import SideNav from './components/sideNav';
import Navbar from './components/navbar';
import LoginPage from './components/loginPage';
import NewUserPage from './components/newUserPage';
import ClassDataPage from './components/ClassDataPage';
// import Footer from './components/Footer';



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
      return (
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Navbar/>
            <div className="page">
              <Switch>
                <Route path="/signup" component={NewUserPage}/>
                <Route path="/classdata" component={ClassDataPage}/>
                <Route path='/' component={LoginPage}/>
              </Switch>
            </div>
            {/* <Footer/> */}
          </div>
        </BrowserRouter>
      ); 
    }
  }

export default App;
