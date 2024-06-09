import React from 'react'; //omogućava kreiranje komponenti
import homeImage from '../images/home.png'; // Uvoz slike
import './Home.css';


const Home: React.FC = () => { // funkcionalna komponenta koja koristi React.FC (Functional Component) tip

    return (
        <div>
            <div className="home-container"> {/* kontejner koji obuhvata tekst i sliku */}
                <div className="text-container"> {/* kontejner za tekstualne elemente */}
                    <p className="prvi">Pixel Museum</p> {/* paragraf koji predstavlja naslov */}
                    <p>Experience gallery sighting from the comfort of your home!</p> {/* paragraf koji predstavlja 
                                                                                        opis */}
                </div>
                <img src={homeImage} alt="Home" className="home-image" /> {/* Dodavanje slike */}
            </div>
        </div>
    );
};

export default Home; // export, što omogućava njen uvoz i korišćenje u drugim delovima aplikacije
