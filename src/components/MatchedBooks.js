import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Badge,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";

import Book from "./Book";
import { mylibrary } from "../API";
import LibraryHeader from "./LibraryHeader";
import Sidebar from "./Sidebar";

var cardStyle = {
  // style="width: 18rem;"
  width: "18rem"
};

var boldText = {
  fontWeight: "bold"
};

export default class MatchedBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: props.match.params.id,
      isLoading: true,
      books: []
    };
  }

  componentDidMount() {
    this.loadBooks();
    //this.setState({isLoading: false});
  }

  render() {
    console.log("Library: ", this.state.user_id);

    return (
      <>
        <Sidebar user_id={this.state.user_id} />

        <div className="main-content" ref="mainContent">
          <LibraryHeader />

          {/* Page content */}
          <Container className="mt--7" fluid>
            <Row>
              <div className="col">
                <div className="container-fluid">
                  {this.state.isLoading ? (
                    <h2>Loading Books...</h2>
                  ) : (
                    <div className="row">{this.renderBooks()}</div>
                  )}
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
