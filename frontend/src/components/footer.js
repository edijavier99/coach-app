import React from "react";
import "../styles/footer.css";

export const Footer = () => {
    return (
        <footer id="footer" className="container-fluid">
            <div className="row justify-content-center py-4 mx-0 px-0">
                <div className="col-md-4 text-center mb-3">
                    <h4>Request More Information</h4>
                    <p className="text-white">
                        I know the journey hasn't always been easy. Each obstacle, every challenge, has played a part in shaping the resilient and determined person you are today. It's not just about where you've been, but where you're headed. Let me help you take the next step towards a brighter future. Your dreams are within reach, and together, we can make them a reality.
                    </p>

                </div>
                <div className="col-md-4 text-center mb-3">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="col-md-4 text-center mb-3">
                    <h5>Follow Us</h5>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <hr className="bg-light" />
            <div className="row justify-content-center  mx-0 px-0">
                <div className="col-md-4 text-center">
                    <img alt="logo" src="/path/to/logo.png" className="footer-logo mb-3" />
                    <p className="text-white">&copy; 2019 App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
