import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { BiMenu } from "react-icons/bi";

const Nav = () => {
    const [showing, setShowing] = useState(false)
    const [width, setWidth] = useState("250px")

    return (
        <>
            <BiMenu className="hamburger" style={showing ? {display: "block"} : {display: "none"}} onClick={() => {setWidth("250px"); setShowing(!showing)}}    />
            <div className="sidenav" style={{width:width}}>
                <a href="javascript:void(0)" className="closebtn" onClick={()=>{setWidth("0px"); setShowing(!showing)}}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </>
    );
};

export default Nav;
