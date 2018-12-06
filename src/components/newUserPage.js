import React, {Component} from "react";
import Required from './required';
import Star from './star';

export default class NewUserPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleChange = (event)=>{
        console.log(event)
        // return event.target.id === 'email' ? this.setState({email: event.target.value}) : this.setState({password: event.target.value})
      };
    render(){
        return(
            <div className='newUserPage'>
                <h1>CREATE ACCOUNT</h1>
                <form className="newUserForm">
                    <Required/>
                    <label className="firstName">
                        First Name<Star/><br/>
                        <input
                            autoFocus
                            type="text"
                            id="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                    </label>
                </form>
            </div>
        )
    }
}