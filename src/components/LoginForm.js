import React, { Component } from "react";
import { Button, Input, Alert } from "reactstrap";
import { Redirect } from "react-router-dom";
import { login } from "../API";

import NavBar from "./NavBar";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      user: {},
      successAccount: false,
      authenticationIncorrect: false
    };
  }

  valueChanged = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  };

  handleLogin = event => {
    event.preventDefault();
    const that = this;
    login(that.state.user).then(res => {
      if (res.user_id !== 0) {
        console.log("User ID: ", res.user_id);
        that.setState({ id: res.user_id });
        that.setState({ successAccount: true });
        // this.props.setUser({ id: res.user_id });
      } else {
        this.setState({ authenticationIncorrect: true });
      }
    });
  };

  // closeAlertMessage(){
  //   this.setState({authenticationIncorrect: false})
  // }

  toggle() {
    this.setState({
      authenticationIncorrect: !this.state.authenticationIncorrect
    });
  }

  // renderAlert() {
  //   if (this.state.authenticationIncorrect) {
  //     // this.setState({authenticationIncorrect: false})
  //     return (
  //       <div class="alert alert-danger alert-dismissible text-center" role="alert">
  //         <strong>Incorrect email or password.</strong>
  //         <button onclick={this.closeAlertMessage} type="button" class="close" data-dismiss="alert" aria-label="Close">
  //           <span aria-hidden="true">&times;</span>
  //         </button>
  //      </div>
  //     );
  //   }
  // }

  render() {
    //console.log('---props in login', this.props);
    // console.log("User Id inside render: ", this.state.id);
    // console.log("Account State: ", this.state.successAccount)
    if (this.state.successAccount) {
      // console.log("Account True")
      return (
        <Redirect
          to={{
            pathname: "/profilepage/" + this.state.id,
            state: { uid: this.state.id }
          }}
        />
      );
    }

    const test = this.state.authenticationIncorrect;
    console.log("Authentication: ", test);

    return (
      <body className="bg-default">
        <div className="main-content">
          {/* NAVIGATION BAR */}

          <NavBar />

          {/* HEADER */}

          <div className="header bg-gradient-primary py-7 py-lg-8">
            <div className="container">
              <div className="header-body text-center mb-7">
                <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-6">
                    <h1 className="text-white">Welcome!</h1>
                    <p className="text-lead text-light">
                      Use these awesome forms to login or create new account in
                      your project for free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                x="0"
                y="0"
                viewBox="0 0 2560 100"
                preserveAspectRatio="none"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>

          {/* LOGIN FORM */}

          {/* ***************************************************************************** */}
          <div className="container mt--8 pb-5">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-7">
                {/* ALERT MESSAGE */}

                <Alert
                  className="text-center"
                  color="danger"
                  isOpen={this.state.authenticationIncorrect}
                  toggle={this.toggle.bind(this)}
                >
                  Incorrect email or password.
                </Alert>

                <div className="card bg-secondary shadow border-0">
                  <div className="card-header bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-3">
                      <small>Sign in with</small>
                    </div>

                    <div className="btn-wrapper text-center">
                      <a href="" className="btn btn-neutral btn-icon">
                        <span className="btn-inner--icon">
                          <img src={require("../images/github.svg")} />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </a>
                      <a href="" className="btn btn-neutral btn-icon">
                        <span className="btn-inner--icon">
                          <img src={require("../images/google.svg")} />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </a>
                    </div>
                  </div>

                  <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign in with credentials</small>
                      <br />
                      <small>
                        You can use <strong>admin@argon.com</strong> and{" "}
                        <strong>secret</strong> to login
                      </small>
                    </div>

                    {/* Form */}

                    <form>
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-email-83" />
                            </span>
                          </div>

                          <Input
                            type="email"
                            onChange={this.valueChanged}
                            name="email"
                            id="email"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-lock-circle-open" />
                            </span>
                          </div>
                          {/* <input className="form-control" placeholder="Password" type="password" name="password"></input> */}
                          <Input
                            type="password"
                            onChange={this.valueChanged}
                            name="password"
                            id="password"
                            placeholder="password"
                          />
                        </div>
                      </div>

                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          for=" customCheckLogin"
                        >
                          <span className="text-muted">Remember me</span>
                        </label>
                      </div>

                      <div className="text-center">
                        <Button
                          className="btn btn-primary my-4"
                          onClick={this.handleLogin}
                        >
                          Sign in
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-6">
                    <a href="/reset-password" className="text-light">
                      <small>Forgot password?</small>
                    </a>
                  </div>

                  <div className="col-6 text-right">
                    <a href="/signupform" className="text-light">
                      <small>Create new account</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
