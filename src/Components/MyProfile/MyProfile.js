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
import Button from 'react-bootstrap/Button'






import "./MyProfile.css";

function MyProfile() {
    const [value, onChange] = useState(new Date());

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
  <Button variant="primary">Details</Button> 

</Card>
            </Col>
            </div>
          </Row>
          <Col>
          <div> here goes such code?</div>
          </Col>
        </Container>
      </div>
    );
  }

export default MyProfile;
