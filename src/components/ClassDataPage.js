import React, {Component} from "react";
import DropMenu from './dropMenu';
import SubHeader from './SubHeader';
import ClassDataButton from './ClassDataButton';

export default class ClassDataPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            gradeLevel: "",
            subject: ""
        }
    }

    handleSubjectClick(e){
        console.log(e.target.text)

    }

    handleGradeLevelClick(){

    }
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
                        <ClassDataButton className="mathButton" text="MATH" onClick={(e)=>{this.handleSubjectClick(e)}}/>
                        <ClassDataButton className="readingButton" text="READING"/>
                    </div>
                </span>
            </div>
        )
    }
}