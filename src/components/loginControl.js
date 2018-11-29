import React, {Component} from "react";
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

export default class LoginControl extends Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        {isLoggedIn ? button = <LogoutButton onClick = {this.handleLogoutClick}/> : button = <LoginButton onClick = {this.handleLoginClick}/> }
        
        return(
            <div>{button}</div>
        )
    }
}


