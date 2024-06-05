import React from "react";
import "../styles/hero.css"
import { useNavigate } from "react-router-dom";

export const Hero = () =>{
  const navigate = useNavigate()
    return(
      <section id="hero" className="carousel-container">
        <div id="carouselHero" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item first-slide-hero active" data-bs-interval="10000">
                <img src="https://cdn.pixabay.com/photo/2021/05/14/08/44/running-6252827_1280.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption">
                    <div className="d-flex flex-column align-items-start justify-content-around  " id="slogan">
                        <h1 className="slogan-header mb-5">Small steps thrive amid significant changes</h1>
                        <p className="slogan-description">
                        <span className="slogan-header-description">Hi!</span>
                        We help you enhance your physical, mental, and overall health. Through small adjustments in mindset, nutrition, and physical activity, even minor changes can lead to remarkable transformations.
                        </p>
                    </div>
                    <a className="booking bookingHero" href="/appointment">Make A Booking</a>
                </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
                <div class="carousel-caption">
                    <div className="d-flex flex-row justify-content-around  h-50" id="slogan">
                    <div className="smallSlogan">
                        <h2>Elegancia.</h2>
                        <h3>Calidad.</h3>
                        <h4>Estilo.</h4>
                    </div>
                    <p id="description1"> Transformando espacios, <br/> inspirando vidas.</p>
                    </div>
                    <button className="btnComprar" onClick={()=>navigate("/canapes")}>Comprar</button>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://plus.unsplash.com/premium_photo-1679938885972-180ed418f466?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..."/>
                <div class="carousel-caption">
                    <div className="d-flex flex-row justify-content-around  h-50" id="slogan">
                    <div className="smallSlogan">
                        <h2>Comodidad.</h2>
                        <h3>Espacio.</h3>
                        <h4>Diseño.</h4>
                    </div>
                    <p id="description1"> Diseños que fusionan <br/>la comodidad y el espacio.</p>
                    </div>
                    <button className=" btnComprar" onClick={()=>navigate("/colchones")}>Comprar</button>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselHero" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselHero" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
</section>
    )
}