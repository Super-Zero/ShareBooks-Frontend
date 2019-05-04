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

export default class ViewBooks extends React.Component {
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

  loadBooks() {
    console.log("Inside loadBooks Function");
    // console.log(this.props.location.state.uid);
    this.setState({ user_id: this.props.location.state.uid });
    //console.log(`The user id is: ${this.state.user_id}`);
    mylibrary({ user_id: this.state.user_id })
      .then(books => {
        console.log(books);
        this.setState({
          books,
          isLoading: false
        });
      })
      .catch(console.error);
  }

  renderBooks = () => {
    // style="width: 18rem;
    return this.state.books.map(book => {
      return (
        <div className="p-2">
          <Card style={{ width: "22rem" }}>
            <div className="float-left m-2">
              <CardImg
                className="float-left m-2"
                src={book.image}
                alt={book.title}
                style={{ width: "45%", height: "60%" }}
              />

              <div className="p-2">
                <CardTitle>
                  <b>{book.title}</b>
                </CardTitle>
                <CardTitle>
                  <b>ISBN:</b> {book.book_isbn}
                </CardTitle>
                <CardTitle>
                  <b>Category:</b> {book.type}
                </CardTitle>
                <CardTitle>
                  <b>Description:</b> {book.description}
                </CardTitle>
              </div>
            </div>
          </Card>
        </div>
      );
    });
  };

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
