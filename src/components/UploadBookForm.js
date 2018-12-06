import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';


var divStyle = {

    width: '500px',
   };


export default class UploadBookForm extends React.Component{

    state ={
        book:{}
      };

render() {
    return (  
        <div  className="container center-block" style={divStyle}>
        <form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="title_book">Title of the Book</Label>
                <Input onChange={this.valueChanged} type="text" name="title_book" id="title_book" placeholder="CS 172" />
            </FormGroup>

            <FormGroup>
                <Label for="desc_book">Book Description</Label>
                <Input onChange={this.valueChanged} type="text" name="desc_book" id="desc_book" placeholder="This book is for Intro to CS class" />
            </FormGroup>

            <FormGroup>
                <Label for="book_isbn">BOOK ISBN Number</Label>
                <Input onChange={this.valueChanged} type="text" name="book_isbn" id="book_isbn" placeholder="123-JKL-7890" />
            </FormGroup>

            <FormGroup>
                <Label for="type">Book Genra</Label>
                <Input onChange={this.valueChanged} type="text" name="type" id="type" placeholder="Computer science" />
            </FormGroup>

            <FormGroup>
               <label for="exampleFormControlFile1">Example file input</label>
             <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </FormGroup>

            <div className="container text-center">
                <FormGroup>
                    <Button color="primary">Upload</Button>{' '}
                </FormGroup>
            </div>
        </form>
       </div>
     

    );

   }
    
}

