import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./components/Home";
import Experience from "./components/Experience";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Footer from "./components/Footer";
import Navigation from "./components/Offcanvas";
import './App.css';

function App() {
  return (
    <>
      <div className="bg-dark">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
