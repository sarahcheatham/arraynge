import React, {Component} from "react";
import Login from './login';
import SignUp from './signup';
import SignUpButton from  './signupButton';

export default class LoginPage extends Component{

    render(){
        // let createNewUser = this.state.createNewUser;
        return(
            <div className="loginPage">
                <Login/>
                <SignUp/>
            </div>
        )
    }
}
