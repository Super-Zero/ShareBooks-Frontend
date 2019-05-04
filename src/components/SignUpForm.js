import React, { Component, PropTypes } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  withRouter
} from "reactstrap";
import { createUser } from "../API";
import { Redirect, Route, Link } from "react-router-dom";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import Main from "./Main";

var divStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "gray"
};

var alertStyle = {
  width: "250px"
};

class SignupForm extends Component {
  // static propTypes = {
  //     className: PropTypes.string,
  // };

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      successAccount: false
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

  handleSubmit = event => {
    const that = this;
    event.preventDefault();
    var data = this.state.user;
    createUser(data).then(result => {
      if (result == 401) {
        //alert("The email is already in use. Try a different email.");
        Alert.error("The email is already in use. Try a different email.", {
          position: "top",
          effect: "slide",
          onShow: function() {
            console.log("aye!");
          },
          beep: false,
          timeout: "none",
          offset: 100
        });
      }

      if (result == 201) {
        that.setState({ successAccount: true });

        // Alert.success('Your account has been created succefully', {
        //     position: 'top',
        //     effect: 'slide',
        //     onShow: function () {
        //         console.log('aye!')
        //     },
        //     onClose: function () {
        //        that.setState({successAccount: true})
        //     },
        //     beep: false,
        //     timeout: 3000,
        //     offset: 100
        // });
      }
    });
  };

