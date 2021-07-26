// my profile component is going to be divided in two sides. one side is going to be a calendar
// that the user can interact with. other side is going to show details about activities done on selected
// date from side one.

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import back from '../../assets/images/back.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';
import "./MyProfile.css";

function MyProfile() {
    const [value, onChange] = useState(new Date());

  // creating states for modal implementation 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    return (
      <div className="container">
        <Container >
          <Row>
            <Col>
              <div id='dates'>
                <Calendar onChange={onChange} value={value} />
              </div>
            </Col>
            <div>
            <h3 className='text-center'>Muscle group worked on:</h3>
            <Col>
            <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={back} />
  <Card.Body>
    <Card.Title><h5 className='text-center'>Back</h5></Card.Title>
    <Card.Text>
      Here is a short description of my work out
      i started with benchpress, moved to incline,
      followed by decline. and finally finished with 
      butterfly press and one workout which i dont know the name 
      of. 
    </Card.Text>
  </Card.Body>
  <Button variant="primary" onClick={handleShow}>Details</Button> 

</Card>
            </Col>
            </div>
          </Row>
          <Col>
          <div> 
          

      <Modal show={show} onHide={handleClose}>
        <Modal.Header> 
          <Modal.Title>This workout consisted of:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup variant="flush">
  <ListGroup.Item>Number of exercises done: 6</ListGroup.Item>
  <ListGroup.Item>sets per exercise: 4-5</ListGroup.Item>
  <ListGroup.Item>reps per set: 12-15</ListGroup.Item>
  <ListGroup.Item>Difficulty level: it was a challenging workout but manageble</ListGroup.Item>
  <ListGroup.Item>comments/observations: it was a good one</ListGroup.Item>
</ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          


          </div>
          </Col>
        </Container>
      </div>
    );
  }

export default MyProfile;
