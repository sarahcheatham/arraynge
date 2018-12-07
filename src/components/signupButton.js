import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default function SignUpButton(props){
    return(
        <button className={props.className} onClick={props.onClick}>
            <Link to={'/signup'}>
                CREATE ACCOUNT NOW
            </Link>
        </button> 
       
    )
}
