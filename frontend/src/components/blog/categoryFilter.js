// components/CategoryFilter.js
import React from "react";

export const CategoryFilter = ({ selectedCategory, showArticlesByCategory }) => {
  const categories = ["fitness", "health", "mindset", "nutrition"];

  return (
    <>
      {categories.map((category) => (
        <span
          key={category}
          onClick={() => showArticlesByCategory(category)}
          className={`badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill ${
            selectedCategory === category ? "selected" : ""
          }`}
        >
          <span className="badge-text">{category.toUpperCase()}</span>
        </span>
      ))}
      <span
        onClick={() => showArticlesByCategory()}
        className={`badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill ${
          selectedCategory === null ? "selected" : ""
        }`}
      >
        <span className="badge-text">ALL</span>
      </span>
    </>
  );
};

