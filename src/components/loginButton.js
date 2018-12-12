import React from "react";

export default function LoginButton(props){
    return(
        <button className={props.className} onClick={props.onClick} onSubmit={props.onSubmit}>
            LOGIN
        </button> 
    )
}