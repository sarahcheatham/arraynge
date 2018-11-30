import React, {Component} from "react";


export default class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }
    validateForm(){
        if(this.state.email.length > 0 && this.state.password.length > 0){
            if(this.checkEmail()){
                console.log('true')
            }else {
                console.log('false')
            }
        }
    };

    checkEmail(){
        return this.state.email.includes('harmonytx.org');
    }

    handleChange = (event)=>{
        return event.target.id === 'email' ? this.setState({email: event.target.value}) : this.setState({password: event.target.value})
    };

    handleSubmit = (event)=>{
        console.log(this)
    }

    render(){
        return(
            <div className="signup">
                <form className="signupForm" onSubmit={this.handleSubmit}>
                    <legend className="signupLegend">Sign Up</legend>
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
                    <span className="box2">
                        <div className="overlay2">
                        </div>
                        <button
                        disabled={!this.validateForm()}
                        type="submit"
                        className="signupButton"
                        >
                            Register
                        </button>
                    </span>
                </form>
            </div>
        );
    }
}