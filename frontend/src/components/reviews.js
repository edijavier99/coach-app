import React, { useState } from "react";
import "../styles/reviews.css";

const reviews = [
  {
    id: "1",
    name: "Michael Smith",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title : "It was a great experience",
    description: "Working with [Your Name] has been a game changer for me. Their mindset coaching helped me overcome mental blocks and achieve my fitness goals. Highly recommend!",
  },
  {
    id: "2",
    name: "Alice Johnson",
    title : "It reallyu help me a lot",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "I've seen incredible results in my health and fitness since starting with [Your Name]. Their personalized approach to coaching is exactly what I needed.",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    name: "Emily Davis",
    title : "Amazing experience",
    description: "The mindset techniques I've learned from [Your Name] have not only improved my fitness but also my overall outlook on life. Thank you for your guidance and support!",
  }
];

export const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const handleReviewClick = (review) => {
    console.log(review);
    setSelectedReview(review);
  };

  const showReviews = () => {
    return reviews.map((item) => (
      <div
        key={item.id}
        className={`review-name-card  ${selectedReview === item.id ? "selected" : " "} `}
        onClick={() => handleReviewClick(item)}
      >
        <img alt="author-img" src={item.img} />
        <p className="mb-0 ps-4">{item.name}</p>
      </div>
    ));
  };

  const showDescription = () => {
    return selectedReview ? (
      <div className="p-5">
        <h6 className="mb-3 fw-bold">{selectedReview.title}</h6>
        <p className="review-description">{selectedReview.description}</p>
      </div>
    ) : (
      <p>Select a review to see the description</p>
    );
  };

  return (
    <section id="reviews" className="container-fluid">
      <div className="row col-10 mx-auto">
        <h4 className="mb-5">Testimonials</h4>
        <div className="col-md-4">
          <div>{showReviews()}</div>
        </div>
        <div className="col-md-8 review-description-container d-flex align-items-center justify-content-center">
          {showDescription()}</div>
      </div>
    </section>
  );
};

