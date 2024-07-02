import React, { useState } from "react";
import "../styles/reviews.css";

const reviews = [
  {
    id: "1",
    name: "Michael Smith",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "It was a great experience",
    description: "Working with [Your Name] has been a game changer for me. Their mindset coaching helped me overcome mental blocks and achieve my fitness goals. Highly recommend!",
  },
  {
    id: "2",
    name: "Alice Johnson",
    title: "It really helped me a lot",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "I've seen incredible results in my health and fitness since starting with [Your Name]. Their personalized approach to coaching is exactly what I needed.",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    name: "Emily Davis",
    title: "Amazing experience",
    description: "The mindset techniques I've learned from [Your Name] have not only improved my fitness but also my overall outlook on life. Thank you for your guidance and support!",
  }
];

export const Reviews = () => {
  const showReviews = () => {
    return reviews.map((item) => (
      <article key={item.id} className={`review-name-card p-4`}>
        <div className="d-flex align-items-center mb-3">
          <img alt="author-img" src={item.img} />
          <p className="ms-3 mb-0">{item.name}</p>
        </div>
        <p>{item.description}</p>
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-star" style={{ color: "#FFD43B", marginRight: "5px" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#FFD43B", marginRight: "5px" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#FFD43B", marginRight: "5px" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#FFD43B", marginRight: "5px" }}></i>
          <i className="fa-regular fa-star" style={{ color: "#FFD43B" }}></i>
        </div>
      </article>

    ));
  };

  return (
    <section id="reviews" className="container-fluid my-5 px-0">
      <div className="row justify-content-center mx-0">
        <div className="col-md-10">
          <h4 className="mb-4 text-center mt-5">Testimonials</h4>
          <p className="lead reviews-lead">Discover how our clients have transformed their lives with our personalized coaching services. Read their inspiring stories below:</p>
        </div>
      </div>
      <div className="review-grid col-11 mx-auto mt-4">
            {showReviews()}
      </div>
    </section>
  );
};
