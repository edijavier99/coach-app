import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import "../styles/eachCard.css";

export const ServiceCard = ({ title, category, delayTime, description, imgOne, imgTwo, imgThree, reverse }) => {
    const cardLeftClass = reverse ? "sv-card-right col-md-6" : "sv-card-left col-md-6";
    const cardRightClass = reverse ? "sv-card-left col-md-6" : "sv-card-right col-md-6";

    return (
        <article id="each-service-card" className="container-fluid">
            <div className="row col-11 mx-auto">
                <div className={cardLeftClass}>
                    <h2 className='each-service-title'>{title}</h2>
                    <p className="text-muted">{category}</p>
                    <p className='each-service-description'>{description}</p>
                    <a className="booking bookingHero" href="/appointment">Make A Booking</a>
                </div>
                <div className={cardRightClass}>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        autoplay={{ delay: delayTime }} // Corregido aquí
                        spaceBetween={30}
                        mousewheel={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Mousewheel, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img alt='' src={imgOne} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='' src={imgTwo} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='' src={imgThree} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </article>
    )
}