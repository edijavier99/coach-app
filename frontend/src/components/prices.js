import React from "react";
import "../styles/prices.css"
import checkSvg from "../assests/check.svg"
import { BookingButton } from "./bookingButton";

export const Prices = () => {
  return (
    <section className="d-flex align-items-center flex-column my-5" id="prices">
      <h4 className="plan-title my-4">Choose Your Path to Success Today</h4>
      <p className="plan-description mb-4 lead">
        Discover our tailored coaching sessions designed to elevate your mindset, fitness, and health. Book your first session for free and experience a personalized introduction to our transformative services. Let's embark on this journey together to achieve your goals and unlock your full potential.
      </p>
      <div className="grid col-11">
        <div>
          <article className="card col-12 col-lg-11 mx-auto first-card">
            <h2>Mindset</h2>
            <var><abbr>£</abbr>25<small>/Session</small></var>
            <ul>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Goal setting and achievement</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Personal growth strategies</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Building positive habits</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Improving mental resilience</p>
              </li>
            </ul>
            <BookingButton/>
          </article>
        </div>
        <div className="primary">
          <article className="card col-12 col-lg-11 mx-auto">
            <h2>Fitness</h2>
            <var><abbr>£</abbr>35<small>/Session</small></var>
            <ul>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Personalized workout plans</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Nutritional advice</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Progress tracking and analysis</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Motivational support</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Injury prevention techniques</p>
              </li>
            </ul>
            <BookingButton/>
          </article>
        </div>
        <div>
          <article className="card col-12 col-lg-11 mx-auto third-card">
            <h2>Health</h2>
            <var><abbr>£</abbr>30<small>/Session</small></var>
            <ul>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Holistic health strategies</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Stress management techniques</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Improving sleep quality</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Balanced diet planning</p>
              </li>
            </ul>
            <BookingButton/>
          </article>
        </div>
      </div>
    </section>
  );
};

