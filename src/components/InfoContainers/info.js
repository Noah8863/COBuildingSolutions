import React from "react";
import ContactButton from "../ContactButton/contactButton";
import { Link } from "react-router-dom";
import './info.scss'

function textInfo() {
  return (
    <main className="infoArea">
      <h1 className="infoAreaTitles">WHO WE ARE</h1>
      <p className="infoText">
        Established in 2017 Colorado Building Solutions serves as a leading
        commercial and residential roofing company. We offer roofing services
        like roof repair, replacements, gutter cleaning, skylight installation
        and more. We also have a bulk lumber division with stock ready for
        pickup when needed. For all your building needs in the greater Denver,
        Golden, Westminster, Thornton, Broomfield, Boulder, Lakewood, Littleton,
        Highlands Ranch, Centennial, Parker, Aurora, Brighton, and the
        surrounding areas. We are a team of fully certified professionals who
        tackle everything from complex, large projects to smaller scale
        commercial jobs. Fueled by our commitment to excellence, Colorado
        Building Solutions goes the extra mile to make sure clients are
        completely satisfied with our work. Colorado Building Solutions,
        Covering your investments.{" "}
      </p>
      <Link to="/quote">
        <ContactButton name="Contact Us" />
      </Link>
      <div className="banner"></div>
      <h1 className="infoAreaTitles">ROOFING SERVICES</h1>
      <h1 id="roofing-sub-text">
        Looking for a reliable contractor with extensive experience for your
        next project?
      </h1>
      <p className="infoText">
        At Colorado Building Solutions, we stand by the excellence of our work
        and provide clients with personalized attention based on their specific
        needs. When it comes to your roofing needs, we serve Denver, Golden,
        Westminster, Thornton, Broomfield, Boulder, Lakewood, Littleton,
        Highlands Ranch, Centennial, Parker, Aurora, Brighton, and the
        surrounding areas., with services like: Roof Replacement, shingle
        replacement, roof damage repairs, gutter cleaning and installation,
        skylight installation and repairs as well. When it comes to your roof we
        are here for you to help cover your investments. If you’re looking for
        professional roof replacement services, we are the experts in the field.
      </p>
      <div className="banner"></div>
      <h1 className="infoAreaTitles">LUMBER</h1>
      <p className="infoText">
        Colorado Building Solutions now has a bulk lumber supply at our
        warehouse, available today for pickup or delivery. Colorado Building
        Solutions provides a variety of lumber to meet all of your building
        needs. Our Lumber supply includes OSB, OSB Tongue and Groove, Plywood, I
        joist, and traditional lumber. With a few other products being added
        soon. Colorado Building Solutions is a wholesale lumber vendor serving
        Denver, Golden, Westminster, Thornton, Broomfield, Boulder, Lakewood,
        Littleton, Highlands Ranch, Centennial, Parker, Aurora, Brighton, and
        other surrounding areas.
      </p>
      <Link to="/quote">
        <ContactButton name="Get A Quote" />
      </Link>
      <div className="banner"></div>
      <h1 className="infoAreaTitles">OUR SERVICES</h1>
      <div id="our-services-container">
        <ul>
          <li>
            Roofing- We work with almost any roofing material.
            <ul>
              <li>Shake</li>
              <li>Flat Roofs</li>
              <li>Custom Roofs</li>
              <li>Metal</li>
              <li>Tile</li>
              <li>Shingle</li>
              <li>Single Ply</li>
              <li>Stone Coated Steel</li>
            </ul>
          </li>
          <li>Gutter Installation</li>
          <li>Gutter Repair</li>
          <li>Gutter Cleaning</li>
          <li>Skylights</li>
          <li>Solar</li>
          <li>Roof Inspections</li>
          <li>
            <a href="/lumber">Lumber</a>
          </li>
        </ul>
      </div>
      <h1 className="infoAreaTitles">ABOUT US</h1>
      <p className="infoText">
        Colorado Building Solutions was founded back in 2017 based out of
        Englewood, Colorado. Our business got its start when our owners decided
        to take a step into roofing construction products and services to add an
        affordable, dependable, and quality roofing company and lumber supply to
        Denver, Golden, Westminster, Thornton, Broomfield, Boulder, Lakewood,
        Littleton, Highlands Ranch, Centennial, Parker, Aurora, Brighton, and
        other surrounding areas. We take pride in all our services we offer and
        strive to provide you with great service. We are here to help you Cover
        Your Investments. Colorado Building Solutions has partnerships with Nova
        Incorporations.
      </p>
    </main>
  );
}

export default textInfo;