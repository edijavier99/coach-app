import React from "react";
import { Navbar } from "../components/navbar";

export const About = () =>{
    const menu = [
            { label: "Home", url: "/" },
            { label: "Blog", url: "/blog" },
            { label: "Login", url: "/login"},
        ]
    return(
        <section>
            <Navbar items={menu}  />
            <section id="about">

            </section>
        </section>
    )
}