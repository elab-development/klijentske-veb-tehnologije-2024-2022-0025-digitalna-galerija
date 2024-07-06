import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from './assets/graphics.png'
import Home from "./components/Home";
import Login from "./components/Login";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import PhotographerPage from "./components/PhotographerPage";
import './App.css';

import { NavBarPropsI } from "./models/NavBarProps"; // Uvozimo NavBarPropsI iz models/NavBarProps.ts

const navItems = [
  { name: "Home", path: '/' },
  { name: "Login", path: '/components/Login' },
  { name: "Gallery", path: '/components/Gallery' },
  { name: "AboutUs", path: '/components/AboutUs' },
];

const App: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navBarProps: NavBarPropsI = {
    imageSrcPath: imagePath,
    navItems: navItems,
    handleMenuToggle: handleMenuToggle,
    isMenuOpen: isMenuOpen,
  };

  return (
    <Router>
      <div id="root">
        <NavBar {...navBarProps} /> {/* Prosleđujemo sve propertije iz navBarProps */}
        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components/Login" element={<Login />} />
            <Route path="/components/Gallery" element={<Gallery />} />
            <Route path="/components/AboutUs" element={<AboutUs />} />
            <Route path="photographer/:name" element={<PhotographerPage />} />
          </Routes>
        </div>
        <footer className="footer">
          &copy; All rights reserved. Pixel Museum ~
        </footer>
      </div>
    </Router>
  );
}

export default App;
