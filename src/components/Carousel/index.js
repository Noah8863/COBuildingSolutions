import React from "react";
import "./carousel.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import winterBanner from "../../images/Winter-Banner.png";
import stormBanner from "../../images/Storm-Banner-edit.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide><img className="carousel-images" alt="winter-is-coming" src={winterBanner} /></SwiperSlide>
      <SwiperSlide><img className="carousel-images" alt="winter-is-coming" src={stormBanner} /></SwiperSlide>
      {/* <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
}

export default Carousel;
