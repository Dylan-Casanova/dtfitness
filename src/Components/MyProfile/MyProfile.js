// my profile component is going to be divided in two sides. one side is going to be a calendar
// that the user can interact with. other side is going to show details about activities done on selected
// date from side one.

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import "./MyProfile.css";

function MyProfile() {
    const [value, onChange] = useState(new Date());
    return (
      <div className="container">
        <Container>
          <Row>
            <Col>
              <div>
                <Calendar onChange={onChange} value={value} />
              </div>
            </Col>
            <Col>
              2 of 2 que pasa si anado mucho texto <br></br>
              aca?{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }


export default MyProfile;
