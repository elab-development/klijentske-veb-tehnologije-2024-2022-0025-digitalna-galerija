import React from 'react';
import homeImage from '../images/home.png'; // Uvoz slike
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div className="text-container">
                <p className="prvi">Pixel Museum</p>
                <p>Experience gallery sighting from the comfort of your home!</p>
            </div>
            <img src={homeImage} alt="Home" className="home-image" /> {/* Dodavanje slike */}
        </div>
    );
};

export default Home;
