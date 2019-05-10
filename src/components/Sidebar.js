/*eslint-disable*/
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

var ps;

class Sidebar extends React.Component {
  state = {
    collapseOpen: false
  };
  constructor(props) {
    super(props);
    this.state = {
      user_id: () => {
        return this.props.user_id;
      }
    };
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };

  componentDidMount() {
    this.setState({ user_id: this.props.user_id });
  }

  // creates the links that appear in the left menu / Sidebar

  // createLinks = routes => {
  //   return routes.map((prop, key) => {
  //     return (
  //       <NavItem key={key}>
  //         <NavLink
  //           to={prop.layout + prop.path}
  //           tag={NavLinkRRD}
  //           onClick={this.closeCollapse}
  //           activeClassName="active"
  //         >
  //           <i className={prop.icon} />
  //           {prop.name}
  //         </NavLink>
  //       </NavItem>
  //     );
  //   });
  // };
  render() {
    console.log(
      "***************************************> Sidebar: ",
      this.state.user_id
    );

    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          <a className="navbar-brand">
            <h1>
              <b>ShareBooks</b>
            </h1>
          </a>
          <div className="collapse navbar-collapse">
            {/* Navigation */}

            <Nav navbar>
              <NavItem>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/profilepage/" + this.props.user_id,
                    state: { uid: this.props.user_id }
                  }}
                >
                  <i className="ni ni-single-02 text-green" />
                  Profile
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/viewbooks/" + this.props.user_id,
                    state: { uid: this.props.user_id }
                  }}
                >
                  <i className="ni ni-books text-blue" />
                  My Library
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/addbooks",
                    state: { uid: this.props.user_id }
                  }}
                >
                  <i className="ni ni-cloud-upload-96 text-black" />
                  Add Books
                </Link>
              </NavItem>

              <NavItem>
                <Link
                  className="nav-link"
                  to={{
                    pathname: "/search",
                    state: { uid: this.props.user_id }
                  }}
                >
                  <i className="fa fa-search text-red" />
                  Search Books
                </Link>
              </NavItem>
            </Nav>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default Sidebar;
