import React from "react";
import "../styles/introduction.css";
import {IntroCard} from "./introductionCard"
import { TypingEffect } from "./typeEffect";

export const Introduction = () => {
    const categoryStrings = ["health improvement","fitness goals","wealth ","mindset change" ]
    const introductionText = `Struggling with my personal life, professional
    challenges, and relationships due to not having the right mindset, 
    neglecting proper nutrition, and failing to prioritize self-care,
    I understand the difficulties you might be experiencing. But through
    my own journey, I've learned that not feeling mentally well can impact 
    your overall sense of fulfillment, both personally and professionally.
    It's a journey I've navigated, overcoming obstacles to transform my 
    life. And now, I'm here to guide you through your journey to a healthier,
    happier you.`;

    const introPersonalInfo = `
    I'm all about helping people feel great inside and out. As a fitness and 
    nutrition coach, my approach goes beyond just workouts and diets. With
    years of experience, I've specialized in caring for both your mental and 
    physical health. My goal is to join you on a fun and rewarding journey 
    towards a healthier, balanced lifestyle. Together, we can make each day a 
    step closer to your best self, empowering you to embrace a happier and more 
    fulfilling life.
    `;

    return (
        <section id="introduction" className="container-fluid col-11 mx-auto">
            <header className="row">
                <p className="mb-0 fw-bold">
                    I'm here to help your with your <TypingEffect strings={categoryStrings}/>
                </p>           
            </header>
            <main className="row py-5">
                <IntroCard 
                    title="I Was Once Like You"
                    description={introductionText}
                    image="https://images.unsplash.com/photo-1578924608828-79a71150f711?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    caption="Personal Coach"
                />
            </main>
            <footer className="row py-5">
                <div className="row profile-info mx-auto down">
                    <div className="col-md-12 col-lg-7 profile-info-description">
                        <h3 className="mb-3">Hi, I’m Jesus.</h3>
                        <p>{introPersonalInfo}</p>
                        <p className="text-muted my-3">Jesus Antonio</p>
                        <a href="/about-me" className="btn booking" >Learn More</a>
                    </div>
                    <div className="col-md-12 col-lg-5 profile-image-container ">
                        <img alt="" src="https://images.unsplash.com/photo-1605296866985-34ba3c0b527b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                </div>
            </footer>
        </section>
    );
};
