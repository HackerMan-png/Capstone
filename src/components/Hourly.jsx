import React from 'react'


const Hourly = () => {
  return (
    
    <div className = "Hourly">

      <header className="header">
            <h1>Hourly</h1>
      </header>

      <div className="temp">
        <p>58°F</p>
      </div>
      <div className="cityState">
        <p>Columbus, OH</p>
      </div>

      <div class="boxes">
                <div id="box0" class="box"></div>
                <div id="box1" class="box"></div>
                <div id="box2" class="box"></div>
                <div id="box3" class="box"></div>
                <div id="box4" class="box"></div>
                <div id="box5" class="box"></div>
                <div id="box6" class="box"></div>
                <div id="box7" class="box"></div>
                <div id="box8" class="box"></div>
            </div>

    </div>
  )
}


export default Hourly
