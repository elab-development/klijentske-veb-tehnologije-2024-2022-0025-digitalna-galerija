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

import { NavBarProps } from "./models/NavBarProps";



const navItems = [
  {name: "Home", path: '/'},
  {name: "Login", path: '/components/Login'},
  {name: "Gallery", path: '/components/Gallery'},
  {name: "AboutUs", path: '/components/AboutUs'},
]
const  navBarProps = new NavBarProps(imagePath, navItems);  //instanca klase NavBarProps


const App: React.FC = () => {
  

  return (
    <Router>
      <NavBar {...navBarProps}/>
      
      <Routes>
        <Route path = "/" element = {<Home />} /> 
        <Route path = "/components/Login" element = {<Login />} /> 
        <Route path = "/components/Gallery" element = {<Gallery />} /> 
        <Route path = "/components/AboutUs" element = {<AboutUs />} />
      </Routes>

    
    </Router>
  )
}

export default App
