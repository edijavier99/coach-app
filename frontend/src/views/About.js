import React from "react";
import { Navbar } from "../components/navbar";
import "../styles/about.css"
import {IntroCard}  from "../components/introductionCard"
import { Footer } from "../components/footer";

export const About = () =>{
    const menu = [
            { label: "Home", url: "/" },
            { label: "Blog", url: "/blog" },
            { label: "Login", url: "/login"},
        ]
    return(
        <>
            <Navbar items={menu}  />
            <section id="about" className="container-fluid mt-5">
                <header className="row col-md-11 mx-auto ">
                    <h1 className="mb-3">Fitness, Wealth, Nutrition, Mindset</h1>
                    <h2 className="text-muted">Personal Coach - Jesus Antonio</h2>
                    <blockquote className="blockquote mt-4">
                        <p className="mb-3">"True enjoyment comes from activity of the mind and exercise of the body; the two are united."</p>
                        <footer className="blockquote-footer">Alexander von Humboldt</footer>
                    </blockquote>
                </header>

                <main className="row col-md-11 mx-auto">
                    <IntroCard 
                        title="Welcome to My Wellness Journey"
                        description="Join me on a transformative path where personal growth meets holistic health. From overcoming challenges to embracing a balanced lifestyle, I'm here to empower you every step of the way."
                        image="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        caption="Your Personal Wellness Guide"
                    />

                    <div className="row px-0 mx-0 d-flex justify-content-between row-why-us ">
                        <article className="why-us-card first-card">
                            <p className="card-title" style={{color: "#9CA234"}}>The Beginning</p>
                            <p className="card-description ">My journey began with a pivotal realization: the impact of holistic health on every aspect of life. From modest beginnings, I discovered a passion for fitness and nutrition that ignited a quest for knowledge and personal growth. This foundational period laid the groundwork for my career as a compassionate coach committed to guiding others toward their best selves.</p>
                        </article>
                    </div>
                    <div className="row px-0 mx-0 d-flex justify-content-end">
                        <article className="why-us-card second-card">
                            <p className="card-title" style={{color: "#359CA6"}}>Evolution and Growth</p>
                            <p className="card-description ">Through years of dedication and continuous learning, I evolved from a novice in the field of wellness to a seasoned professional. Each milestone marked a phase of transformation, from mastering fitness techniques to delving into the psychology of sustainable lifestyle changes. My journey of growth is a testament to the power of perseverance and a deep-seated commitment to empowering others on their own paths to wellness.</p>
                        </article>
                    </div>
                    <div className="row px-0 mx-0">
                        <article className="why-us-card third-card">
                            <p className="card-title" style={{color: "#C45151"}}>Empowering Others</p>
                            <p className="card-description ">Today, I am privileged to empower individuals like you to embrace wellness as not just a goal, but a fulfilling lifestyle. Together, we navigate challenges, celebrate victories, and create enduring positive changes. My mission is to inspire and guide you on a transformative journey toward holistic health and happiness, where every step forward brings us closer to a life of vitality and fulfillment.</p>
                        </article>
                    </div>
                    <div className="row my-5 px-0 mx-0">
                        <h1 className="card-title text-center px-0">Values I've Learned</h1>
                        <p className="px-0 mb-4">Throughout my personal and professional journey, I have learned fundamental values that have been essential in achieving my current success. These values have not only shaped who I am but have also been crucial to my accomplishments. This is why I am committed to imparting these principles to my students and colleagues, as I believe they are key to success in both personal and professional realms.</p>                       
                        <div className="values-grid">
                            <article className="value-card">
                            <h4>Perseverance</h4>
                            <p>Perseverance is the key to overcoming obstacles and achieving long-term goals. It is the ability to maintain effort and determination even when things get tough.</p>
                            <img alt="perseverance" src="https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                            </article>
                            <article className="value-card">
                                <h4>Discipline</h4>
                                <p>Discipline is essential for success in any area of life. It involves maintaining a consistent focus, following a routine, and having the self-control necessary to meet set goals.</p>
                                <img alt="discipline" src="https://images.unsplash.com/photo-1559595500-e15296bdbb48?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </article>
                            <article className="value-card">
                                <h4>Patience</h4>
                                <p>Patience is the ability to wait calmly and without anxiety. It is crucial for managing stress, making sound decisions, and building strong, lasting relationships.</p>
                                <img alt="patience" src="https://images.unsplash.com/photo-1533630160910-65f5a1718c65?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </article>
                        </div> 
                    </div>
                </main>
            </section>
            <Footer/>
        </>
    )
}
