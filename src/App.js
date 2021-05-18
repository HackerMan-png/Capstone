import React, { useState } from 'react';
import "./css/style.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Nav, Landing, Hourly, Weekly } from './components/exports.jsx';
import data from "./weather.json";

function App() {
  const [landing, setLanding] = useState(true)
  const [hourly, setHourly] = useState(false)
  const [weekly, setWeekly] = useState(false)

  const changePage = (page) => {
      setHourly(false);
      setLanding(false);
      setWeekly(false);

      switch (page) {
        case "landing":
          setLanding(true)
          break;
        case "hourly":
          setHourly(true)
          break;
        case "weekly":
          setWeekly(true)
          break
    }
  }

  let hour = new Date().getHours()
  const arr = ['#040b3c', '#040b3c', '#192861', '#28166b', '#004372', '#016792', '#07729f', '#07729f', '#12a1c0', '#12a1c0', '#12a1c0', '#01C9D6', '#74c9e3', '#74c9e3', '#fd9e58', '#f18448', '#f06b7e', '#ca5a92', '#5b2c83', '#371a79', '#28166b', '#192861', '#040b3c', '#040b3c']

  return (

    <div className="App" style={{ background: arr[hour - 1] }}>
      <Nav changePage={changePage} />
      {landing && <Landing />}
      {hourly && <Hourly />}
      {weekly && <Weekly />}
    </div>
  );
}

export default App;
