import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { BookingView } from "./views/booking";
import { Blog } from "./views/Blog";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Login } from "./views/Login";
import { Admin } from "./views/Admin";
import { SingleArticle } from "./views/SingleArticle";
import Home from "./views/Home";
import injectContext from "./store/appContext";
import { Process } from "./views/Process";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('tu_clave_publica_de_stripe');


const Layout = () => {
    const token = localStorage.getItem("access_token")

    return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <Elements stripe={stripePromise}>
                        <Routes>
                            <Route element={<Home/>} path="/" />
                            <Route element={<BookingView />} path="/appointment" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<Blog />} path="/blog" />
                            <Route element={<SingleArticle />} path="blog/article/:id" />
                            <Route element={<Process/>} path="/process"/>
                            {token ? (
                                <Route element={<Admin />} path="/admin" />
                            ) : (
                                <Route path="/admin" element={<Navigate to="/login" replace />} />
                            )}

                            <Route element={<h1>Not found!</h1>} />
                        </Routes>
                    </Elements>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);