import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";

const Nav = () => {
  const [showing, setShowing] = useState(false)

  return (
    <>
      <BiMenu className="hamburger" style={!showing ? {left: 0} : {left: 160}} onClick={() => {setShowing(!showing)}} />
      <div className="nav col-lg-1" style={showing ? {left: 0} : {left: -160}}>
        <ul>
          <li>Home</li>
          <li>Hour</li>
          <li>Day</li>
          <li>Week</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
