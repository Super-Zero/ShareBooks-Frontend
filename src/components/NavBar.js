import React from 'react';
import * as Cookies from 'js-cookie';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



  // Navbar with functions


  render() {
    console.log('user in cookie', Cookies.get('user'))
    
    // User has logged in

    // if (Cookies.get('user')) {
    //   console.log('user in cookie deserialized', JSON.parse(Cookies.get('user')))

    //   return (
    //     <div className="bg-primary text-white">
    //       <Navbar color="blue" light expand="md">
    //         <NavbarBrand className="text-white" href="/">ShareBooks</NavbarBrand>
    //         <NavbarToggler onClick={this.toggle} />
    //         <Collapse isOpen={this.state.isOpen} navbar>
    //           <Nav className="ml-auto" navbar>
              

    //             <NavItem>
    //               <NavLink className="text-white" href="/loginform/">Logout</NavLink>
    //             </NavItem>
    //           </Nav>
    //         </Collapse>
    //       </Navbar>
    //     </div>
    //   );
    // }
    

    return (
        <div>
            <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
                    <div className="container px-4">

                        <a className="navbar-brandt" href="/">
                            {/* <img src="img/brand/white.png" /> */}
                            <a href="/">
                                <h2 className="text-white">ShareBooks</h2>
                            </a>
                            
                        </a>
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    
                    <div className="collapse navbar-collapse" id="navbar-collapse-main">
                    
                            {/* <!-- Collapse header --> */}
                            
                            <div className="navbar-collapse-header d-md-none">
                                
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="/">
                                            <img src="img/brand/blue.png" />
                                        </a>
                                    </div>

                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Navbar items --> */}

                            <ul className="navbar-nav ml-auto">

                                {/* <li className="nav-item">
                                    <a className="nav-link nav-link-icon" href="/">
                                        <i className="ni ni-planet"></i>
                                        <span className="nav-link-inner--text">Dashboard</span>
                                    </a>
                                </li> */}

                                <li className="nav-item">
                                    <a className="nav-link nav-link-icon" href="/signupform">
                                        <i className="ni ni-circle-08"></i>
                                        <span className="nav-link-inner--text">
                                            {/* <NavLink classNameName="nav-link-inner--text" href="/signupform/">Register</NavLink> */}
                                            Register
                                        </span>
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link nav-link-icon" href="/loginform">
                                        <i className="ni ni-key-25"></i>
                                        <span className="nav-link-inner--text">
                                            Login
                                        </span>
                                    </a>
                                </li>

                                {/* <li className="nav-item">
                                    <a className="nav-link nav-link-icon" href="/profile">
                                        <i className="ni ni-single-02"></i>
                                        <span className="nav-link-inner--text">Profile</span>
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
    );
  }
}