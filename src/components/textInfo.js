import React from 'react'
import roofPicture from '../images/roofing.jpg'
import skylightPicture from '../images/skylight.jpg'
import solarPanel from '../images/solarPanel.jpg'

function textInfo() {
    return (
        <div>
            <article className="roofblock">
                <div className="rooftext">
                    <h3> <strong>Roof Replacement</strong></h3>
                    <p>Looking for a reliable contractor with extensive experience for your next
                        project? At Colorado Building Solutions, we stand by the excellence of our work and provide clients with
                        personalized attention based on their specific needs. If you’re looking for professional Roof
                        Replacement services, please get in touch for your consultation.</p>
                </div>
                <div>
                    <img className="roofImage" src={roofPicture} alt=""/>
                </div>
            </article>
            <article className="skylightblock">
                <div>
                    <img className="skylightImage" src={skylightPicture} alt=""/>
                </div>
                <div className="skylightText">
                    <h3>SkyLight Installation </h3>
                    <p> At Colorado Building Solutions, our clients are our number one priority and we
                        go the extra mile to make sure they’re completely satisfied. With this service, we’re fully prepared to
                        tackle even the most complex projects and stand by the exceptional quality of our work. Call us today
                        and find out more about what we can do for you.</p>
                </div>
            </article>
            <article className="solarblock">
                <div className="solarText">
                    <h3>Solar Panel Installation</h3>
                    <p>When you’re looking for top quality work, Colorado Building Solutions is here
                        to help. Our contracting professionals are available to provide a wide range of customizable options,
                        all guaranteed to meet and exceed expectations. Contact our office today to learn more about this and
                        our other available services.</p>
                </div>
                <div>
                    <img className="solarImage" src={solarPanel} alt="" />
                </div>
            </article>
        </div>
    )
}

export default textInfo;