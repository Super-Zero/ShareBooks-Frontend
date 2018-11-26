import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom'


var divStyle = {
  width: '500px',
};


export default class LoginForm extends React.Component {
  render() {
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
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>

              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>


              
              
              
            </Form>

          </div>

          <div className="container center-block" style={divStyle}>
                <div className="row">
                  <div className="col-lg-3 col-lg-offset-3 text-center sec-1-btn">
                    <div className="btn-group buttons">
                      <Button>Submit</Button>
                    </div>      
                  </div>
                  
                  <div className="col-lg-3 text-center sec-1-btn">
                    <div className="btn-group buttons">
                      <Link to='/signupform'>
                        <Button>Create Account</Button>
                      </Link> 
                    </div>     
                  </div>

                </div>
              </div>

        </div>
      
    );
  }
}