import React, {Component} from "react";
import DropMenu from './dropMenu';
import SubHeader from './SubHeader';

export default class ArrayngeType extends Component{
    render(){
        return(
            <div className="classDataPage">
                <div className="classDataPageHeader">
                    <SubHeader text="ENTER CLASS DATA"/>
                </div>
                <span className="gradeLevel">
                    <p className="classDataSubHeader">GRADE LEVEL</p>
                    <p className="classDataText">Choose the grade level that you would like to arraynge</p>
                </span>
                <DropMenu className="dropMenuContainer"/>
                <span className="subject">
                    <p className="classDataSubHeader">SUBJECT</p>
                    <p className="classDataText">Choose the subject that you would like to arraynge</p>
                    <div className="subjectButtons">
                        <button className="mathButton">MATH</button>
                        <button className="readingButton">READING</button>
                    </div>
                </span>
            </div>
        )
    }
}