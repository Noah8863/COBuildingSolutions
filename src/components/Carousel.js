import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";

import img1 from '../images/lumberSky.jpg'
import img2 from '../images/commericalRoof.jpg'
import img3 from '../images/lumberLabor.jpg'
import img4 from '../images/manOnRoof.jpg'
import img5 from '../images/haulingLumber.jpg'

function Carousel() {

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src={img1} alt={img1} />
          <div className="imageText">
            <h1>OSB, OSB T+G, Plywood, Lumber</h1>
            <h3>Colorado Building Solutions provides only the best wood needed for your projects</h3>
            <Link to="/lumber" className="learnMoreBtn">Learn More </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img2} alt={img2} />
          <div className="imageText">
            <h1>Commerical Roofing Service Available!</h1>
            <h3>We proud to announce the expansion of working on commerical roofing!</h3>
            <Link to="/commerical" className="learnMoreBtn">Learn More </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img3} alt={img3} />
          <div className="imageText">
            <h1>Residential Roofing Service Available!</h1>
            <h3>All shapes and sizes are welcomed with Residential roofing!</h3>
            <Link to="/residential" className="learnMoreBtn">Learn More </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img4} alt={img4} />
          <div className="imageText">
            <h1>OSB, OSB T+G, Plywood, Lumber</h1>
            <h3>Colorado Building Solutions provides only the best wood needed for your projects</h3>
            <Link to="/lumber" className="learnMoreBtn">Learn More </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img5} alt={img5} />
          <div className="imageText">
            <h1>OSB, OSB T+G, Plywood, Lumber</h1>
            <h3>Colorado Building Solutions provides only the best wood needed for your projects</h3>
            <Link to="/lumber" className="learnMoreBtn">Learn More </Link>
          </div>
        </SwiperSlide>
      </Swiper>

    </>
  );
}

export default Carousel;