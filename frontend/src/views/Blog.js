import React, { useEffect, useState } from "react";
import "../styles/blog.css";

export const Blog = () => {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles();
  }, []);

  const fetchAllArticles = () => {
    const apiUrl = "http://127.0.0.1:8000/myapp/api/articles/";
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAllArticles(data);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
      });
  };

  const showArticles = () => {
    return allArticles.map((item, index) => {
      return (
        <div className="blog-card" key={index}>
          <div className="card-img-container">
            <img
              src={item.article_image_url}
              className="card-img-top"
              alt="Article"
            />
          </div>
          <span className="badge card-category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
            <img
              className="rounded-circle me-1"
              width="24"
              height="24"
              src="https://github.com/mdo.png"
              alt=""
            />
            {item.article_category}
          </span>
          <div className="card-body">
            <h5 className="card-title">{item.article_title}</h5>
            <p className="card-text">{item.article_description}</p>
            <a href="#" className="booking mt-3">
              Learn More
            </a>
          </div>
          <div className="card-footer text-muted">
            {item.article_day_posted}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <section className="blog col-md-10 mx-auto mt-5" id="blog">
        <header className="">
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
            <div className=" col-12 col-md-5">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="col-12 col-md-7 d-flex">
              <span className="badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                <img
                  className="rounded-circle me-1"
                  height="24"
                  src="https://github.com/mdo.png"
                  alt=""
                />
                <span className="badge-text">All Articles</span>
              </span>
              <span className="badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                <img
                  className="rounded-circle me-1"
                  height="24"
                  src="https://github.com/mdo.png"
                  alt=""
                />
                <span className="badge-text">Fitness</span>
              </span>
              <span className="badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                <img
                  className="rounded-circle me-1"
                  height="24"
                  src="https://github.com/mdo.png"
                  alt=""
                />
                <span className="badge-text">Health</span>
              </span>
              <span className="badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                <img
                  className="rounded-circle me-1"
                  height="24"
                  src="https://github.com/mdo.png"
                  alt=""
                />
                <span className="badge-text">Mindset</span>
              </span>
              <span className="badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                <img
                  className="rounded-circle me-1"
                  height="24"
                  src="https://github.com/mdo.png"
                  alt=""
                />
                <span className="badge-text">Nutrition</span>
              </span>
            </div>
          </div>
        </header>
        <hr />
        <main className="blogs-cards">{showArticles()}</main>
      </section>
      <div className="container-fluid" id="blog-newsletter">
        <div className="row">
          <div className="col-md-6">
            <h6>Suscribe For New Content </h6>
            <p>
              By becoming a member of our newsletter you will be the first one
              to know about the latest articles
            </p>
          </div>
          <div className="col-md-6">
            <input type="email" placeholder="your@gmail.com" />
            <button className="btn-singUp ms-3">Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};
