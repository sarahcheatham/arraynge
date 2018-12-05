import React, {Component} from "react";


export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.handleSignupClick = this.handleSignupClick.bind(this);
        this.state={
            createNewUser: false
        }
    }
    handleSignupClick(){
        this.setState({createNewUser: true});
    }
    render(){
        const createNewUser = this.state.createNewUser;
        let content = null;

        return(
            <div className="signup">
                <h2 className="signupHeader">CREATE AN ACCOUNT</h2>
                <p className="signupText">Creating an account is super easy. <br/>Just click below to get started.</p>
                <span className="signupBox">
                        <div className="signupOverlay">
                        </div>
                        <button
                        type="submit"
                        className="signupButton"
                        onClick={this.handleSignupClick}
                        >
                            CREATE ACCOUNT NOW
                        </button>
                </span>
            </div>
        )
    }
}