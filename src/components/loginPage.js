import React, {Component} from "react";
import Login from './login';
import SignUp from './signup';

export default class LoginPage extends Component{

    render(){
        return(
            <div className="loginPage">
                <Login/>
                <SignUp/>
            </div>
        )
    }
}