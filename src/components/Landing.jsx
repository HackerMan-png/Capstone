import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Landing = () => {
  return (
    <div className="landing">
      <Container >
        <Row className="justify-content-center">
          <Col lg="12">

            <div className="temp">
              <p>69°F</p>
            </div>

            <div className="location">
              <p>Cheyenne, WY</p>
            </div>
            <div className="highLow">
              <p className="bold">Low</p>
              <p className="bold">High</p>
              <p>62°F</p>
              <p>74°F</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Landing
