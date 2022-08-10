import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../images/lumberCutPic.jpeg'
import img2 from '../images/roofingInstallPic.jpeg'
import img3 from '../images/constructionPic.jpg'
import img4 from '../images/constructionPic2.jpeg'
import img5 from '../images/roofingInstallPic.jpg'
// import img6 from '../images/'
// import img7 from '../images/'
// import img8 from '../images/'



function Carousel() {

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide"><img src={img1} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img2} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img3} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img4} /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={img5} /></SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;