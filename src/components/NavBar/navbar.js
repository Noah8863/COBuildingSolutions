import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./navbar.scss";

function NavBar() {
  return (
    <div>
      <img src={logo} id="logo" alt="logo" />
      <div className="nav">
        <nav role="navigation" className="navbar primary-navigation">
          <ul className="navbarList">
            <li>
              <Link className="dropbtn" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="dropbtn" to="/lumber">
                Lumber
              </Link>
            </li>

            <li>
              <div className="dropbtn" id="roofNav" to="/roofing">
                Roofing
              </div>
              <ul className="dropdown">
                <li className="roofLinks">
                  <Link to="/commerical">Commerical</Link>
                </li>
                <li className="roofLinks">
                  <Link to="/residential">Residential</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="dropbtn" to="/quote">
                Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;