import React, {Component} from 'react';

export default class LoginForm extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           userName: '',
           password: ''
       };
       this.handleUserInputChange = this.handleUserInputChange.bind(this);
       this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
   }

   handleUserInputChange(event){
       this.setState({userName: event.target.value})
    //    if(this.state.userName !== null)
   }

   handlePasswordInputChange(event){
       this.setState({password: event.target.value})
        console.log(this.state.password)
   }
    render(){
        
        return(
            <div className="login">
                <form className="loginForm">
                    <legend className="loginLegend">Login</legend>
                    <label className="username">
                        Username:{" "}
                        <input 
                            type="text" 
                            className="username" 
                            name="userName"
                            value={this.state.userName}
                            onChange ={this.handleUserInputChange}/>
                    </label>
                    <br />
                    <label className="pwd">
                        Password:{" "}
                        <input
                            type="text"
                            className="pwd"
                            name="password"
                            value={this.state.password}
                            onChange={this.handlePasswordInputChange}/>
                    </label>

                </form>
            </div>
        ) 
    }
}