
 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Link } from 'react-router-dom'
//  import NavBar from './NavBar';
import { NavItem, NavProps, Nav } from 'reactstrap';








 export default class NavBarAfterLogIn extends React.Component {
  
    render() {
        return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/viewbooks"> <b>View Books</b> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/uploadbook" > <b>Upload A Book</b>  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/exchangebook"> <b>Exchange Books</b> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/updateprofile"><b>Update Profile</b> </a>  
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><b>Log Out</b> </a>  
            </li>
          </ul>
          </div>
</nav>
        );
      }
    }

