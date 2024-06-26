import React from "react";
import { BookingButton } from "./bookingButton";

export const CarouselItem = ({ image, title, sloganDescription, slogan, active }) => {
  const itemClass = active ? "carousel-item active" : "carousel-item";
  return (
    <div className={itemClass} data-bs-interval="5000">
      <img src={image} className="d-block w-100" alt={title} />
      <div className="carousel-caption">
        <div
          className="d-flex flex-column align-items-start justify-content-around"
          id="slogan"
        >
          <h1 className="slogan-header mb-5">{slogan}</h1>
          <p className="slogan-description">{sloganDescription}</p>
        </div>
        <BookingButton />
      </div>
    </div>
  );
};