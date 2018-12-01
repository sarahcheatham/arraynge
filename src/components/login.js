import React, {Component} from "react";


export default class Login extends Component {
    constructor(props){
        super(props);
        const style = this.props.style;
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
        const required = ['Required', '*']
        const turnRed = ()=>{
            const red = {
                color: 'red'
            }
            console.log(required[1])
            
        }
        return(
            <div className="login">
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <legend className="loginLegend">Sign In</legend>
                    <p id="required" style={turnRed()}>{required}</p>
                    <label className="email">
                        Email Address *<br/>
                        <input
                            autoFocus
                            type="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className="pwd">
                        Password * <br/>
                        <input
                            type="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <span className="box">
                        <div className="overlay">
                        </div>
                        <button
                        disabled={!this.validateForm()}
                        type="submit"
                        className="loginButton"
                        >
                            Login
                        </button>
                    </span>
                </form>
            </div>
        );
    }
}