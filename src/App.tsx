import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from './assets/graphics.png'
import Home from "./components/Home";
import Login from "./components/Login";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";

const navItems = [
  {name: "Home", path: '/components/Home'},
  {name: "Login", path: '/components/Login'},
  {name: "Gallery", path: '/components/Gallery'},
  {name: "AboutUs", path: '/components/AboutUs'},
]

const App: React.FC = () => {

  return (
    <Router>
      <NavBar imageSrcPath={imagePath} navItems={navItems}/>
      <Routes>
        <Route path = "/components/Home" element = {<Home />} /> 
        <Route path = "/components/Login" element = {<Login />} /> 
        <Route path = "/components/Gallery" element = {<Gallery />} /> 
        <Route path = "/components/AboutUs" element = {<AboutUs />} />
      </Routes>

    
    </Router>
  )
}

export default App
