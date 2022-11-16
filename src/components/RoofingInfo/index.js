import React from "react";
import "./roof.scss";
import { Link } from "react-router-dom";
import roofIcon from "../../Icons/roof-icon.png";
import gutterIcon from "../../Icons/gutter-icon.png";
import skylightIcon from "../../Icons/skylight-icon.png";
import roofInspectionIcon from "../../Icons/roof-inspection-icon.png";
import solarIcon from "../../Icons/solar-icon.png";
import lumberIcon from "../../Icons/lumber-icon.png";

function roofInfo() {
  return (
    <main className="infoArea">
      <div id="working-with-us">
        <div id="working-with-us-container">
          <h1>WORKING WITH US</h1>
          <p>
            Colorado Building Solutions is devoted to providing the highest
            quality at the best rates for your next commercial or residential
            roofing project. We offer every type of roofing service including;
            roofing inspections, Gutter Installation, Gutter Repair, Gutter
            Cleaning, Skylight installation, Solar Installation, and Lumber
            products. We are able to work on almost every roofing material:
            Shake, Flat roofs, Custom roofs, Metal, tile, shingle, single ply,
            stone coated steel. Our goal is to help you cover YOUR investments
            in all roofing aspects, while providing quality service and
            products. We work hard to ensure our materials are stocked and
            reasdy for when our clients need us.{" "}
          </p>
          <Link to="/quote">
            <button className="contact-us-btn-roof">Get A Quote!</button>
          </Link>
        </div>
      </div>
      <div id="service-container">
        <div id="service-container-grid">
          <h1 id="our-services-header">OUR SERVICES</h1>
          <div className="service-items">
            <img className="icons" src={roofIcon} alt="Roofing Icon" />
            <h5>Roofing</h5>
            <p>
              We work with any material! Shake, Flat roofs, Custom roofs, Metal,
              tiel, shingle, single ply, stone coated steel
            </p>
          </div>

          <div className="service-items">
            <img className="icons" src={gutterIcon} alt="Gutter Icon" />
            <h5>Gutter</h5>
            <p>Installation, Repair, and Cleaning</p>
          </div>

          <div className="service-items">
            <img className="icons" src={skylightIcon} alt="Skylight Icon" />
            <h5>Skylights</h5>
            <p>Installation, Repair, and Replacements</p>
          </div>

          <div className="service-items">
            <img className="icons" src={solarIcon} alt="Solar Icon" />
            <h5>Solar</h5>
            <p>Installation, Repair, and Replacements</p>
          </div>

          <div className="service-items">
            <img className="icons" src={lumberIcon} alt="Lumber Icon" />
            <h5>Lumber</h5>
            <p>OSM, Plywood, I Joists, OBS, OBS Tongue and Groove</p>
          </div>

          <div className="service-items">
            <img
              className="icons"
              src={roofInspectionIcon}
              alt="Roofing Inspection Icon"
            />
            <h5>Roof Inspections</h5>
            <p>Certified and Experinced</p>
          </div>
        </div>
        {/*TODO: may need to set some ids for special styles here */}
        {/* <Link to="/quote">
            <button className="contact-us-btn">Contact Us</button>
          </Link> */}
      </div>
    </main>
  );
}

export default roofInfo;
