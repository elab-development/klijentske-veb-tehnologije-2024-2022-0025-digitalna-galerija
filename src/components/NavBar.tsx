import {useState} from "react";  //hook - 7.zahtev
import "../App.css"
import {Link} from "react-router-dom";

import { NavBarProps } from "../models/NavBarProps"; //importujemo NavBarProps klasu iz  
                                                    //koju koristimo za definisanje props-a komponente

export default function NavBar({imageSrcPath, navItems}: NavBarProps) {  //definišemo funkcionalnu komponentu NavBar 
                                                                    //koja prima imageSrcPath i navItems kao propse
  
const[selectedIndex, setSelectedIndex] = useState(-1);  //koristimo useState hook za praćenje indeksa selektovane 
                                                        //stavke u navigaciji; početno stanje je -1, što znači 
                                                        //da nijedna stavka nije selektovana
    return (
        <nav className="navbar navbar-expand-md shadow"> {/*renderujemo nav element sa Bootstrap klasama za stilizaciju*/}
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
                        
                        {navItems.map((items, index)=> //koristimo map funkciju da bismo iterirali kroz niz navItems 
                                                        //i kreirali li elemente za svaku stavku
                        (
                            <li key = {items.path}
            
                            className="nav-item"
                            onClick={()=>setSelectedIndex(index)}> {/*kada se klikne na stavku, postavljamo novi indeks selektovane stavke*/}
                                <Link  //koristi za kreiranje linkova ka putanjama definisanim u navItems
                                    className={
                                        selectedIndex == index 
                                            ? "nav-link active fw-bold" //ako je stavka trenutno selektovana (indeks selectedIndex 
                                                                        //odgovara indeksu trenutne stavke), dodajemo klasu active i 
                                                                        //fw-bold za boldovanje teksta
                                            : "nav-link" 
                                        }
                                    to={items.path}>
                                {items.name}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                    <form className="d-flex me-3" role = "search"> {/*form element sa poljem za unos teksta za pretragu i dugmetom za pretragu*/}
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
