import React from "react";
import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";

function Home() {
    const menu = [
      { label: "Home", url: "/" },
      { label: "Contact Us", url: "/contact-me" },
      { label: "About Us", url: "/about-us" },
      { label: "Portfolio", url: "/portfolio" }
  ];
  return (
    <section>
      <Navbar items={menu}  />
      <Hero />
    </section>
  );
}

export default Home;
