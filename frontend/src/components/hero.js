import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";
import { CheckForm } from "./forms/checkForm";
import { BookingButton } from "./bookingButton";
import { CarouselItem } from "./carouselCard";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="hero" className="carousel-container">
      <div
        id="carouselHero"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselHero"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHero"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHero"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <CarouselItem
            active
            image="https://cdn.pixabay.com/photo/2021/05/14/08/44/running-6252827_1280.jpg"
            slogan="Small steps thrive amid significant changes"
            sloganDescription="We help you enhance your physical, mental, and overall health. Through small adjustments in mindset, nutrition, and physical activity, even minor changes can lead to remarkable transformations."
          />
          <CarouselItem
            image="https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            slogan="Small steps thrive amid significant changes"
            sloganDescription="We help you enhance your physical, mental, and overall health. Through small adjustments in mindset, nutrition, and physical activity, even minor changes can lead to remarkable transformations."
          />
          <CarouselItem
            image="https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            slogan="Small steps thrive amid significant changes"
            sloganDescription="We help you enhance your physical, mental, and overall health. Through small adjustments in mindset, nutrition, and physical activity, even minor changes can lead to remarkable transformations."
          />

          {/* MODAL TO USE IN ALL THE LANDING PAGE TO SHOW THE CHECK FORM */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <CheckForm />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselHero"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselHero"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};