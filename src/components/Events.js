import React from 'react'
import '../styles/events.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import rave from "../Images/rave.jpeg"
import envisage from "../Images/envisage.jpeg"
const Events = ({pos}) => {
    return (
        <div className="events-landing-home" style={ {
        
            transform: 'translateZ('+pos+'px)',
            
            }}>
            <div className="events-heading">
                EVENT HIGHLIGHTS
            </div>
            <div>
                <img src={rave}></img>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {

                        slidesPerView: 2,
                    },

                    1222: {
                        slidesPerView: 2,
                    }
                }}
            >
                <SwiperSlide><div className="events-hexagon">
                    <div className="shape">
                        <img src={rave} alt="" />
                        <div className="events-content">
                            <div>
                                <h2>Some Events</h2>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="events-hexagon">
                    <div className="shape">
                        <img src={envisage} alt="" />
                        <div className="events-content">
                            <div>
                                <h2>Envisage Show</h2>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
            </Swiper>
           
        </div>
    )
}

export default Events