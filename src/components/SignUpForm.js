import React, { Component, PropTypes } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, withRouter } from 'reactstrap';
import {createUser} from '../API'
import { Redirect, Route, Link } from "react-router-dom";
import Alert from 'react-s-alert';

import Main from './Main'


import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
//import 'react-s-alert/dist/s-alert-css-effects/genie.css';

var divStyle = {

 width: '500px',
};

var alertStyle = {

    width: '250px',
};



class SignupForm extends Component {
   // static propTypes = {
   //     className: PropTypes.string,
   // };

   constructor(props) {
       super(props);
       this.state={
            user: {},
            successAccount: false,
        }
   }



//let successAccount = false;

valueChanged = (event) => {
    const {name, value} = event.target;
    this.setState((prevState) => ({
        user: {
            ...prevState.user,
            [name]: value
        }
    }));
};

handleSubmit= (event) => {
    const that = this;
    event.preventDefault();
    var data = this.state.user
    createUser(data)
        .then(result => {
            if (result == 401){
                //alert("The email is already in use. Try a different email.");
                Alert.error('The email is already in use. Try a different email.', {
                    position: 'top',
                    effect: 'slide',
                    onShow: function () {
                        console.log('aye!')
                    },
                    beep: false,
                    timeout: 'none',
                    offset: 100
                });
            }

            if (result == 201){
                //alert("Your account has been created succefully.")
                //setTimeout(function() { alert("Your account has been created succefully"); }, "3000");
                
                Alert.success('Your account has been created succefully', {
                    position: 'top',
                    effect: 'slide',
                    onShow: function () {
                        console.log('aye!')
                    },
                    onClose: function () {
                        //console.log('onClose Fired!');
                        //this.props.history.push('/loginform');
                        //<Redirect to="/loginform"/>;
                        //redirectToLoginPage();
                       that.setState({successAccount: true})
                    },
                    beep: false,
                    timeout: 3000,
                    offset: 100
                });

                
                
            }
        });
};


   render() {

        if (this.state.successAccount){
            return <Redirect to="/loginform"/>
        }
    
       return (
       <div  className="container center-block" style={divStyle}>

        <div className="container text-center" style={alertStyle}>
            <span className="container text-center" style={alertStyle}>
                {this.props.children}
            </span>
            <Alert stack={{limit: 3}} />
        </div>


        

        <form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input onChange={this.valueChanged} type="text" name="first_name" id="first_name" placeholder="John" />
            </FormGroup>

            <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input onChange={this.valueChanged} type="text" name="last_name" id="last_name" placeholder="Doe" />
            </FormGroup>

            <FormGroup>
                <Label for="email">Email</Label>
                <Input onChange={this.valueChanged} type="email" name="email" id="email" placeholder="jdoe@example.com" />
            </FormGroup>

            <FormGroup>
                <Label for="password">Password</Label>
                <Input onChange={this.valueChanged} type="password" name="password" id="password" placeholder="password" />
            </FormGroup>

            <FormGroup>
                <Label for="phone">Phone</Label>
                <Input onChange={this.valueChanged} type="text" name="phone" id="phone" placeholder="123-456-7890" />
            </FormGroup>

            <FormGroup>
                <Label for="student_id">Student ID</Label>
                <Input onChange={this.valueChanged} type="text" name="student_id" id="student_id" placeholder="12345678" />
            </FormGroup>

            <FormGroup>
                <Label for="student_major">Major</Label>
                <Input onChange={this.valueChanged} type="text" name="student_major" id="student_major" placeholder="Computer Science" />
            </FormGroup>

            <FormGroup>
                <Label for="school">Select School</Label>
                <Input onChange={this.valueChanged} type="select" name="school" id="school">
                    <option>York College</option>
                    <option>Hunter College</option>
                    <option>City College</option>
                    <option>Brooklyn College</option>
                    <option>Queens College</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="student_classification">Classification</Label>
                <Input onChange={this.valueChanged} type="select" name="student_classification" id="student_classification">
                    <option>Freshmen</option>
                    <option>Sophmore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                </Input>
            </FormGroup>

            <div className="container text-center">
                <FormGroup>
                    <Button color="primary">Submit</Button>{' '}
                </FormGroup>
            </div>

            
            
        </form>
       </div>

        

       );
   }
}

export default SignupForm;