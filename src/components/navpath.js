import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "./header";

export default function NavPath() {
    return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" exact element={<Home/>} />
        </Routes>
    </Router>
    );
}