import React from "react";

export const ServicesCard = (props) => {
  return (
    <article className="service-card col-md-4">
        <a href={props.link} className="service-card-link">
          <img alt="card-number" className="card-number-img" src={props.image} />
          <div className="service-body">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <i className={`fa-solid ${props.icon}`}></i>
          </div>
      </a>
    </article>
  );
}
