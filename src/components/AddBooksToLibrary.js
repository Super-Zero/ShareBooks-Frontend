import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { findBooks, googleSearchBooks, uploadBook } from "../API";
import AddBooksHeader from "./AddBooksHeader";
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

export default class AddBooksToLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.valueChanged = this.valueChanged.bind(this);
    this.state = {
      user_id: this.props.location.state.uid,
      flag: false,
      books: [],
      search: {}
    };
  }

  valueChanged = event => {
    const { name, value } = event.target;
    // console.log(
    //   "Inside valueChange function -------------> ",
    //   this.state.book_info
    // );
    this.setState(prevState => ({
      book_info: {
        ...prevState.user,
        [name]: value
      }
    }));
  };

  search = () => {
    // const that = this;
    var data = this.state.book_info.google_search;
    console.log("Search this book: ", data);
    googleSearchBooks(data)
      .then(results => {
        // let test = results.items;
        console.log("Google search results------>", results);
        this.setState({
          books: results.items,
          flag: !this.state.flag
        });
      })
      .catch(console.error);

    // findBooks(this.state.book_info.book_isbn)
    //   .then(users => {
    //     console.log("Found this books ---------> ", users);
    //     this.setState({
    //       users,
    //       flag: true
    //     });
    //   })
    //   .catch(console.error);
  };

  addToLibrary = book => {
    //uploadBook(book);

    uploadBook(book).then(result => {
      if (result == 401) {
        alert("The book already exist in your library.");
      }

      if (result == 201) {
        alert("You have successfully uploaded your book.");
      }
    });
  };

  renderBooks = () => {
    // style="width: 18rem;

    return this.state.books.map((book, i) => {
      if (
        book.volumeInfo.imageLinks &&
        book.volumeInfo.title &&
        book.volumeInfo.industryIdentifiers &&
        book.searchInfo
      ) {
        let image = book.volumeInfo.imageLinks.thumbnail;
        let title = book.volumeInfo.title;
        let book_isbn = book.volumeInfo.industryIdentifiers[1].identifier;
        let description = book.searchInfo.textSnippet;
        // console.log(
        //   "******************* Book info: ",
        //   imageLink,
        //   title,
        //   book_isbn,
        //   description
        // );
        return (
          <div className="p-2">
            <Card style={{ width: "22rem" }}>
              <div className="float-left m-2">
                <CardImg
                  id={book_isbn}
                  name="image"
                  className="float-left m-2"
                  src={image}
                  alt={title}
                  style={{ width: "45%", height: "60%" }}
                />

                <div className="p-2">
                  <CardTitle>
                    <b>{title}</b>
                  </CardTitle>

                  <CardTitle>
                    <b>ISBN:</b> {book_isbn}
                  </CardTitle>

                  <CardTitle>
                    <b>Condition:</b> burned
                  </CardTitle>

                  <CardTitle>
                    <b>Description:</b> {description}
                  </CardTitle>
                </div>
                <Container className="text-center">
                  <Button
                    color="primary"
                    onClick={() =>
                      this.addToLibrary({
                        book_isbn,
                        image,
                        title,
                        description,
                        user_id: this.state.user_id,
                        condition: "Good",
                        type: "Computer Science"
                      })
                    }
                  >
                    Add to Library
                  </Button>
                </Container>
              </div>
            </Card>
          </div>
        );
      }
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
    console.log("User ID------------------------>:", this.state.user_id);

    return (
      <>
        <Sidebar user_id={this.state.user_id} />

        <div className="main-content" ref="mainContent">
          <AddBooksHeader
            search={this.search}
            valueChanged={this.valueChanged}
          />

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