  render() {
    console.log(this.props);

    if (this.state.successAccount) {
      console.log("Account Created!!!!!!!!!!!!!!!!!!");
      return <Redirect to="/loginform" />;
    }

    return (
      <body className="bg-default">
        <div className="main-content">
          {/* NAVIGATION BAR */}
          <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
            <div className="container px-4">
              <a className="navbar-brandt" href="/">
                {/* <img src="img/brand/white.png" /> */}
                <a href="/">
                  <h2 className="text-white">ShareBooks</h2>
                </a>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-collapse-main"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbar-collapse-main"
              >
                {/* <!-- Collapse header --> */}

                <div className="navbar-collapse-header d-md-none">
                  <div className="row">
                    <div className="col-6 collapse-brand">
                      <a href="/">
                        <img src="img/brand/blue.png" />
                      </a>
                    </div>

                    <div className="col-6 collapse-close">
                      <button
                        type="button"
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbar-collapse-main"
                        aria-controls="sidenav-main"
                        aria-expanded="false"
                        aria-label="Toggle sidenav"
                      >
                        <span />
                        <span />
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Navbar items --> */}

                <ul className="navbar-nav ml-auto">
                  {/* <li className="nav-item">
                                        <a className="nav-link nav-link-icon" href="/">
                                            <i className="ni ni-planet"></i>
                                            <span className="nav-link-inner--text">Dashboard</span>
                                        </a>
                                    </li> */}

                  <li className="nav-item">
                    <a className="nav-link nav-link-icon" href="/signupform">
                      <i className="ni ni-circle-08" />
                      <span className="nav-link-inner--text">
                        {/* <NavLink classNameName="nav-link-inner--text" href="/signupform/">Register</NavLink> */}
                        Register
                      </span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link nav-link-icon" href="/loginform">
                      <i className="ni ni-key-25" />
                      <span className="nav-link-inner--text">Login</span>
                    </a>
                  </li>

                  {/* <li className="nav-item">
                                        <a className="nav-link nav-link-icon" href="/profile">
                                            <i className="ni ni-single-02"></i>
                                            <span className="nav-link-inner--text">Profile</span>
                                        </a>
                                    </li> */}
                </ul>
              </div>
            </div>
          </nav>

          {/* HEADER */}

          <div className="header bg-gradient-primary py-7 py-lg-8">
            <div class="container">
              <div class="header-body text-center mb-7">
                <div class="row justify-content-center">
                  <div class="col-lg-5 col-md-6">
                    <h1 class="text-white">Welcome!</h1>
                    <p class="text-lead text-light">
                      Use these awesome forms to login or create new account in
                      your project for free.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="separator separator-bottom separator-skew zindex-100">
              <svg
                x="0"
                y="0"
                viewBox="0 0 2560 100"
                preserveAspectRatio="none"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon class="fill-default" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </div>

          {/* FORM */}
          <div className="container mt--8 pb-5">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-lg-8">
                <div className="card bg-secondary shadow border-0">
                  <div className="card-header bg-transparent pb-5">
                    <div className="text-muted text-center mt-2 mb-4">
                      <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                      <a href="" className="btn btn-neutral btn-icon mr-4">
                        <span className="btn-inner--icon">
                          <img src="img/icons/common/github.svg" />
                        </span>
                        <span className="btn-inner--text">Github</span>
                      </a>
                      <a href="" className="btn btn-neutral btn-icon">
                        <span className="btn-inner--icon">
                          <img src="img/icons/common/google.svg" />
                        </span>
                        <span className="btn-inner--text">Google</span>
                      </a>
                    </div>
                  </div>

                  <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <small>Or sign up with credentials</small>
                    </div>

                    <form role="form" action="register" method="POST">
                      {/* NAMES */}
                      <div class="container">
                        <div class="row">
                          <div className="form-group col">
                            <div className="input-group input-group-alternative mb-3">
                              <div className="input-group-prepend">
                                {/* <span className="input-group-text"><i className="">First name:</i></span> */}
                                <span
                                  className="input-group-text"
                                  style={divStyle}
                                >
                                  First name:
                                </span>
                              </div>

                              <input
                                className="form-control"
                                onChange={this.valueChanged}
                                name="first_name"
                                placeholder="John"
                                type="text"
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group col">
                            <div className="input-group input-group-alternative mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  style={divStyle}
                                >
                                  Last name:
                                </span>
                              </div>
                              <input
                                className="form-control"
                                onChange={this.valueChanged}
                                name="last_name"
                                placeholder="Doe"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* EMAIL */}
                      <div class="container">
                        <div class="row">
                          <div className="form-group col">
                            <div className="input-group input-group-alternative mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  style={divStyle}
                                >
                                  Email:
                                </span>
                              </div>
                              <input
                                className="form-control"
                                onChange={this.valueChanged}
                                name="email"
                                placeholder="jdoe@example.com"
                                type="email"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* PASSWORD */}
                      <div class="container">
                        <div class="row">
                          <div className="form-group col">
                            <div className="input-group input-group-alternative mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  style={divStyle}
                                >
                                  Password:
                                </span>
                              </div>
                              <input
                                className="form-control"
                                onChange={this.valueChanged}
                                name="password"
                                placeholder="Password"
                                type="password"
                                required
                              />
                            </div>

                            <div className="text-muted font-italic">
                              <small>
                                password strength:{" "}
                                <span className="text-success font-weight-700">
                                  strong
                                </span>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* PHONE */}
                      <div class="container">
                        <div class="row">
                          <div className="form-group col">
                            <div className="input-group input-group-alternative mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  style={divStyle}
                                >
                                  Phone:
                                </span>
                              </div>
                              <input
                                className="form-control"
                                onChange={this.valueChanged}
                                name="phone"
                                placeholder="123-456-7890"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* STUDENT ID */}
                      <div class="container">
                        <div class="row">
                          <div className="form-group col">
                            <div className="input-group input-group-alternative mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  style={divStyle}
                                >
                                  Student ID:
                                </span>
                              </div>
                              <input
                                className="form-control"
                                onChange={this.valueChanged}
                                name="student_id"
                                placeholder="1234567890"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* SCHOOL */}
                      <div class="container">
                        <div class="row">
                          <div className="form-group col">
                            <div className="input-group input-group-alternative mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  style={divStyle}
                                >
                                  Select your CUNY college:
                                </span>
                              </div>
                              <select
                                class="form-control"
                                onChange={this.valueChanged}
                                name="school"
                                value="York College"
                              >
                                <option value="York College">
                                  York College
                                </option>
                                <option value="Queens College">
                                  Queens College
                                </option>
                                <option value="City College">
                                  City College
                                </option>
                                <option value="Brooklyn College">
                                  Brooklyn College
                                </option>
                                <option value="Hunter College">
                                  Hunter College
                                </option>
                                <option value="Baruch College">
                                  Baruch College
                                </option>
                                <option value="Lemahn College">
                                  Lemahn College
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* MAJOR */}
                      <div class="container">
                        <div class="row">
                          <div className="form-group col">
                            <div className="input-group input-group-alternative mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  style={divStyle}
                                >
                                  Major:
                                </span>
                              </div>
                              <input
                                className="form-control"
                                onChange={this.valueChanged}
                                name="student_major"
                                placeholder="Computer Science"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* STUDENT CLASSIFICATION */}
                      <div class="container">
                        <div class="row">
                          <div className="form-group col">
                            <div className="input-group input-group-alternative mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  style={divStyle}
                                >
                                  Classification:
                                </span>
                              </div>
                              <select
                                class="form-control"
                                onChange={this.valueChanged}
                                name="student_classification"
                              >
                                <option value="Freshman" selected>
                                  Freshman
                                </option>
                                <option value="Sophomore">Sophomore</option>
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="container">
                        <div className="row my-4">
                          <div className="col-12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                                required
                              />
                              <label
                                className="custom-control-label"
                                for="customCheckRegister"
                              >
                                <span className="text-muted">
                                  I agree with the{" "}
                                  <a href="#!">Privacy Policy</a>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <button
                          className="btn btn-primary mt-4"
                          onClick={this.handleSubmit}
                        >
                          Create account
                        </button>
                      </div>
                    </form>
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

export default SignupForm;
