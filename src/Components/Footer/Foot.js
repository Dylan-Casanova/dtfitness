import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png'


import './Foot.css';
// creating footer.
class Foot extends Component {
  render() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" id='footer'>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* making footer responsive  */}
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-start" >
             <Nav  >
      <Nav.Item>
      <Nav.Link  href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link  href="#home">SignUp</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link  href="#home">Login</Nav.Link>
      </Nav.Item>
    </Nav>
    </Navbar.Collapse>
    <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="90%"
              height="90%"
              className="d-inline-block align-top"
            />{' '}
          
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    );
  }
}

export default Foot;
