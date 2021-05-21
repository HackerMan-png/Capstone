import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import info from "../weather.json"
import dayBackground from "../media/dayBackground.jpg"
import duskBackground from "../media/duskBackground.png"
import nightBackground from "../media/nightBackground.png"
import clearDay from './icons/clearDay.png';


const Weekly = () => {
  let hour = new Date().getHours()
  // let hour = 21
  const arr = ['#040b3c', '#040b3c', '#192861', '#28166b', '#004372', '#016792', '#07729f', '#07729f', '#12a1c0', '#12a1c0', '#12a1c0', '#01C9D6', '#74c9e3', '#74c9e3', '#fd9e58', '#f18448', '#f06b7e', '#ca5a92', '#5b2c83', '#371a79', '#28166b', '#192861', '#040b3c', '#040b3c']
  
  const findBackground = () =>{
    if(hour <= 18){
      return dayBackground
    }else if(hour <= 20){
      return duskBackground
    }else if (hour <= 24){
      return nightBackground
    }
  }
  return (
    <div className="Weekly" style={{ backgroundImage: `url(${findBackground()})` }}>
      
      <Container>
  <Row>
    <h1 className="title" style = {{ color: (hour > 20) && "white"}} >WEEKLY</h1>
    <Col className="temp" style = {{ color: (hour > 20) && "white"}}>{info.current.temp.toFixed(0)}°F</Col>
    <Col className="location" style = {{ color: (hour > 20) && "white"}}>America/Phoenix</Col>
  </Row>
  <Row>
  <Col className="days" id="mon"><h1>{info.daily[0].temp.day.toFixed(0)}°F</h1><p className="weekday"> Monday </p><p className="date">5/10/21</p>
  <img src={clearDay} alt="clearDay" className="icons"/>
    <div className= "min"><p>Low</p><p>{info.daily[0].temp.min.toFixed(0)}°F</p></div>
    <div className= "max"><p>High</p><p>{info.daily[0].temp.max.toFixed(0)}°F</p></div>
    </Col>
    <Col className="days" id="tue"><h1>{info.daily[1].temp.day.toFixed(0)}°F</h1><p className="weekday"> Tueday </p><p className="date">5/11/21</p>    
    <img src={clearDay} alt="clearDay" className="icons"/>
    <div className= "min"><p>Low</p><p>{info.daily[1].temp.min.toFixed(0)}°F</p></div>
    <div className= "max"><p>High</p><p>{info.daily[1].temp.max.toFixed(0)}°F</p></div>
    </Col>
    <Col className="days" id="wed"><h1>{info.daily[2].temp.day.toFixed(0)}°F</h1><p className="weekday">Wednesday</p><p className="date">5/12/21</p>
    <img src={clearDay} alt="clearDay" className="icons"/>
    <div className= "min"><p>Low</p><p>{info.daily[2].temp.min.toFixed(0)}°F</p></div>
    <div className= "max"><p>High</p><p>{info.daily[2].temp.max.toFixed(0)}°F</p></div>
    </Col>
    <Col className="days" id="thu"><h1>{info.daily[3].temp.day.toFixed(0)}°F</h1><p className="weekday"> Thursday </p><p className="date">5/13/21</p>
    <img src={clearDay} alt="clearDay" className="icons"/>
    <div className= "min"><p>Low</p><p>{info.daily[3].temp.min.toFixed(0)}°F</p></div>
    <div className= "max"><p>High</p><p>{info.daily[3].temp.max.toFixed(0)}°F</p></div>
    </Col>
    <Col className="days" id="fri"><h1>{info.daily[4].temp.day.toFixed(0)}°F</h1><p className="weekday"> Friday </p><p className="date">5/14/21</p>
    <img src={clearDay} alt="clearDay" className="icons"/>
    <div className= "min"><p>Low</p><p>{info.daily[4].temp.min.toFixed(0)}°F</p></div>
    <div className= "max"><p>High</p><p>{info.daily[4].temp.max.toFixed(0)}°F</p></div>
    </Col>
    <Col className="days" id="sat"><h1>{info.daily[5].temp.day.toFixed(0)}°F</h1><p className="weekday"> Saturday</p><p className="date">5/15/21</p>
    <img src={clearDay} alt="clearDay" className="icons"/>
    <div className= "min"><p>Low</p><p>{info.daily[5].temp.min.toFixed(0)}°F</p></div>
    <div className= "max"><p>High</p><p>{info.daily[5].temp.max.toFixed(0)}°F</p></div>
    </Col>
    <Col className="days" id="sun"><h1>{info.daily[6].temp.day.toFixed(0)}°F</h1><p className="weekday">  Sunday </p><p className="date">5/16/21</p>
    <img src={clearDay} alt="clearDay" className="icons"/>
    <div className= "min"><p>Low</p><p>{info.daily[6].temp.min.toFixed(0)}°F</p></div>
    <div className= "max"><p>High</p><p>{info.daily[6].temp.max.toFixed(0)}°F</p></div>
    </Col>
  </Row>
</Container>
    </div>
  )
}
export default Weekly
