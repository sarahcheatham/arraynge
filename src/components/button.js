import React, {Component} from "react";

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            isLoggedIn: false
        };
    }
    
    handleClick = (event)=>{
        console.log('here')
        const isLoggedIn = this.state.isLoggedIn;
        console.log(isLoggedIn)
        // this.setState({isLoggedIn: true})
        
        
    }
    render(){
        return(
            <button
                onClick={this.handleClick}
                type="submit"
                className="loginButton"
            >
                Login
            </button>
        )
    }
}