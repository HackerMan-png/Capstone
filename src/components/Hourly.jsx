import React from 'react';
import { icons } from 'react-icons/lib';
import info from "../weather.json";
import clearDay from './icons/clearDay.png';

const Hourly = () => {

  let hour = new Date().getHours();
  const arr = ['#040b3c', '#040b3c', '#192861', '#28166b', '#004372', '#016792', '#07729f', '#07729f', '#12a1c0', '#12a1c0', '#12a1c0', '#01C9D6', '#74c9e3', '#74c9e3', '#fd9e58', '#f18448', '#f06b7e', '#ca5a92', '#5b2c83', '#371a79', '#28166b', '#192861', '#040b3c', '#040b3c']


  return (
    
    <div className = "Hourly" style={{ background: arr[hour - 1] }}>

      <header className="header">
            <h1>HOURLY</h1>
      </header>

      <div className="subHead">
        <h5 className="temp">{info.current.temp.toFixed(0)}°F</h5>
        <h5 className="cityState">{info.timezone}</h5>
      </div>

      <div class="boxes">

        <div id="hour1" class="box">
          <h1>{info.hourly[0].temp.toFixed(0)}°F</h1>

          <img src={clearDay.clearDay} alt="" srcset="" />
          
          <p className="Hour">1:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[0].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[0].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[0].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour2" class="box">
          <h1>{info.hourly[1].temp.toFixed(0)}°F</h1>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[1].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[1].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[1].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour3" class="box">
          <h1>{info.hourly[2].temp.toFixed(0)}°F</h1>
          <p className="Hour"></p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[2].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[2].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[2].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour4" class="box">
          <h1>{info.hourly[3].temp.toFixed(0)}°F</h1>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[3].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[3].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[3].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour5" class="box">
          <h1>{info.hourly[4].temp.toFixed(0)}°F</h1>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[4].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[4].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[4].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour6" class="box">
          <h1>{info.hourly[5].temp.toFixed(0)}°F</h1>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[5].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[5].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[5].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour7" class="box">
          <h1>{info.hourly[6].temp.toFixed(0)}°F</h1>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[6].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[6].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[6].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour8" class="box">
          <h1>{info.hourly[7].temp.toFixed(0)}°F</h1>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[7].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[7].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[7].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour9" class="box">
          <h1>{info.hourly[8].temp.toFixed(0)}°F</h1>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[8].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[8].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[8].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour10" class="box">
          <h1>{info.hourly[9].temp.toFixed(0)}°F</h1>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[9].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[9].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[9].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour11" class="box">
          <h1>{info.hourly[10].temp.toFixed(0)}°F</h1>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[10].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[10].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[10].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour12" class="box">
          <h1>{info.hourly[11].temp.toFixed(0)}°F</h1>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[11].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[11].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[11].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>

      </div>
    </div>
  )
}


export default Hourly
