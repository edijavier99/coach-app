import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import "../styles/eachCard.css";
import { BookingButton } from './bookingButton';

export const ServiceCard = ({ title, category, delayTime, description, imgOne, imgTwo, imgThree, reverse, identification }) => {
    const cardLeftClass = reverse ? "sv-card-right col-md-6" : "sv-card-left col-md-6";
    const cardRightClass = reverse ? "sv-card-left col-md-6" : "sv-card-right col-md-6";

    return (
        <article id="each-service-card" className="container-fluid">
            <div className="row col-11 mx-auto" id={identification}>
                <div className={cardLeftClass}>
                    <h2 className='each-service-title'>{title}</h2>
                    <p className="text-muted">{category}</p>
                    <p className='each-service-description'>{description}</p>
                    <BookingButton />
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
                            <img alt={`img-${category}`} src={imgOne} />
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
