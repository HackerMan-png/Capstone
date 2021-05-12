import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import info from "../weather.json"

const Landing = () => {
  return (
    <div className="currentWrapper">

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
