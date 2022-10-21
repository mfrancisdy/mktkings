import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import HomeTwo from "../pages/HomeTwo";
import Header from "./header";
import Footer from './Footer'

export default function NavPath() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/hometwo" exact element={<HomeTwo />} />
            </Routes>
            <Footer />
        </Router>
    );
}