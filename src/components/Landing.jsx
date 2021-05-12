import React, { useState } from 'react';
// import { Container, Row, Col } from "react-bootstrap";
import info from "../weather.json"

const Landing = () => {

  // const [hour, setHour] = useState(0)
  // let interval;

  let hour = new Date().getHours()
  const arr = ['#040b3c', '#040b3c', '#192861', '#28166b', '#004372', '#016792', '#07729f', '#07729f', '#12a1c0', '#12a1c0', '#12a1c0', '#01C9D6', '#74c9e3', '#74c9e3', '#fd9e58', '#f18448', '#f06b7e', '#ca5a92', '#5b2c83', '#371a79', '#28166b', '#192861', '#040b3c', '#040b3c']
  // function findHour() {
  //   setHour(hour+1)
  //   console.log(hour)
  // }

  // const colorChange= () => {
  //     interval = setInterval(findHour, 1000)
  // }

  return (
    <div className="currentWrapper" style={{ background: arr[hour - 1] }}>

      <div id="cloud-intro">

        <div className="infoWrapper">

          <div className="temp">
            <p>{info.current.temp.toFixed(0)}°F</p>
          </div>


          <div className="location">
            <p>{info.timezone}</p>
          </div>

          <div className="row">
            <div className="feelsLike">
              <p>Feels Like</p>
              <p>{info.current.feels_like.toFixed(0)}°F</p>
            </div>

            <div className="humidity">
              <p>Humidity</p>
              <p>{info.current.humidity}%</p>
            </div>

            <div className="windSpeed">
              <p>Wind Speed</p>
              <p>{info.current.wind_speed.toFixed(0)} MPH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
