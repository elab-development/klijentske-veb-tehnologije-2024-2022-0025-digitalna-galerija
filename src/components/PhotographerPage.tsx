import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PhotographerPage.css';

const PhotographerPage: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [images, setImages] = useState<any[]>([]);
    const [filteredImages, setFilteredImages] = useState<any[]>([]);

    useEffect(() => {
        console.log('Fetching images for query: artpiece');
        const fetchImages = async () => {
            try {
                const response = await fetch('https://api.pexels.com/v1/search?query=artpiece&per_page=80', {
                    headers: {
                        Authorization: 'f8eLZrQGnyHWu6wQ1DS8CG6IUX9QG6DTm3tgfXjFAnHKmt9U8xkKuZYB'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                console.log('Fetched images:', data.photos);
                setImages(data.photos);
            } catch (error) {
                console.error(error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        if (name && images.length > 0) {
            const filtered = images.filter(image => image.photographer === name);
            setFilteredImages(filtered.slice(0, 12)); // Prikaži samo prvih 12 slika
        }
    }, [name, images]);

    return (
        <div>
            <h1>Posts by {name}</h1>
            <div className="photographer-image-grid">
                {filteredImages.map((image, index) => (
                    <div key={index} className="photographer-image-card">
                        <img src={image.src.medium} alt={image.photographer} />
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotographerPage;