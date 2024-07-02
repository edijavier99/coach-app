import React from "react";
import { ServicesCard } from "./servicesCard";
import "../styles/services.css"
import one from "../img/1.png"
import two from "../img/2.png"
import three from "../img/3.png"

export const Services = () => {
    return (
        <section id="services" className="container-fluid mb-5">
            <div className="row">
                <h3>How I Can Help You ?</h3>
                <div className="services-card-container row col-11 px-0 mx-auto">
                    <ServicesCard 
                        image={one}
                        title="Fitness"
                        icon="fa-dumbbell"
                        link="#fitness" 
                        description="Achieve your fitness goals with our personalized training programs designed to help you improve strength, flexibility, and endurance."
                    />
                    <ServicesCard 
                        image={two}  
                        title="Mindset"
                        icon="fa-brain"
                        link="#mindset" 
                        description="Develop a positive mindset and overcome mental barriers with our proven strategies for mindfulness and self-improvement."
                    />
                    <ServicesCard 
                        image={three}
                        title="Health"
                        link="#health" 
                        icon="fa-heart-circle-check"
                        description="Embrace well-being and live your best life with our expert advice on nutrition, stress management, and holistic health."
                    />
                </div>
            </div>
        </section>
    )
}

