import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";

const Nav = ({ changePage }) => {
  const [showing, setShowing] = useState(true)
  const [width, setWidth] = useState("0px")

  return (
    <>
      <BiMenu className="hamburger" style={showing ? { display: "block" } : { display: "none" }} onClick={() => { setWidth("250px"); setShowing(!showing) }} />
      <div className="sidenav" style={{ width: width }}>
        <p className="closebtn" onClick={() => { setWidth("0px"); setShowing(!showing) }}>&times;</p>
        <p onClick={() => changePage("landing")}>Home</p>
        <p onClick={() => changePage("hourly")}>Hourly</p>
        <p onClick={() => changePage("today")}>Today</p>
        <p onClick={() => changePage("daily")}>Daily</p>
        <p onClick={() => changePage("weekly")}>Weekly</p>
      </div>
    </>
  );
};

export default Nav;
