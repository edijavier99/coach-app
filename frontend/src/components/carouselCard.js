import React from "react";
import { BookingButton } from "./bookingButton";

export const CarouselItem = ({ image, title, sloganDescription, slogan, active, customClass }) => {
  return (
    <div className={`carousel-item ${active ? 'active' : ''} ${customClass}`} data-bs-interval="5000" >
      <img src={image} className="d-block w-100 carousel-image" alt={title} />
      <div className="carousel-caption ">
        <div
          className="d-flex flex-column  "
          id="slogan"
          >
            <h1 className="slogan-header mb-5">{slogan}</h1>
            <p className="slogan-description">{sloganDescription}</p>
        </div>
        <div className="mx-auto bookingBtnContainer">
          <BookingButton />
        </div>
      </div>
    </div>
  );
};