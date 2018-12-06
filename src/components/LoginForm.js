import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, Redirect} from 'react-router-dom';
import {login, profile} from '../API';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

var divStyle = {
  width: '500px',
};

var alertStyle = {

  width: '250px',
};


export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        id: 0,
         user: {},
         successAccount: false,
     }
}

valueChanged = (event) => {
  const {name, value} = event.target;
  this.setState((prevState) => ({
      user: {
          ...prevState.user,
          [name]: value
      }
  }));
};

  handleLogin = (event) => {
    event.preventDefault();
    const that = this;
      login(that.state.user)
      .then(res => {
        if (res.user_id != 0){
          Alert.success('You are successfully authenticated', {
            position: 'top',
            effect: 'slide',
            onShow: function () {
                console.log('aye!')
            },
            onClose: function () {
              that.setState({id: res.user_id})           
              that.setState({successAccount: true})
            },
            beep: false,
            timeout: 2000,
            offset: 100
          })   
        }
        else{
          Alert.error('Incorrect email or password', {
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
      })
  };
  
  
  render() {

    if (this.state.successAccount){
      return <Redirect to={{
           pathname: '/profilepage',
           state:{uid: this.state.id}
          }}/>
    }

    return (

        <div className="container jumbotron">

          <div className="container text-center" style={alertStyle}>
                <span className="container text-center" style={alertStyle}>
                    {this.props.children}
                </span>
                <Alert stack={{limit: 3}} />
            </div>

          <div className="container text-center">
              <h1 className="display-4">Sign in to your account</h1>
          </div>

          <br/>

          <div className="container center-block" style={divStyle}>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" onChange={this.valueChanged} name="email" id="email" placeholder="name@example.com" />
              </FormGroup>

              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" onChange={this.valueChanged} name="password" id="password" placeholder="password" />
              </FormGroup>
            </Form>

            <div className="container">
              <div className="row">
                <div className="col-sm text-center">
                <Button onClick={this.handleLogin} className="center-block bg-primary">Submit</Button>
                </div>
                <div className="col-sm text-center">
                  <Link to='/signupform'>
                    <Button className="center-block bg-primary">Create Account</Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
    );
  }
}