import React from 'react';
import { Link } from 'react-router-dom';

function textInfo() {
    return (
        <main className='infoArea'>
            <h2 className='infoAreaTitles'>WHO WE ARE</h2>
            <p className='infoText'>Colorado Building Solutions serves as a leading commercial and residential roofing company, along with a commercial lumber division in the greater Denver and surrounding areas. We’re a team of fully-certified professionals who tackle everything from complex large projects to smaller scale jobs. Fueled by our commitment to excellence, we go the extra mile to make sure clients are completely satisfied with our work. Call us today to schedule a consultation. </p>
            <Link to='/quote'><button class="learn-more">
                <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text">Contact Us</span>
            </button></Link>
            <div class='banner'></div>
            <h2 className='infoAreaTitles'>Roof Replacement</h2>
            <p className='infoText'>Looking for a reliable contractor with extensive experience for your next project? At Colorado Building Solutions, we stand by the excellence of our work and provide clients with personalized attention based on their specific needs. If you’re looking for professional Roof Replacement services, please get in touch for your consultation.</p>
            <div class='banner'></div>
            <h2 className='infoAreaTitles'>Lumber</h2>
            <p className='infoText'>Colorado Building Solutions provides a variety of lumber ranging from OSB, OSB Tongue and Groove, Pylowood, and traditional lumber. We sell by the bunk and are a commerical whole seller. </p>
            <div class='banner'></div>
            <h2 className='infoAreaTitles'>About Us</h2>
            <p className='infoText'>Colorado Building Solutions was founded back in 2020 and is based out of Englewood Colorado. We have partnerships with Nova Incorporations and take pride in all of our services we provide.</p>
        </main>

    )
}

export default textInfo;