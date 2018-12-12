import React, {Component} from "react";
import Required from './required';
import Star from './star';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
    };

    handleChange = (event)=>{
        return event.target.id === 'email' ? this.setState({email: event.target.value}) : this.setState({password: event.target.value})
    };

    handleSubmit = (event)=>{
        console.log(this)
    }

    render(){
        
        return(
            <div className="login">
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <legend className="loginLegend">SIGN IN</legend>
                    <Required/>
                    <label className="email">
                        Email Address<Star/><br/>
                        <input
                            autoFocus
                            type="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="pwd">
                        Password<Star/> <br/>
                        <input
                            type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <span className="box">
                        <span className="overlay">
                        </span>
                        <button
                        disabled={!this.validateForm()}
                        type="submit"
                        className="loginButton"
                        >
                            LOGIN
                        </button>
                    </span>
                </form>
            </div>
        );
    }
}