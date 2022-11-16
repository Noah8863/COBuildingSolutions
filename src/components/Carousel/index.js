import React from "react";
import "./carousel.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import winterBanner from "../../images/Winter-Banner-Edit-1.png";
import stormBanner from "../../images/Storm-Banner-edit.png"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className="carousel-images" alt="Winter-is-coming" src={winterBanner} /></SwiperSlide>
      <SwiperSlide><img className="carousel-images" alt="Storm-damage-is-coming" src={stormBanner} /></SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
