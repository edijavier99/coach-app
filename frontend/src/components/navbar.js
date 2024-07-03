import React from "react";
import "../styles/navbar.css";
// import Logo from "../img/logo.jpg";
import { BookingButton } from "./bookingButton";
import { LoginModal } from "./loginModal";

export const Navbar = ({items}) => {
  const navItems = items.map((item, index) => {
    return (
      <li className="nav-item mx-3" key={index}>
        <a className={`nav-link ${item.label.toLowerCase().replace(/\s+/g, '-')}`} href={item.url}>
          {item.label}
        </a>
      </li>
    );
  });

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">{navItems}</ul>
        <LoginModal/>
        <BookingButton/>
        </div>
      </div>
    </nav>
  );
};

