import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { profile } from "../API";
import SearchHeader from "./SearchHeader";
import Sidebar from "./Sidebar";
import routes from "./routes";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.location.state.uid,
      flag: true
    };
  }

  render() {
    if (this.state.flag) {
      this.setState({ user_id: this.props.location.state.uid, flag: false });
      console.log("Search page ------------------------>", this.state.user_id);
    }

    return (
      <>
        <Sidebar user_id={this.state.user_id} />

        <div className="main-content" ref="mainContent">
          <SearchHeader />

          {/* Page content */}
          <Container className="mt--7" fluid>
            Nothing Here
          </Container>
          <div className="container-fluid">
            <br />
          </div>
        </div>
      </>
    );
  }
}
