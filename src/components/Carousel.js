import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../images/lumberSky.jpg'
import img2 from '../images/commericalRoof.jpg'
import img3 from '../images/lumberLabor.jpg'
import img4 from '../images/manOnRoof.jpg'
import img5 from '../images/roofingHouse.jpg'
import img6 from '../images/haulingLumber.jpg'
// import img7 from '../images/'
// import img8 from '../images/'



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
          
        </SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img2} alt={img2} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img3} alt={img3} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img4} alt={img4} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img5} alt={img5} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img6} alt={img6} /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;