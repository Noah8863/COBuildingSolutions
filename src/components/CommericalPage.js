import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import img1 from '../images/commerical1.jpg'
import img2 from '../images/commerical2.jpg'
import img3 from '../images/commericalBfr.jpg'
import img4 from '../images/commericalAft.jpg'
import img5 from '../images/commericalPt3.jpg'
import img6 from '../images/commericalPt4.jpg'

function Commerical() {
    return (
        <main>
            <h1>Commerical Roofing Service</h1>
            <div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiper-slide"><img src={img1} alt={img1} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={img2} alt={img2} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={img3} alt={img3} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={img4} alt={img4} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={img5} alt={img5} /></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={img6} alt={img6} /></SwiperSlide>
                </Swiper>
                <div className="divider"></div>
            </div>
            <p>At Colorado Building Solutions, we provide qulity commerical roofing services. Our past jobs have been  </p>
        </main>
    )
}
export default Commerical;