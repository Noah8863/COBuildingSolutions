import React from 'react';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link'
import HamburgerButton from './Hamburger'

export default function NavBar() {
    return (
        <div>
            <img src={logo} id="logo" alt="logo" />

            <div className="nav">
                <nav role="navigation" className='navbar primary-navigation'>
                <HamburgerButton />
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
                                <li><a>Commerical</a></li>
                                <li><a>Residentinal</a></li>
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





{/* <nav role="navigation" className="primary-navigation">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Work &dtrif;</a>
            <ul className="dropdown">
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Illustration</a></li>
                <li><a href="#">Iconography</a></li>
            </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav> */}