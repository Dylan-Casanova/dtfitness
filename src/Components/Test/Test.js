import React, { Component } from 'react';
import Logo from '../../assets/images/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


// creating nav bar which will act as a router
class Test1 extends Component {
  render() {
    return (
      
        <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
  }
}

export default Test1;
