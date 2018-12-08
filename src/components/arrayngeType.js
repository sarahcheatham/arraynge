import React, {Component} from "react";
import DropMenu from './dropMenu';

export default class GradeLevel extends Component{
    render(){
        return(
            <div>
                <h1>GRADE LEVEL</h1>
                <p>Choose the grade level for your arrayngement</p>
                <DropMenu/>
            </div>
        )
    }
}