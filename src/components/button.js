import React, {Component} from "react";

export default class Button extends React.Component{
    render(){
        return(
            <span className={this.props.className}>
                <div className="overlay">
                </div>
                <button
                    block
                    disabled={this.props.disabled}
                    text={this.props.text}
                    type="submit"
                    className="loginButton">
                </button>
            </span>
        )
    }
}