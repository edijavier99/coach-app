import React from "react";

export const IntroCard = (props) => {
    return (
        <article className={`row profile-info mx-auto my-5 ${props.down === true ? "down" : ""}`}>
            <div className="col-md-12 col-lg-5 profile-image-container">
                <img alt={`${props.title}`} src={props.image} />
            </div>
            <div className="col-md-12 col-lg-7 profile-info-description">
                <h3 className="mb-3">{props.title}</h3>
                <p>{props.description}</p>
                <p className="text-muted my-3">{props.caption}</p>
                <a href="/about-me" className="btn booking">Learn More</a>                    
            </div>
        </article>
    );
};
