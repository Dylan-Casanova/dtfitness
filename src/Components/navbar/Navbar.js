import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "./navbar.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// creating nav bar which will act as a router
class barnav extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="90%"
              height="90%"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* making the nav bar responsive */}
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Item>
                <Nav.Link href="#home">
                  <Link to="/myprofile" id="navLink">
                    {" "}
                    My Profile
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="navLink" href="#home">
                  SignUp
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="navLink" href="#home">
                  Login
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default barnav;
