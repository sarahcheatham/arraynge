import React, {Component} from "react";

export default class SignUp extends Component {
    constructor(){
        super();
        this.state={
            createNewUser: false
        }
        this.handleSignupClick = this.handleSignupClick.bind(this);
    }
    handleSignupClick(){
        this.setState({createNewUser: true});
    }
    render(){
        // const createNewUser = this.state.createNewUser;
        // let content = null;

        return(
            <div className="signup">
                <h2 className="signupHeader">CREATE AN ACCOUNT</h2>
                <p className="signupText">Creating an account is super easy. <br/>Just click below to get started.</p>
                <button
                    className="signupButton"
                    onClick={this.handleSignupClick}
                >
                    CREATE ACCOUNT NOW
                </button>
            </div>
        )
    }
}