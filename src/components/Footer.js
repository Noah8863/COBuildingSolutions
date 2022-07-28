import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import StarIcon from '@mui/icons-material/Star';

const links = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/ColoradoBuildingSolutions',
        id: 'facebook',
        icon: function () {
            return <FacebookIcon />
        }
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/cobuildingsolutions/',
        id: 'instagram',
        icon: function () {
            return <InstagramIcon />
        }
    },
    {
        name: 'Nova',
        link: 'https://novanational.com/',
        id: 'nova',
        icon: function () {
            return <StarIcon />
        }
    }
]

export default function Footer() {
    return (
        <div className="footer">
            <div className="contactInfo">
                <div id="addressContainer">
                    <h3>Address</h3>
                    <p>1630 W Evans Ave, Unit C</p>
                    <p>Englewood, CO 80110</p>
                    <p>USA</p>
                </div>
                <div id="infoContainer">
                    <h3>Contact</h3>
                    <p>Cobuildingsolutions@gmail.com</p>
                    <p>Gschendel@cobuildingsolutions.com</p>
                    <p>(720) 607-6890</p>
                </div>
                <div id="contactContainer">
                    <h3>More About Us</h3>
                    <ul className="wrapper">
                        {links.map((link) => (
                            <a key={link.id} href={link.link} target="_blank" rel="noreferrer" style={{ color: "white" }}>
                                <li className={`icon ${link.id}`}>
                                    <span className='tooltip'>
                                        {link.name}
                                    </span>
                                    <span>
                                        {link.icon()}
                                    </span>
                                </li>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
            <div id="creator">
                <p style={{color: "black"}}>Proudly Created by <a href="https://github.com/Noah8863" style={{ color: "black" }} target="_blank" rel="noreferrer"> Noah Hoffman </a></p>
            </div>
        </div>
    )
}