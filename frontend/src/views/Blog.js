import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogCard } from "../components/blog/blogCard";
import { CategoryFilter } from "../components/blog/categoryFilter";
import { Newsletter } from "../components/newsletter";
import "../styles/blog.css";
import { SearchForm } from "../components/forms/searchForm";


export const Blog = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    showArticlesByCategory();
  }, []);

  const showArticles = () => {
    return allArticles.map((item) => (
      <div className="mb-4" key={item.id}>
        <BlogCard article={item} navigate={navigate} />
      </div>
    ));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = allArticles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showFilteredArticles = () => {
    return (
      <SearchForm
        articleName={searchTerm}
        articles={filteredArticles}
        navigate={navigate}
      />
    );
  };

  const showArticlesByCategory = (category = null) => {
    let apiUrl = `${process.env.REACT_APP_BACKEND_URL}blog/post_list`;
    if (category) {
      apiUrl += `?category=${category}`;
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
    }
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setAllArticles(data);
      })
      .catch((error) => console.error("Error fetching articles:", error));
  };

  return (
    <>
      <section className="blog col-11 col-md-11 mx-auto mt-5" id="blog">
        <header>
          <h4>Discover nice articles</h4>
          <p>
            Explore our carefully curated selection of articles covering all
            aspects of wellness. From fitness tips and health advice to mindset
            strategies and nutrition guides, you'll find everything you need to
            lead a balanced and healthy lifestyle. Dive in and empower yourself
            with the knowledge to make positive changes and reach your wellness
            goals.
          </p>
          <div className="row mt-4">
            <div className="col-12 col-md-5">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </form>
            </div>
            <div className="col-12 col-md-7 d-flex filterFields">
              <CategoryFilter
                selectedCategory={selectedCategory}
                showArticlesByCategory={showArticlesByCategory}
              />
            </div>
          </div>
        </header>
        <hr />
        <main className="blogs-cards col-12 mx-auto">
          {searchTerm ? showFilteredArticles() : showArticles()}
        </main>
      </section>
      <Newsletter />
    </>
  );
};
