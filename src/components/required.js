import React, {Component} from "react";
import Star from './star'

export default class Required extends Component{
    render(){
        
        
        return(
            <div className={this.props.className}>
                Required
                <Star />
            </div>
        )
    }
}

