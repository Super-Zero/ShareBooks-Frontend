import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  setUser = user => this.setState({ user: user });

  render() {
    console.log("---state in app", this.state.user);
    return (
      <div className="app">
        {/* <NavBar /> */}
        <Main setUser={this.setState} user={this.state.user} />
      </div>
    );
  }
}
