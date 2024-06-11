import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { BookingView } from "./views/booking";
import { Blog } from "./views/Blog";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
// import { BackendURL } from "./component/backendURL";

import injectContext from "./store/appContect";
import App from "./views/Home";
//create your first component

const Layout = () => {
    // const basename = process.env.BASENAME || "";
    // if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;
    const menu = [
        { label: "Home", url: "/" },
        { label: "Blog", url: "/blog" },
        { label: "My History", url: "/about-me" },
        { label : "Booking", url: "/appointment"}
    ];
    return (
        <div>
            <BrowserRouter>
                <Navbar items={menu}  />
                <ScrollToTop>
                    <Routes>
                        <Route element={<App />} path="/" />    
                        <Route element={<BookingView />} path="/appointment" />   
                        <Route element={<Blog />} path="/blog" />             
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);