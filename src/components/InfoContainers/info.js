import React from "react";
// import ContactButton from "../ContactButton/contactButton";
import VideoPlayer from "react-background-video-player";
import { Link } from "react-router-dom";
import "./info.scss";
import roofIcon from "../../Icons/roof-icon.png";
import gutterIcon from "../../Icons/gutter-icon.png";
import skylightIcon from "../../Icons/skylight-icon.png";
import roofInspectionIcon from "../../Icons/roof-inspection-icon.png";
import solarIcon from "../../Icons/solar-icon.png";
import lumberIcon from "../../Icons/lumber-icon.png";
import backgroundVideo from "../../Videos/Drone-Video.mp4";

function textInfo() {
  return (
    <main className="infoArea">
      <div id="about-us-container">
        <div id="about-us-card">
          <VideoPlayer
            className="video"
            src={backgroundVideo}
            autoPlay={true}
            muted={true}
          />
          <p className="infoText">
          <h1 id="who-we-are">WHO WE ARE</h1>
            Established in 2017 Colorado Building Solutions serves as a leading
            commercial and residential roofing company. We offer roofing
            services like roof repair, replacements, gutter cleaning, skylight
            installation and more. We also have a bulk lumber division with
            stock ready for pickup when needed. For all your building needs in
            the greater Denver, Golden, Westminster, Thornton, Broomfield,
            Boulder, Lakewood, Littleton, Highlands Ranch, Centennial, Parker,
            Aurora, Brighton, and the surrounding areas. We are a team of fully
            certified professionals who tackle everything from complex, large
            projects to smaller scale commercial jobs. Fueled by our commitment
            to excellence, Colorado Building Solutions goes the extra mile to
            make sure clients are completely satisfied with our work. Colorado
            Building Solutions, Covering your investments.
            <Link to="/quote">
              <button className="contact-us-btn">Contact Us</button>
            </Link>
          </p>
        </div>
      </div>
      <div id="roofing-info-container">
        <div id="roofing-info-card">
          <div className="infoRoofText">
            <h1 id="infoAreaTitles-mobile">ROOFING SERVICES</h1>
            Looking for a reliable contractor with extensive experience for your
            next project? At Colorado Building Solutions, we stand by the
            excellence of our work and provide clients with personalized
            attention based on their specific needs. When it comes to your
            roofing needs, we serve Denver, Golden, Westminster, Thornton,
            Broomfield, Boulder, Lakewood, Littleton, Highlands Ranch,
            Centennial, Parker, Aurora, Brighton, and the surrounding areas.,
            with services like: Roof Replacement, shingle replacement, roof
            damage repairs, gutter cleaning and installation, skylight
            installation and repairs as well. When it comes to your roof we are
            here for you to help cover your investments. If you’re looking for
            professional roof replacement services, we are the experts in the
            field.
            <Link to="/quote">
              <button className="contact-us-btn">Get A Quote!</button>
            </Link>
            <h1 id="infoAreaTitles-desktop">ROOFING SERVICES</h1> 
          </div>
        </div>
      </div>
      <div className="info-containers">
        <div className="info-cards">
          <div>
            <h1 className="card-header">ABOUT US</h1>
          </div>
          <div>
            <p>
              Colorado Building Solutions was founded back in 2017 based out of
              Englewood, Colorado. Our business got its start when our owners
              decided to take a step into roofing construction products and
              services to add an affordable, dependable, and quality roofing
              company and lumber supply to Denver, Golden, Westminster,
              Thornton, Broomfield, Boulder, Lakewood, Littleton, Highlands
              Ranch, Centennial, Parker, Aurora, Brighton, and other surrounding
              areas. We take pride in all our services we offer and strive to
              provide you with great service. We are here to help you Cover Your
              Investments. Colorado Building Solutions has partnerships with
              Nova Incorporations.
            </p>
          </div>
        </div>
      </div>
      <div id="service-container">
        <h1>OUR SERVICES</h1>
        <div id="service-container-grid">
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

export default textInfo;
