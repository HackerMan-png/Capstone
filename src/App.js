import React, { useState } from 'react';
import "./css/style.css"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Nav, Landing, Hourly, Today, Weekly } from './components/exports.jsx';
import data from "./weather.json"

function App() {
  const [landing, setLanding] = useState(true)
  const [hourly, setHourly] = useState(false)
  const [today, setToday] = useState(false)
  const [weekly, setWeekly] = useState(false)

  const changePage = (page) => {
      setHourly(false);
      setLanding(false);
      setToday(false);
      setWeekly(false);

      switch (page) {
        case "landing":
          setLanding(true)
          break;
        case "hourly":
          setHourly(true)
          break;
        case "today":
          setToday(true)
          break
        case "weekly":
          setWeekly(true)
          break
    }
  }


  return (
    <div className="App">
      <Nav changePage={changePage} />
      {landing && <Landing />}
      {hourly && <Hourly />}
      {today && <Today />}
      {weekly && <Weekly />}
    </div>
  );
}

export default App;
