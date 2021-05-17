import React from 'react'
import info from "../weather.json"

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
            <ul>
              <li>Feels Like: {info.hourly[0].feels_like.toFixed(0)}°F</li>
            </ul>
        </div>
        <div id="hour2" class="box">
          <h1>{info.hourly[1].temp.toFixed(0)}°F</h1>
        </div>
        <div id="hour3" class="box">
          <h1>{info.hourly[2].temp.toFixed(0)}°F</h1>
            <p></p>
        </div>
        <div id="hour4" class="box">
          <h1>{info.hourly[3].temp.toFixed(0)}°F</h1>
            <p></p>
        </div>
        <div id="hour5" class="box">
          <h1>{info.hourly[4].temp.toFixed(0)}°F</h1>
            <p></p>
        </div>
        <div id="hour6" class="box">
          <h1>{info.hourly[5].temp.toFixed(0)}°F</h1>
            <p></p>
        </div>
        <div id="hour7" class="box">
          <h1>{info.hourly[6].temp.toFixed(0)}°F</h1>
            <p></p>
        </div>
        <div id="hour8" class="box">
          <h1>{info.hourly[7].temp.toFixed(0)}°F</h1>
            <p></p>
        </div>
        <div id="hour9" class="box">
          <h1>{info.hourly[8].temp.toFixed(0)}°F</h1>
            <p></p>
        </div>
        <div id="hour10" class="box">
          <h1>{info.hourly[9].temp.toFixed(0)}°F</h1>
            <p></p>
        </div>
        <div id="hour11" class="box">
          <h1>{info.hourly[10].temp.toFixed(0)}°F</h1>
            <p></p>
        </div>
        <div id="hour12" class="box">
          <h1>{info.hourly[11].temp.toFixed(0)}°F</h1>
            <p></p>
        </div>

      </div>
    </div>
  )
}


export default Hourly
