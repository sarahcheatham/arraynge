import React, {Component} from "react";


export default function SignUpButton(props){
    return(
        <button className={props.className} onClick={props.onClick}>
                CREATE ACCOUNT NOW
        </button> 
    )
}
