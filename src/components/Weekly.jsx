import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const Weekly = () => {
  return (
    <div className="Weekly">
      <Container>
  <Row>
    <Col className="temp">69°F</Col>
    <Col className="location">Cheyenne, WY</Col>
  </Row>
  <Row>
    <Col id="mon">1 of 3</Col>
    <Col id="tue">2 of 3</Col>
    <Col id="wed">3 of 3</Col>
    <Col id="thu">4 of 3</Col>
    <Col id="fri">5 of 3</Col>
    <Col id="sat">5 of 3</Col>
    <Col id="sun">5 of 3</Col>
  </Row>
</Container>
    </div>
  )
}

export default Weekly
