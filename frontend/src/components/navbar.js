import React from "react";
import "../styles/navbar.css";
import Logo from "../img/logo.jpg"
export const Navbar = (props) => {
  const items = props.items.map((item, index) => (
    <li className="nav-item mx-3" key={index}>
      <a className={`nav-link ${item.label.toLowerCase().replace(/\s+/g, '-')}`} href={item.url}>
        {item.label}
      </a>
    </li>
  ));

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <a className="navbar-brand" href="#"><img alt="logo" src={Logo} /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav mr-auto">{items}</ul>
      </div>
    </nav>
  );
};
