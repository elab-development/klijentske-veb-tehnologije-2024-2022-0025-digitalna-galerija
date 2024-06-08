import React from 'react';


interface Image {
    id: number;
    src: string;
    alt: string;
}

const images: Image[] = [
    { id: 1, src: '../assets/pixel.png', alt: 'Image 1' },
    { id: 2, src: 'image2.jpg', alt: 'Image 2' },
    { id: 3, src: 'image3.jpg', alt: 'Image 3' },
    { id: 4, src: 'image4.jpg', alt: 'Image 4' }
];

const mainImage: Image = images[0]; // Prva slika kao glavna slika

const Home: React.FC = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <div className="main-image">
                <img src={mainImage.src} alt={mainImage.alt} />
            </div>
            <div className="secondary-images">
                {images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
    );
};

export default Home;
