import React from "react";
import "../styles/prices.css";
import { BookingButton } from "./bookingButton";
import checkSvg from "../assests/check.svg";


export const Prices = () => {
  return (
    <section className="d-flex align-items-center flex-column my-5" id="prices">
      <h4 className="plan-title my-4">Choose Your Path to Success Today</h4>
      <p className="plan-description mb-4 lead">
        Discover our tailored coaching sessions designed to elevate your mindset, fitness, and health. Book your first session for free and experience a personalized introduction to our transformative services. Our primary focus is on strengthening your mindset, while our fitness and nutrition plans serve as key tools to support and enhance your mental well-being. Let's embark on this journey together to achieve your goals and unlock your full potential.
      </p>
      <div className="grid col-11">
        <div>
          <article className="card prices-card col-12 col-lg-11 mx-auto">
            <h2>Fitness</h2>
            <p className="plan-description mb-4">
             We incorporate fitness strategies as a key component of our approach. With personalized workout plans and advice on how to integrate exercise into your daily routine, we help you use fitness as a tool to enhance your mental well-being. Expect guidance on creating effective routines and maintaining a balanced lifestyle.
            </p>
            <BookingButton/>
          </article>
        </div>
        <div className="primary">
          <article className="card prices-card col-12 col-lg-11 mx-auto">
            <h2>Mindset</h2>
            <var><abbr>£</abbr>35<small>/Session</small></var>
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
                <p>Motivational support</p>
              </li>
              <li>
                <img src={checkSvg} alt="Check Icon" />
                <p>Improving mental resilience</p>
              </li>
            </ul>
            <ul className="special-offers">
              <li><strong>3 Sessions/Week:</strong> £90</li>
              <li><strong>12 Sessions/Month:</strong> £300</li>
            </ul>
            
            <BookingButton/>
          </article>
        </div>
        <div>
          <article className="card prices-card col-12 col-lg-11 mx-auto">
            <h2>Health</h2>
            <p className="plan-description mb-4">
              We provide practical tools for a healthier lifestyle. We focus on how nutrition and stress management can support your mental well-being. Expect advice on balanced diet planning, stress management techniques, and recipes that promote better health, all designed to help you enhance your mindset.
            </p>
            <BookingButton/>
          </article>
        </div>
      </div>
    </section>
  );
};
