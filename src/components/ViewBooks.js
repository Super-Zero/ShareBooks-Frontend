// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Button, Link, Form, FormGroup, Label, Input, FormText, Route, BrowserRouter } from 'reactstrap';
// import Book from './Book';


// export default class ViewBooks extends React.Component {

//     state={
//         isLoading= true,
//         books=[],
//     };
//     componentDidMount(){
//         const API_URL="http://localhost:8000/api/signup";
//         fetch(API_URL)
//           .then(res=>res.jason())
//           .then(books=>{
//             this.setState({
//                 books,
//                 isLoading: false
//             })
//           });
//     }
  
//     render() {
//         return (
//             <div className= "container">
//                 <h1>This is ViewBooks Page</h1>
//                 {this.state.isLoading? <h2>Loading Products</h2>: this.state.books.map(books=>(
//                     <Books book={books}/>
//                 ))}
//            </div>



//         );
//       }
//     }