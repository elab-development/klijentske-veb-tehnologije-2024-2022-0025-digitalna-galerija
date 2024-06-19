import {useState, useEffect} from "react";
import "../App.css"
import {Link} from "react-router-dom";
import { NavBarProps } from "../models/NavBarProps";

export default function NavBar({imageSrcPath, navItems}: NavBarProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <nav className="navbar navbar-expand-md shadow">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img 
                        src={imageSrcPath} 
                        width="60" 
                        height="60" 
                        className="d-inline-block align-center" 
                        alt=""/>
                </a>

                <button className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-md-1">
                        {navItems.map((items, index) => (
                            <li key={items.path}
                                className="nav-item"
                                onClick={() => setSelectedIndex(index)}>
                                <Link className={selectedIndex === index ? "nav-link active fw-bold" : "nav-link"} to={items.path}>
                                    {items.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="dark-mode-button" onClick={toggleDarkMode}>
                        {darkMode ? "Change to Light Mode" : "Change to Dark Mode"}
                    </button>
                </div>
            </div>
        </nav>
 );
}