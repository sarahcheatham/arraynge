import React, {Component} from "react";
import Login from './login 2';
import SignUp from './signup';
import LoginButton from './loginButton';
import SignUpButton from './signupButton';

export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            isClicked: false,
            isLoggedIn: false,
        }

        this.handleSignupClick = this.handleSignupClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

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
    render(){

        return(
            <div className="loginPage">
                <Login/>
                <SignUp/>
                <div className='buttonBox'>
                    <LoginButton onClick={(e)=>{this.handleLoginClick(e)}} className="loginButton"/>
                    <SignUpButton className='signupButton' onClick={(e)=>{this.handleSignupClick(e)}}/>   
                </div>
            </div>
        )
    }
}
