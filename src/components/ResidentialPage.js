import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import img1 from '../images/homePt1.jpg'
import img2 from '../images/homePt2.jpg'
import img3 from '../images/homePt3.jpg'
import img4 from '../images/homePt4.jpg'
import img5 from '../images/residentialPt1.jpg'
import img6 from '../images/residentialPt2.jpg'

function Residential() {
    return (
        <main>
            <h1>Commerical Roofing Service</h1>
            <div>
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
                <div className="divider"></div>
            </div>
        </main>
    )
}
export default Residential;