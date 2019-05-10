import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { findBooks } from "../API";
import SearchHeader from "./SearchHeader";
import Sidebar from "./Sidebar";
import routes from "./routes";

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

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.valueChanged = this.valueChanged.bind(this);
    this.state = {
      user_id: this.props.location.state.uid,
      flag: false,
      users: [],
      book_info: {}
    };
  }

  valueChanged = event => {
    const { name, value } = event.target;
    console.log(
      "Inside valueChange function -------------> ",
      this.state.book_info
    );
    this.setState(prevState => ({
      book_info: {
        ...prevState.user,
        [name]: value
      }
    }));
  };

  search = () => {
    // const that = this;
    var data = this.state.book_info;
    console.log("Search this book: ", data);
    findBooks(this.state.book_info.book_isbn)
      .then(users => {
        console.log("Found this books ---------> ", users);
        this.setState({
          users,
          flag: true
        });
      })
      .catch(console.error);
  };

  renderBooks = () => {
    // style="width: 18rem;
    return this.state.users.map(book => {
      return (
        <div className="p-2">
          <Card style={{ width: "22rem" }}>
            <div className="float-left m-2">
              <CardImg
                className="float-left m-2"
                src={book.book.image}
                alt={book.book.title}
                style={{ width: "45%", height: "60%" }}
              />

              <div className="p-2">
                <CardTitle>
                  <b>{book.book.title}</b>
                </CardTitle>
                <CardTitle>
                  <b>ISBN:</b> {book.book_isbn}
                </CardTitle>
                <CardTitle>
                  <b>Condition:</b> {book.condition}
                </CardTitle>
                <CardTitle>
                  <b>Owner:</b>{" "}
                  {book.user.first_name + " " + book.user.last_name}
                </CardTitle>
              </div>
              <Container className="text-center">
                <Button color="primary">Request</Button>
              </Container>
            </div>
          </Card>
        </div>
      );
    });
  };

  loadBooks() {
    console.log("Inside loadBooks Function");
    // console.log(this.props.location.state.uid);
    this.setState({ user_id: this.props.location.state.uid });
    //console.log(`The user id is: ${this.state.user_id}`);
    findBooks({ user_id: this.state.user_id })
      .then(books => {
        console.log(books);
        this.setState({
          books,
          flag: true
        });
      })
      .catch(console.error);
  }

  render() {
    // if (this.state.flag) {
    //   this.setState({ user_id: this.props.location.state.uid, flag: false });
    //   console.log("Search page ------------------------>", this.state.user_id);
    // }

    return (
      <>
        <Sidebar user_id={this.state.user_id} />

        <div className="main-content" ref="mainContent">
          <SearchHeader search={this.search} valueChanged={this.valueChanged} />

          {/* Page content */}
          <Container className="mt--7" fluid>
            <Row>
              <div className="col">
                <div className="container-fluid">
                  {this.state.isLoading ? (
                    <h2>Loading Books...</h2>
                  ) : (
                    <div className="row">
                      {this.state.flag ? this.renderBooks() : " "}
                    </div>
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
