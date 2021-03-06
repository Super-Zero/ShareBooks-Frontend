import React from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouterProps } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  withRouter
} from "reactstrap";
import { uploadBook } from "../API";

import Sidebar from "./Sidebar";

var divStyle = {
  width: "500px"
};

var alertStyle = {
  width: "250px"
};

export default class UploadBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: "",
        description: "",
        book_isbn: "",
        type: "",
        condition: "",
        user_id: ""
      },
      successUpload: false
    };
  }

  saveUserId() {
    this.setState({
      user: {
        user_id: this.props.location.state.uid
      }
    });
  }

  valueChanged = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      book: {
        ...prevState.book,
        [name]: value
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.props.location.state.uid);
    // this.setState({book:{
    //     user_id: this.props.location.state.uid
    // }})
    var data = this.state.book;
    data.user_id = this.props.location.state.uid.toString();
    console.log(data);
    uploadBook(data).then(result => {
      if (result == 401) {
        alert("The book already exist in your library.");
        // Alert.error("The book already exist in your library", {
        //   position: "top",
        //   effect: "slide",
        //   onShow: function() {
        //     console.log("aye!");
        //   },
        //   beep: false,
        //   timeout: "none",
        //   offset: 100
        // });
      }

      if (result == 201) {
        alert("You have successfully uploaded your book.");
        // Alert.success("The book was successfully added to your library", {
        //   position: "top",
        //   effect: "slide",
        //   onShow: function() {
        //     console.log("aye!");
        //   },
        //   onClose: function() {
        //     //that.setState({successAccount: true})
        //   },
        //   beep: false,
        //   timeout: 1000,
        //   offset: 100
        // });
      }
    });
  };

  render() {
    return (
      <>
        <Sidebar user_id={this.state.user_id} />

        <h1>You can upload Books here</h1>
        <div className="container center-block" style={divStyle}>
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title">Title of the Book</Label>
              <Input
                onChange={this.valueChanged}
                type="text"
                name="title"
                id="title_book"
                placeholder="CS 172"
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Book Description</Label>
              <Input
                onChange={this.valueChanged}
                type="text"
                name="description"
                id="desc_book"
                placeholder="This book is for Intro to CS class"
              />
            </FormGroup>

            <FormGroup>
              <Label for="book_isbn">BOOK ISBN Number</Label>
              <Input
                onChange={this.valueChanged}
                type="text"
                name="book_isbn"
                id="book_isbn"
                placeholder="123-JKL-7890"
              />
            </FormGroup>

            <FormGroup>
              <Label for="type">Type</Label>
              <Input
                onChange={this.valueChanged}
                type="text"
                name="type"
                id="type"
                placeholder="Computer science"
              />
            </FormGroup>

            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                onChange={this.valueChanged}
                type="text"
                name="image"
                id="image"
                placeholder="http:/example.com"
              />
            </FormGroup>

            <FormGroup>
              <Label for="school">Book Condition</Label>
              <Input
                onChange={this.valueChanged}
                type="select"
                name="condition"
                id="condition"
              >
                <option>Fair</option>
                <option>Good</option>
                <option>Excellent</option>
              </Input>
            </FormGroup>

            <div className="container text-center">
              <FormGroup>
                <Button color="primary">Upload</Button>{" "}
              </FormGroup>
            </div>
          </form>
        </div>
      </>
    );
  }
}
