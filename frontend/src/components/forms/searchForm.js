// components/SearchCard.js
import React from "react";
import { BlogCard } from "../blog/blogCard";

export const SearchForm = ({ articleName, articles, navigate }) => {
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(articleName.toLowerCase())
  );

  return (
    <div className="row">
      {filteredArticles.map((article) => (
        <div className="col-md-4 mb-4" key={article.id}>
          <BlogCard article={article} navigate={navigate} />
        </div>
      ))}
    </div>
  );
};

