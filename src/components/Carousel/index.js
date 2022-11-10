import React from "react";
import "./carousel.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../../images/Winter-Banner-Edit.png";
import banner2 from "../../images/Storm-Banner.png"

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
      <SwiperSlide>
        <img className="carousel-images" alt="winter-is-coming" src={banner1} />
        <button id="test-button">Click me</button>
      </SwiperSlide>
      <SwiperSlide><img className="carousel-images" alt="winter-is-coming" src={banner2} /></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
