import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "../../images/logo.png";


function Navbar() {
  return (
    <div id="navbar-container">
      <nav id="navbar">
        <div id="logo-container">
          <img id="logo" src={logo} alt="CBS-Logo"/>
        </div>
        <div>
          <ul id="navbar-items">
            <Link to="/">
              <li className="navbar-containers">
                <p>HOME</p>
              </li>
            </Link>
            <Link to="/services">
              <li className="navbar-containers">
                <p>SERVICES </p>
              </li>
            </Link>
            <Link to="/quote">
              <li className="navbar-containers">
                <p id="contact-btn">CONTACT US</p>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
