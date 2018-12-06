import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, Redirect} from 'react-router-dom';
import {login, profile} from '../API';



var divStyle = {
  width: '500px',
};


let supervariable = 0;

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        id: '',
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
        //console.log(res.user_id);
        if (res.user_id != 0){
            that.setState({id: res.user_id})           
            that.setState({successAccount: true})
        }
        else{
          console.log("User does not exits");
        }
      })
  };
  
  
  render() {
    //const { id } = this.state
    //console.log(this.state.successAccount);
    if (this.state.successAccount){
      console.log(supervariable);
      return <Redirect to={{
           pathname: '/profilepage',
           state:{uid: this.state.id}
          }}/>
    }

    return (

        <div className="container">

          <div className="container text-center">
              <h3>Login into your account</h3>
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
                <Button onClick={this.handleLogin} className="center-block">Submit</Button>
                </div>
                <div className="col-sm text-center">
                  <Link to='/signupform'>
                    <Button className="center-block">Create Account</Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
    );
  }
}