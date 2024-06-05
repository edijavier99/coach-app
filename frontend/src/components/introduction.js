import React, { useEffect, useRef } from "react";
import "../styles/introduction.css";

export const Introduction = () => {
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
    years of experience, I've specialized in caring for both your mental 
    and physical health. My goal is to join you on a fun and rewarding journey
     towards a healthier, balanced lifestyle. Together, we can make each day 
     a step closer to your best self.
    `;

    const imgContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show-hover-box');
                        entry.target.classList.add('gray-image-scale'); // Agregar clase gray-img
                    } else {
                        entry.target.classList.remove('show-hover-box');
                        entry.target.classList.remove('gray-image-scale'); // Eliminar clase gray-img
                    }
                });
            },
            {
                threshold:1
            }
        );

        if (imgContainerRef.current) {
            observer.observe(imgContainerRef.current);
        }

        return () => {
            if (imgContainerRef.current) {
                observer.unobserve(imgContainerRef.current);
            }
        };
    }, []);

    return (
        <section id="introduction" className="container-fluid">
            <header className="row mb-3">
                <div className="col-12 col-md-5 col-lg-5 introduction-img-container">
                    <img alt="Jesus Image" src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>
                <div className="col-12 col-md-7 col-lg-7 introduction-description-container">
                    <h2>I was once just like you.</h2>
                    <hr />
                    <p>{introductionText}</p>
                </div>
            </header>
            <div className="row d-flex justify-content-end">
                <div className="col-md-3 intro-middle-info">
                    <p>HEALTH AND FITNESS</p>
                    <hr />
                    <p>WEALTH AND MINDSET</p>
                </div>
            </div>
            <main className="row mt-3">
                <div className="col-12 col-md-7 mt-2">
                    <h2>Hi, I'm Jesus</h2>
                    <hr />
                    <p>{introPersonalInfo}</p>
                    <a className="booking" href="/appointment">Make A Booking</a>
                </div>
                <div ref={imgContainerRef} className="col-md-6 col-lg-5 introduction-img-container">
                    <img alt="Antonio Image" className="gray-img" src="https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    {/* <div className="img-hover-box">
                        <h6>Jesus Antonio</h6>
                        <p>@jesusantonio</p>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </div> */}
                </div>
            </main>
        </section>
    );
};
