import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Link, Form, FormGroup, Label, Input, FormText, Route, BrowserRouter } from 'reactstrap';
import Book from './Book';
import {mylibrary} from '../API'


export default class ViewBooks extends React.Component {
      
    constructor(props) {
        super(props);
        this.state={
            user_id: props.match.params.id,
            isLoading: true,
            books: []
        }
     }

    // state={
    //     user_id: '',
    //     isLoading: true,
    //     books: []
    // };

    componentDidMount(){
        this.loadBooks();
        //this.setState({isLoading: false});
    }

     loadBooks(){
        console.log("Inside loadBooks Function");
        // console.log(this.props.location.state.uid);
        this.setState({user_id: this.props.location.state.uid});
        //console.log(`The user id is: ${this.state.user_id}`);
        mylibrary({user_id: this.state.user_id})
        .then(books =>{
            console.log(books);
            this.setState({
                books,
                isLoading: false
            });
        }).catch(console.error)

        
     };

    //  setBookInfo(data){
    //      this.setState({
    //          book:{
    //             title: data.title,
    //             description: data.description,
    //             book_isbn: data.book_isbn,
    //             type: data.type,
    //             image: data.image,
                
    //          }
    //      });
    //  };

    //  viewBooks(){
    //     Books(this.props.location.state.uid)
    //     .then(res =>{
    //         // console.log(res);
    //         this.setBookInfo(res);
    //     })
    //  }

    renderBooks = () => {
        // style="width: 18rem;
        return this.state.books.map((book) => {
            return <div className="card col-2" key={book.book_isbn}>
                <img className="card-img-top" src={book.image} alt={book.title}/>
                <div className="card-body">
                    <h5 className="card-title">Title: {book.title}</h5>
                    <p className="card-text">Book ISBN: {book.book_isbn}</p>
                    <p className="card-text">Book Genre: {book.type}</p>
                    <p className="card-text">Description: {book.description}</p>  
                </div>                      
            </div>
        })
    }
   
  
    render() {

        console.log(this.state);
          
        return (

            <div className= "container">
                <h1>My Library</h1>
                {
                    this.state.isLoading 
                    ? <h2>Loading Books...</h2> 
                    : <div className="row">
                    { this.renderBooks() }
                    </div>

                }
            </div>
        );
    }
}