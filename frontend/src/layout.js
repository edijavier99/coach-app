import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
// import { BackendURL } from "./component/backendURL";

import injectContext from "./store/appContect";
import App from "./App";
//create your first component
const Layout = () => {
    // const basename = process.env.BASENAME || "";
    // if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route element={<App />} path="/" />               
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);