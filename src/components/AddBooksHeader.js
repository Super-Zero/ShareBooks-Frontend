import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

class AddBooksHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book_info: {}
    };
  }

  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "400px",
            // backgroundImage:
            //   "url(" + require("../assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex align-items-center mt--7" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">
                  Add books to your Library
                </h1>
                <p className="text-white mt-0 mb-5">
                  Here you can search for books to add to your library.
                </p>

                <div className="container">
                  <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                    <FormGroup className="mb-0">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-search" />
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          name="google_search"
                          onChange={this.props.valueChanged}
                          placeholder="Search"
                          type="text"
                        />
                      </InputGroup>
                      <span />
                      <Button color="info" onClick={this.props.search}>
                        Search
                      </Button>
                    </FormGroup>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default AddBooksHeader;
