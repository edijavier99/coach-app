// components/BlogCard.js
import React from "react";

export const BlogCard = ({ article }) => {
  return (
    <div className="blog-card">
      <div className="card-img-container">
        <img src={article.image_url} className="card-img-top" alt="Article" />
      </div>
      <span className="badge card-category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
        <img
          className="rounded-circle me-1"
          width="24"
          height="24"
          src="https://github.com/mdo.png"
          alt="jesus-profile"
        />
        {article.category}
      </span>
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <a
          href={`blog/post/${article.id}`}
          className="booking mt-3"
        >
          Learn More
        </a>
      </div>
      <div className="card-footer text-muted">{article.day_posted}</div>
    </div>
  );
};

