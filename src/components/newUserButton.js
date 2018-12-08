import React, {Component} from "react";
import { Link } from 'react-router-dom';

export default function NewUserButton(props){
    const styles = {
        color: 'white',
        textDecoration: 'none'
    }
    return(
        <button className={props.className} onClick={props.onClick}>
            <Link to={'/gradelevel'} style={styles}>
                CREATE AN ACCOUNT
            </Link>
        </button>   
    )
}