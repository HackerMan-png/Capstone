import React from 'react';
import { icons } from 'react-icons/lib';
import info from "../weather.json";
import dayBackground from "../media/dayBackground.jpg"
import duskBackground from "../media/duskBackground.png"
import nightBackground from "../media/nightBackground.png"
import clearDay from './icons/clearDay.png';
import partlyCloudyDay from './icons/partlyCloudyDay.png';

const Hourly = () => {

  let hour = new Date().getHours();
  // let hour = 21;
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
    
    <div className = "Hourly" style={{ backgroundImage: `url(${findBackground()})`}}>

    <div className="header">
      <h1 className="title" style = {{ color: (hour > 20) && "white"}}>HOURLY</h1>

      <h5 className="temp" style = {{ color: (hour > 20) && "white"}}>{info.current.temp.toFixed(0)}°F</h5>
      <h5 className="cityState" style = {{ color: (hour > 20) && "white"}}>{info.timezone}</h5>
    </div>

      <div class="boxes">

        <div id="hour1" class="box">
          <h1>{info.hourly[0].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">1:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[0].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[0].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[0].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour2" class="box">
          <h1>{info.hourly[1].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">2:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[1].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[1].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[1].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour3" class="box">
          <h1>{info.hourly[2].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">3:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[2].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[2].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[2].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour4" class="box">
          <h1>{info.hourly[3].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">4:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[3].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[3].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[3].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour5" class="box">
          <h1>{info.hourly[4].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">5:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[4].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[4].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[4].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour6" class="box">
          <h1>{info.hourly[5].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">6:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[5].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[5].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[5].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour7" class="box">
          <h1>{info.hourly[6].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">7:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[6].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[6].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[6].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour8" class="box">
          <h1>{info.hourly[7].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">8:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[7].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[7].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[7].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour9" class="box">
          <h1>{info.hourly[8].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">9:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[8].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[8].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[8].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour10" class="box">
          <h1>{info.hourly[9].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">10:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[9].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[9].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[9].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour11" class="box">
          <h1>{info.hourly[10].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">11:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[10].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[10].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[10].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour12" class="box">
          <h1>{info.hourly[11].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">12:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[11].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[11].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[11].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour13" class="box">
          <h1>{info.hourly[12].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">1:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[12].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[12].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[12].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour14" class="box">
          <h1>{info.hourly[13].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">2:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[13].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[13].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[13].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour15" class="box">
          <h1>{info.hourly[14].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">3:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[14].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[14].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[14].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour16" class="box">
          <h1>{info.hourly[15].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">4:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[15].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[15].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[15].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour17" class="box">
          <h1>{info.hourly[16].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">5:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[16].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[16].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[16].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour18" class="box">
          <h1>{info.hourly[17].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">6:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[17].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[17].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[17].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour19" class="box">
          <h1>{info.hourly[18].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">7:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[18].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[18].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[18].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour20" class="box">
          <h1>{info.hourly[19].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">8:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[19].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[19].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[19].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour21" class="box">
          <h1>{info.hourly[20].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">9:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[20].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[20].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[20].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour22" class="box">
          <h1>{info.hourly[21].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">10:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[21].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[21].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[21].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour23" class="box">
          <h1>{info.hourly[22].temp.toFixed(0)}°F</h1>

          <img src={clearDay} alt="clearDay" className="icons"/>
          
          <p className="Hour">11:00pm</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[22].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[22].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[22].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>
        <div id="hour24" class="box">
          <h1>{info.hourly[23].temp.toFixed(0)}°F</h1>

          <img src={partlyCloudyDay} alt="partyCloudyDay" className="icons"/>
          
          <p className="Hour">12:00am</p>
            <ul>
              <li>Feels Like: </li><p>{info.hourly[23].feels_like.toFixed(0)}°F</p>
              <li>Humidity: </li><p>{info.hourly[23].humidity.toFixed(0)}%</p>
              <li>Wind Speed: </li><p>{info.hourly[23].wind_speed.toFixed(0)}mph</p>
            </ul>
        </div>        

      </div>
    </div>
  )
}


export default Hourly
