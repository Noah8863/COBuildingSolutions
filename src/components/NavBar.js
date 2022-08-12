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
                            <Link className="dropbtn" to="/roofing">Roofing</Link>
                            <ul className="dropdown">
                                <li className="roofLinks">Commerical</li>
                                <li className="roofLinks">Residentinal</li>
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
