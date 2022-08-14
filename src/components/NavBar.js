import React from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link'

export default function NavBar() {
    return (
        
        <div>
            <img src={logo} id="logo" alt="logo" />
            
            <div className="nav">
                <nav role="navigation" className='navbar primary-navigation'>
                
                    <ul className="navbarList">
                        <li>
                            <Link className="dropbtn" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="dropbtn" to="/lumber">Lumber</Link>
                        </li>

                        <li >
                            <div className="dropbtn" id="roofNav" to="/roofing">Roofing</div>
                            <ul className="dropdown">
                                <li className="roofLinks">
                                    <Link to="/commerical">Commerical</Link>
                                </li>
                                <li className="roofLinks">
                                    <Link to="/residential">Residentinal</Link>
                                </li>
                            </ul>
                        </li>

                        <li >
                            <Link className="dropbtn" to="/quote">Quote</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
