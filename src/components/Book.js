import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


const Book = ({Book}) =>{
    return (

    <div className="card col -4 " style="width: 18rem;">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Book title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
   </div> 
  
)

}
    
  
export default Book;