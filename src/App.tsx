import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  //za upravljanje rutama
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from './assets/graphics.png'
import Home from "./components/Home";
import Login from "./components/Login";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";

import { NavBarProps } from "./models/NavBarProps";



const navItems = [    // niz objekata navItems koji sadrži informacije o stavkama u navigacionom baru: 
                      //ime stavke i putanja na koju vode
  {name: "Home", path: '/'},
  {name: "Login", path: '/components/Login'},
  {name: "Gallery", path: '/components/Gallery'},
  {name: "AboutUs", path: '/components/AboutUs'},
]
const  navBarProps = new NavBarProps(imagePath, navItems);  //instanca klase NavBarProps koja sadrži 
                                                            //putanju do slike i navigacione stavke


const App: React.FC = () => {
  

  return (
    <Router>
      <NavBar {...navBarProps}/>   
      {/*Ova linija renderuje NavBar komponentu, prosleđujući joj sve propertije iz 
        navBarProps koristeći spread operator (...)
        NavBar koristi ove propertije za prikazivanje navigacionih stavki i slike*/}
      
      <Routes> {/*definiše sve rute na sajtu*/}
        {/*Svaki Route definiše putanju i odgovarajuću komponentu koja se renderuje kada se ta putanja poseti. 
        Na primer, kada korisnik poseti /components/Login, renderuje se Login komponenta. */}
        <Route path = "/" element = {<Home />} /> 
        <Route path = "/components/Login" element = {<Login />} /> 
        <Route path = "/components/Gallery" element = {<Gallery />} /> 
        <Route path = "/components/AboutUs" element = {<AboutUs />} />
      </Routes>

    
    </Router>
  )
}

export default App
