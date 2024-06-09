import React from "react";
import "../styles/newsletter.css";

export const Newsletter = () => {
    return (
        <section id="newsletter" className="container-fluid">
            <div className="overlay ">
                <div className="row px-0 mx-0">
                    <div className="col d-flex flex-column justify-content-center align-items-center text-center">
                        <h4>Don't Miss Any Single Article</h4>
                        <p>Weekly my team and I are posting new articules about how to improve our nutrition, how to have a better control of our mindset and tips for having a better fitness balance life.</p>
                        <div className="d-flex align-items-center justify-content-center">
                            <input type="email" placeholder="your@gmail.com" />
                            <button className="btn-singUp ms-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
