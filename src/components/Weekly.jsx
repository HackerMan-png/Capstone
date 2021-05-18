import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
// import weather from weather;

const Weekly = () => {
  let hour = new Date().getHours()
  const arr = ['#040b3c', '#040b3c', '#192861', '#28166b', '#004372', '#016792', '#07729f', '#07729f', '#12a1c0', '#12a1c0', '#12a1c0', '#01C9D6', '#74c9e3', '#74c9e3', '#fd9e58', '#f18448', '#f06b7e', '#ca5a92', '#5b2c83', '#371a79', '#28166b', '#192861', '#040b3c', '#040b3c']
  return (
    <div className="Weekly">
      <Container style={{ background: arr[hour - 1] }}>
  <Row>
    <Col className="temp">69°F</Col>
    <Col className="location">America/Phoenix</Col>
  </Row>
  <Row>
    <Col className="days" id="mon"><h1>69°F</h1><p className="weekday"> Monday </p><p className="date">5/10/21</p>
    <div className= "min"><p>low</p><p>69°F</p></div>
    <div className= "max"><p>high</p><p>69°F</p></div>
    </Col>
    <Col className="days" id="tue"><h1>69°F</h1><p className="weekday"> Tueday </p><p className="date">5/11/21</p>
    <div className= "min"><p>low</p><p>69°F</p></div>
    <div className= "max"><p>high</p><p>69°F</p></div>
    </Col>
    <Col className="days" id="wed"><h1>69°F</h1><p className="weekday">Wednesday</p><p className="date">5/12/21</p>
    <div className= "min"><p>low</p><p>69°F</p></div>
    <div className= "max"><p>high</p><p>69°F</p></div>
    </Col>
    <Col className="days" id="thu"><h1>69°F</h1><p className="weekday"> Thursday </p><p className="date">5/13/21</p>
    <div className= "min"><p>low</p><p>69°F</p></div>
    <div className= "max"><p>high</p><p>69°F</p></div>
    </Col>
    <Col className="days" id="fri"><h1>69°F</h1><p className="weekday"> Friday </p><p className="date">5/14/21</p>
    <div className= "min"><p>low</p><p>69°F</p></div>
    <div className= "max"><p>high</p><p>69°F</p></div>
    </Col>
    <Col className="days" id="sat"><h1>69°F</h1><p className="weekday"> Saturday</p><p className="date">5/15/21</p>
    <div className= "min"><p>low</p><p>69°F</p></div>
    <div className= "max"><p>high</p><p>69°F</p></div>
    </Col>
    <Col className="days" id="sun"><h1>69°F</h1><p className="weekday">  Sunday </p><p className="date">5/16/21</p>
    <div className= "min"><p>low</p><p>69°F</p></div>
    <div className= "max"><p>high</p><p>69°F</p></div>
    </Col>
  </Row>
  <button>night</button><p>to swap to the temp for night</p>
</Container>
    </div>
  )
}
export default Weekly
