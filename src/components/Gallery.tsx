import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
    const [images, setImages] = useState([]);
    const [likedImages, setLikedImages] = useState<number[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://api.pexels.com/v1/search?query=artpiece&per_page=8', {
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
    }, []);

    const handleLikeClick = (id: number) => {
        if (likedImages.includes(id)) {
            setLikedImages(likedImages.filter(imageId => imageId !== id));
        } else {
            setLikedImages([...likedImages, id]);
        }
    };

    return (
        <div>
            <h1>Gallery</h1>
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
        </div>
    );
};

export default Gallery;