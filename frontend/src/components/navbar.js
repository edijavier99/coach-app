import React from "react";
import "../styles/navbar.css";
import Logo from "../img/logo.jpg";
import { CheckModal } from "./modal";

export const Navbar = ({items}) => {

  const accessToken = localStorage.getItem("access_token")

  const navItems = items.map((item, index) => {
    // Determina la URL dependiendo del estado de accessToken
    const url = item.label === 'Login' && accessToken ? '/admin' : item.url;

    return (
      <li className="nav-item mx-3" key={index}>
        <a className={`nav-link ${item.label.toLowerCase().replace(/\s+/g, '-')}`} href={url}>
          {item.label === 'Login' && accessToken ? "Admin" : item.label}
        </a>
      </li>
    );
  });

  return (
    <nav className=" navbar-dark bg-dark navbar-expand-lg">
      {/* <a className="navbar-brand" href="#"><img alt="logo" src={Logo} /></a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav mr-auto">{navItems}</ul>
        <CheckModal selectedForm={"nav"}/>
      </div>
    </nav>
  );
};

