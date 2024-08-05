import React from "react";
import "../styles/hero.css";
import { CheckForm } from "./forms/checkForm";
import { CarouselItem } from "./carouselCard";
import ejercicio from  "../videos/ejercicio.mp4"
import meditation  from "../videos/meditation.mp4"


export const Hero = () => {
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
            customClass="carousel-item-1"
            active
            image="https://images.unsplash.com/photo-1434719079929-f61498a4828e?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            slogan="Small steps brings significant changes"
            sloganDescription="Transforming your life begins with changing your mindset. Embrace positivity, set realistic goals, and believe in yourself. Small changes, when consistent, lead to big results. We'll guide you every step of the way."
            />
          <CarouselItem
            customClass="carousel-item-2"
            // image="https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            slogan="Fitness fuels the mind"
            video={true}
            videoTitle={ejercicio}
            sloganDescription="Regular physical activity is a powerful tool for mental clarity and emotional resilience. Engaging in the right fitness routine tailored to your lifestyle will not only boost your physical health but also enhance your mindset and overall well-being."
            />
          <CarouselItem
            customClass="carousel-item-3"
            slogan="Meditation Nurtures the Soul"
            video={true}
            videoTitle={meditation} // Asegúrate de que 'meditation' sea la ruta al video correcto
            sloganDescription="Meditation calms the mind, reduces stress, and promotes inner peace. By incorporating mindful meditation into your routine, you can enhance mental clarity, achieve emotional balance, and foster a deeper sense of well-being."
          />

          {/* MODAL TO USE IN ALL THE LANDING PAGE TO SHOW THE CHECK FORM */}
          <div
            className="modal fade"
            id="HeroLoginModal"
            tabIndex="-1"
            aria-labelledby="HeroLoginModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="HeroLoginModalLabel">
                    Welcome! 
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="mb-4">Congratulations! You're a step closer to start your change.
                    Write down yoour email to continue.
                    Thank you! 
                  </p>
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
            className="carousel-control-prev-icon visually-hidden"
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
            className="carousel-control-next-icon visually-hidden"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};