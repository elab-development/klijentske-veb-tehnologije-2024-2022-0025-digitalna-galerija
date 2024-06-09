import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Pagination from '@mui/material/Pagination';

const Gallery: React.FC = () => {
    const [images, setImages] = useState([]);
    const [likedImages, setLikedImages] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1); // Početna stranica

    //hook za definisanje stanja komponente. images čuva trenutno prikazane slike, likedImages sadrži ID-jeve slika 
    //koje su korisniku sviđaju, a currentPage označava trenutnu stranicu paginacije

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };
    //funkcija koja se poziva prilikom promene stranice paginacije. Postavlja currentPage na novu vrednost kako bi se 
    //izvršio novi zahtev za dohvat slika




    //hook useEffect se koristi za izvršavanje efekta (u ovom slučaju dohvatanje slika) pri svakoj promeni 
    //currentPage;Dohvatanje slika se vrši preko Pexels API-ja, pri čemu se koristi trenutna stranica paginacije

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`https://api.pexels.com/v1/search?query=artpiece&per_page=8&page=${currentPage}`, {
                    headers: {
                        Authorization: 'f8eLZrQGnyHWu6wQ1DS8CG6IUX9QG6DTm3tgfXjFAnHKmt9U8xkKuZYB'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                setImages(data.photos);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImages();
    }, [currentPage]); // Ponovno dohvatanje slika kada se currentPage promeni

    const handleLikeClick = (id: number) => {
        if (likedImages.includes(id)) {
            setLikedImages(likedImages.filter(imageId => imageId !== id));
        } else {
            setLikedImages([...likedImages, id]);
        }
    };

    //funkcija koja se poziva prilikom klika na dugme "Like" ili "Unlike" za određenu sliku. Dodaje ili uklanja ID 
    //slike iz likedImages niza u zavisnosti od trenutnog stanja

    return (
        <div>
            <h1>Gallery</h1>
            {/*Slike se prikazuju u <div> elementima unutar .image-grid containera. Za svaku sliku se prikazuje 
            njen <img> tag, ime fotografa i dugme za "Like" ili "Unlike". */}
            <div className="image-grid">
                {images.map((image: any, index: number) => (
                    <div key={index}>
                        <img src={image.src.medium} alt={image.photographer} />
                        <p>{image.photographer}</p>
                        <button onClick={() => handleLikeClick(image.id)}>
                            {likedImages.includes(image.id) ? 'Unlike' : 'Like'}
                        </button>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {/*Pagination: Korišćenje komponente Pagination iz MUI biblioteke za prikaz paginacije. 
                Postavljanje count na broj stranica i page na trenutnu stranicu paginacije. */}
                <Pagination 
                    count={4} //broj stranica
                    page={currentPage}
                    onChange={handlePageChange} //za reakciju na promene stranice paginacije i poziva funkciju handlePageChange
                />
            </div>
        </div>
    );
};

export default Gallery;
