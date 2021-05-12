import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import weather from weather;

const Weekly = () => {
  return (
    <div className="Weekly">
      <Container>
  <Row>
    <Col className="temp">69°F</Col>
    <Col className="location">Cheyenne, WY</Col>
  </Row>
  <Row>
    <Col className="days" id="mon"><h1>69°F</h1><p className="weekday">Monday</p><p className="date">10th</p></Col>
    <Col className="days" id="tue"><h1>69°F</h1><p className="weekday">Tueday</p><p className="date">11th</p></Col>
    <Col className="days" id="wed"><h1>69°F</h1><p className="weekday">Wednesday</p><p className="date">12th</p></Col>
    <Col className="days" id="thu"><h1>69°F</h1><p className="weekday">Thursday</p><p className="date">13th</p></Col>
    <Col className="days" id="fri"><h1>69°F</h1><p className="weekday">Friday</p><p className="date">14th</p></Col>
    <Col className="days" id="sat"><h1>69°F</h1><p className="weekday">Saturday</p><p className="date">15th</p></Col>
    <Col className="days" id="sun"><h1>69°F</h1><p className="weekday">Sunday</p><p className="date">16th</p></Col>
  </Row>
</Container>
    </div>
  )
}
export default Weekly
