import React from "react";
import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";
import ForestIcon from '@mui/icons-material/Forest';
import footerLogo from "../../images/SmallLogoBW.png";


function Footer() {
  const links = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/ColoradoBuildingSolutions",
      id: "facebook",
      icon: function () {
        return <FacebookIcon />;
      },
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/cobuildingsolutions/",
      id: "instagram",
      icon: function () {
        return <InstagramIcon />;
      },
    },
    {
      // TODO: Ask about naming conventions here. CBS or full name?
      name: "CBS",
      link: "http://cbs-lumber.com",
      id: "cbs-lumber",
      icon: function () {
        return <ForestIcon />;
      },
    },
    {
      name: "Nova",
      link: "https://novanational.com/",
      id: "nova",
      icon: function () {
        return <StarIcon />;
      },
    },
  ];
  return (
    <div className="footer">
      <div className="contactInfo">
        <div id="logoContainer">
          <img src={footerLogo} id="footerLogo" alt="White CBS-Logo" />
        </div>
        <div>
          <h3 className="footerHeaders">Office Hours</h3>
          <p>8:00am - 3:00pm</p>
          <p>* NO in person walk-ins *</p>
        </div>
        <div id="addressContainer">
          <h3 className="footerHeaders">Address</h3>
          <p>1630 W Evans Ave, Unit C</p>
          <p>Englewood, CO 80110</p>
          <p>USA</p>
        </div>
        <div id="contactContainer">
          <h3 className="footerHeaders">More About Us</h3>
          <ul className="wrapper">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <li className={`icon ${link.id}`}>
                  <span className="tooltip">{link.name}</span>
                  <span>{link.icon()}</span>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
