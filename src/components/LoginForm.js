import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import {login, profile} from '../API'


var divStyle = {
  width: '500px',
};




export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={
         user: {},
         successAccount: false, 
     }

     let user_id = '';
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

    //console.log(this.state.user)

      login(this.state.user)
      .then(res => {
        // if (res.user_id != null){
        //     that.setState({successAccount: true})
        //     console.log("User exits");
        // }
        // else{
        //   console.log("User does not exits");
        // }
        //console.log(res);
      //   //console.log(result);
      //   //let user_id = result.user_id;
      //   // console.log(result.user_id);
      //   // profile(result)
      //   // .then(res =>{
          
      //   //   console.log(res);
      //   // })
      //   console.log(res);

      })

  };
  
  
  
  
  render() {

    // if (this.state.successAccount){
    //   return <Redirect to="/profile"/>
    // }

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