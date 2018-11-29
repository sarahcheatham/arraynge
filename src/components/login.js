import React, {Component} from "react";


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
                <form className="loginForm">
                    <legend className="loginLegend">Login</legend>
                    <label className="email">
                        Email:{" "}
                        <input
                            autoFocus
                            type="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="pwd">
                        Password:{" "}
                        <input
                            type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    {/* <span className="box">
                        <div className="overlay">
                        </div>
                        <button
                        disabled={!this.validateForm()}
                        type="submit"
                        className="loginButton"
                        >
                            Login
                        </button>
                    </span> */}
                </form>
            </div>
        );
    }
}