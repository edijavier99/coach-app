import React from "react";
import "../styles/blog.css"

export const Blog = () =>{
    return(
      <>
        <section className="blog col-md-10 mx-auto mt-5" id="blog">
            <header className="">
                <h4>Discover  nice articles</h4>
                <p>Explore our carefully curated selection of articles covering all aspects of wellness. From fitness tips and health advice to mindset strategies and nutrition guides, you'll find everything you need to lead a balanced and healthy lifestyle. Dive in and empower yourself with the knowledge to make positive changes and reach your wellness goals.</p>
                <div className="row mt-4">
                    <div className=" col-12 col-md-5">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                    <div className="col-12 col-md-7 d-flex">
                        <span className="badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                          <img className="rounded-circle me-1" height="24" src="https://github.com/mdo.png" alt=""/>
                          <span className="badge-text">All Articles</span>
                        </span>
                        <span className="badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                          <img className="rounded-circle me-1" height="24" src="https://github.com/mdo.png" alt=""/>
                          <span className="badge-text">Fitness</span>
                        </span>
                        <span className="badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                          <img className="rounded-circle me-1" height="24" src="https://github.com/mdo.png" alt=""/>
                          <span className="badge-text">Health</span>
                        </span>
                        <span className="badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                          <img className="rounded-circle me-1" height="24" src="https://github.com/mdo.png" alt=""/>
                          <span className="badge-text">Mindset</span>
                        </span>
                        <span className="badge category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                          <img className="rounded-circle me-1" height="24" src="https://github.com/mdo.png" alt=""/>
                          <span className="badge-text">Nutrition</span>
                        </span>      
                      </div>

                </div>
            </header>
            <hr/>   
            <main className="blogs-cards">
              <div className="blog-card">
                <div className="card-img-container">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1663850685068-a944c5dbc3fe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <span class="badge card-category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                          <img class="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Health
                </span>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#" className="booking mt-3">
                    Learn More
                  </a>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
              <div className="blog-card">
                <div className="card-img-container">
                  <img
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <span class="badge card-category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                          <img class="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Fitness
                </span>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#" className="booking mt-3">
                    Learn More
                  </a>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
              <div className="blog-card">
                <div className="card-img-container">
                  <img
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <span class="badge card-category d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                          <img class="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Fitness
                </span>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                  <a href="#" className="booking mt-3">
                    Learn More
                  </a>
                </div>
                <div className="card-footer text-muted">2 days ago</div>
              </div>
            </main>
            
        </section>
        <div  className="container-fluid" id="blog-newsletter">
                <div className="row">
                    <div className="col-md-6">
                        <h6>Suscribe For New Content </h6>
                        <p>By becoming a member of our newsletter you will be the first one tu know about the lastes articles</p>
                    </div>
                    <div className="col-md-6">
                    <input type="email" placeholder="your@gmail.com" />
                            <button className="btn-singUp ms-3">Sign Up</button>
                    </div>
                </div>
        </div>
      </>
    )
}