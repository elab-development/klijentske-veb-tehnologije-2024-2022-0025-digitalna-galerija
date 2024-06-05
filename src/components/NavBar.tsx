import {useState} from "react";  //hook - 7.zahtev
import "../App.css"

interface NavBarProps{     //interfajs - 9.zahtev
    imageSrcPath: string;
    navItems: string[];
}

export default function NavBar({imageSrcPath, navItems}: NavBarProps) {  //NavBar - 3.zahtev
  
const[selectedIndex, setSelectedIndex] = useState(-1); 
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

                <div 
                className="collapse 
                navbar-collapse
                align-items-start
                d-flex
                flex-colum
                flex-md-row" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-md-1">
                        
                        {navItems.map((items, index)=>
                        (
                            <li key = {items}
            
                            className="nav-item"
                            onClick={()=>setSelectedIndex(index)}>
                                <a 
                                    className={
                                        selectedIndex == index 
                                            ? "nav-link active fw-bold"
                                            : "nav-link"
                                        }
                                    href="#">
                                {items}
                                </a>
                            </li>
                        ))}
                        
                    </ul>
                    <form className="d-flex me-3" role = "search">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"/>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            

            </div>
        </nav>
  )
}
