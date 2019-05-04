import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem, NavLink} from 'reactstrap';
// import { Nav } from 'react-bootstrap';
import { Link, BrowserRouterProps } from "react-router-dom";
import Main from "./Main";
import NavBar from "./NavBar";
import { profile } from "../API";
import UserHeader from "./UserHeader";
import Sidebar from "./Sidebar";
import routes from "./routes";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

export default class ProfilePage extends React.Component {
  constructor(props) {
    console.log("---id", props.match.params.id);
    super(props);
    this.state = {
      user_id: props.match.params.id,
      user: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        student_id: "",
        school: "",
        major: "",
        classification: ""
      },
      ProfileLoaded: false,
      isDisable: true,
      valuesChanged: false
    };
  }

  valueChanged = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value
      },

      valuesChanged: true
    }));
  };

  updateProfile = event => {
    event.preventDefault();
    this.setState({ isDisable: !this.state.isDisable });
    this.setState({ valuesChanged: false });
  };

  setUserInfo(data) {
    this.setState({
      user: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        student_id: data.student_id,
        school: data.school,
        major: data.student_major,
        classification: data.student_classification
      }
    });
  }

  loadProfile() {
    const that = this;
    that.setState({ user_id: this.props.location.state.uid });
    console.log(`Profile user id: ${that.state.user_id}`);
    profile(this.props.location.state.uid).then(res => {
      // console.log(res);
      this.setUserInfo(res);
    });
  }

  render() {
    if (!this.state.ProfileLoaded) {
      this.loadProfile();
      this.setState({ ProfileLoaded: true });
    }

    console.log("--------------------------------> ", this.state.user_id);
    return (
      <>
        <Sidebar user_id={this.state.user_id} />

        <div className="main-content" ref="mainContent">
          <UserHeader username={this.state.user.first_name} />
          {/* Page content */}
          <Container className="mt--7" fluid>
            <Row>
              <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                <Card className="card-profile shadow">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("../images/user.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Connect
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Message
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0 pt-md-4">
                    <Row>
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Friends</span>
                          </div>
                          <div>
                            <span className="heading">10</span>
                            <span className="description">Photos</span>
                          </div>
                          <div>
                            <span className="heading">89</span>
                            <span className="description">Comments</span>
                          </div>
                        </div>
                      </div>
                    </Row>
                    <div className="text-center">
                      <h3>
                        {this.state.user.first_name +
                          " " +
                          this.state.user.last_name}
                        {/* <span className="font-weight-light">, 27</span> */}
                      </h3>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        {this.state.user.classification}
                      </div>
                      <div className="h5 mt-4">
                        <i className="ni business_briefcase-24 mr-2" />
                        {this.state.user.major}
                      </div>
                      <div>
                        <i className="ni education_hat mr-2" />
                        {this.state.user.school}
                      </div>
                      <hr className="my-4" />
                      <p>
                        Ryan — the name taken by Melbourne-raised,
                        Brooklyn-based Nick Murphy — writes, performs and
                        records all of his own music.
                      </p>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Show more
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              {/* ACCOUNT FORM */}
              <Col className="order-xl-1" xl="8">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">My account</h3>
                      </Col>
                      <Col className="text-right" xs="4">
                        {/* EDIT BUTTON */}
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={this.updateProfile}
                          size="sm"
                          text="Test"
                        >
                          {this.state.valuesChanged ? "Save" : "Edit"}
                        </Button>

                        {/* <Button
                          color="primary"
                          hidden={!this.state.valuesChanged}
                          onClick={this.updateProfile}
                          size="sm"
                          text="Test"
                        >
                          Save
                        </Button> */}
                      </Col>
                    </Row>
                  </CardHeader>

                  {/* USER INFORMATION */}
                  <CardBody>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        {/* FIRST AND LAST NAME */}
                        <Row>
                          {/* FIRST NAME */}
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                First name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={this.state.user.first_name}
                                onChange={this.valueChanged}
                                id="first_name"
                                placeholder="First name"
                                type="text"
                                disabled={this.state.isDisable}
                              />
                            </FormGroup>
                          </Col>

                          {/* LAST NAME */}
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Last name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={this.state.user.last_name}
                                onChange={this.valueChanged}
                                id="last_name"
                                placeholder="Last name"
                                type="text"
                                disabled={this.state.isDisable}
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        {/* EMAIL AND STUDENT ID */}
                        <Row>
                          {/* EMAIL */}
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email address
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={this.state.user.email}
                                onChange={this.valueChanged}
                                id="email"
                                placeholder="jesse@example.com"
                                type="email"
                                disabled={this.state.isDisable}
                              />
                            </FormGroup>
                          </Col>

                          {/* PHONE */}
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                Phone
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={this.state.user.phone}
                                onChange={this.valueChanged}
                                id="phone"
                                placeholder="1234567890"
                                type="text"
                                disabled={this.state.isDisable}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>

                      <hr className="my-4" />

                      {/* SCHOOL INFO FORM */}

                      {/* Address */}
                      <h6 className="heading-small text-muted mb-4">
                        School information
                      </h6>
                      <div className="pl-lg-4">
                        {/* <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row> */}

                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-city"
                              >
                                School
                              </label>
                              <Input
                                className="form-control-alternative"
                                value={this.state.user.school}
                                onChange={this.valueChanged}
                                id="school"
                                placeholder="City"
                                type="select"
                                disabled={this.state.isDisable}
                              >
                                <option value="Queens College">
                                  Queens College
                                </option>
                                <option value="York College">
                                  York College
                                </option>
                                <option value="City College">
                                  City College
                                </option>
                                <option value="Brooklyn College">
                                  Brooklyn College
                                </option>
                                <option value="Hunter College">
                                  Hunter College
                                </option>
                                <option value="Baruch College">
                                  Baruch College
                                </option>
                                <option value="Lemahn College">
                                  Lemahn College
                                </option>
                              </Input>
                            </FormGroup>
                          </Col>

                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Major
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={this.state.user.major}
                                onChange={this.valueChanged}
                                id="student_major"
                                placeholder="Computer Science"
                                type="text"
                                disabled={this.state.isDisable}
                              />
                            </FormGroup>
                          </Col>

                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Student ID
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={this.state.user.student_id}
                                onChange={this.valueChanged}
                                id="student_id"
                                placeholder="12345678"
                                type="text"
                                disabled={this.state.isDisable}
                              />
                            </FormGroup>
                          </Col>

                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-country"
                              >
                                Classification
                              </label>
                              <Input
                                className="form-control-alternative"
                                value={this.state.user.classification}
                                onChange={this.valueChanged}
                                id="student_classification"
                                type="select"
                                disabled={this.state.isDisable}
                              >
                                <option value="Freshman">Freshman</option>
                                <option value="Sophomore">Sophomore</option>
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      {/* <hr className="my-4" /> */}
                      {/* Description */}
                      {/* <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="A few words about you ..."
                          rows="4"
                          defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                          Open Source."
                          type="textarea"
                        />
                      </FormGroup>
                    </div> */}
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="container-fluid">
            <br />
          </div>
        </div>
      </>

      //     <div>
      //     <NavBar/>
      //     <div className="container">

      //         <div className="jumbotron text-center">
      //                 <h1 className="display-4">{`Welcome to your profile, ${this.state.user.first_name}`}</h1>
      //         </div>

      //         <div className= "container">

      //             <form>
      //                 <FormGroup>
      //                     <Label for="first_name">First Name</Label>
      //                     <Input onChange={this.valueChanged} type="text" name="first_name" id="first_name" defaultValue={this.state.user.first_name} disabled={this.state.isDisable}/>
      //                 </FormGroup>

      //                 <FormGroup>
      //                     <Label for="last_name">Last Name</Label>
      //                     <Input onChange={this.valueChanged} type="text" name="last_name" id="last_name" defaultValue={this.state.user.last_name} disabled={this.state.isDisable}/>
      //                 </FormGroup>

      //                 <FormGroup>
      //                     <Label for="email">Email</Label>
      //                     <Input onChange={this.valueChanged} type="email" name="email" id="email" defaultValue={this.state.user.email} disabled={this.state.isDisable}/>
      //                 </FormGroup>

      //                 <FormGroup>
      //                     <Label for="phone">Phone</Label>
      //                     <Input onChange={this.valueChanged} type="text" name="phone" id="phone" defaultValue={this.state.user.phone} disabled={this.state.isDisable}/>
      //                 </FormGroup>

      //                 <FormGroup>
      //                     <Label for="student_id">Student ID</Label>
      //                     <Input onChange={this.valueChanged} type="text" name="student_id" id="student_id" defaultValue={this.state.user.student_id} disabled={this.state.isDisable}/>
      //                 </FormGroup>

      //                 <FormGroup>
      //                     <Label for="student_major">Major</Label>
      //                     <Input onChange={this.valueChanged} type="text" name="student_major" id="student_major" defaultValue={this.state.user.major} disabled={this.state.isDisable}/>
      //                 </FormGroup>

      //                 <FormGroup>
      //                     <Label for="school">Select School</Label>
      //                     <Input onChange={this.valueChanged} type="select" name="school" id="school" defaultValue={this.state.user.school} disabled={this.state.isDisable}>
      //                         <option>York College</option>
      //                         <option>Hunter College</option>
      //                         <option>City College</option>
      //                         <option>Brooklyn College</option>
      //                         <option>Queens College</option>
      //                     </Input>
      //                 </FormGroup>

      //                 <FormGroup>
      //                     <Label for="student_classification">Classification</Label>
      //                     <Input onChange={this.valueChanged} type="select" name="student_classification" id="student_classification" defaultValue={this.state.user.student_classification} disabled={this.state.isDisable}>
      //                         <option>Freshmen</option>
      //                         <option>Sophmore</option>
      //                         <option>Junior</option>
      //                         <option>Senior</option>
      //                     </Input>
      //                 </FormGroup>

      //                 <br></br>

      //                 <div className="container">
      //                     <div className="row">
      //                         <div className="col-sm text-center">
      //                             <Button onClick={this.updateProfile} color="primary">Update</Button>
      //                         </div>

      //                         <div className="col-sm text-center">
      //                             <Button  color="primary">Submit</Button>
      //                         </div>

      //                         <div className="col-sm text-center">
      //                             <Link to={{
      //                                 pathname: '/uploadbook',
      //                                 state:{uid: this.state.user_id}
      //                             }}>
      //                                 <Button className="center-block bg-primary">Upload Books</Button>
      //                              </Link>
      //                         </div>

      //                         <div className="col-sm text-center">
      //                             <Link to={{
      //                                 pathname: '/interestedbooks/'+ this.state.user_id,
      //                                 state:{uid: this.state.user_id}
      //                             }}>
      //                                 <Button className="center-block bg-primary">Interested Books</Button>
      //                              </Link>
      //                         </div>

      //                         <div className="col-sm text-center">
      //                             <Link to={{
      //                                 pathname: '/viewbooks/'+ this.state.user_id,
      //                                 state:{uid: this.state.user_id}
      //                             }}>
      //                                 <Button className="center-block bg-primary">My Library</Button>
      //                              </Link>
      //                         </div>
      //                     </div>
      //                 </div>
      //             </form>
      //         </div>
      //     </div>
      // </div>
    );
  }
}
