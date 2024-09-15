// pages/slideshow.js

import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  '/images/bicor.png',
  '/images/vert.jpg',
  '/images/bicor.png',
  // Ajoutez autant d'images que nécessaire
];

export default function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change d'image toutes les 2 secondes (2000 millisecondes)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`mySlides fade ${
            index === currentImageIndex ? 'block' : 'hidden'
          }`}
        >
          <Image width={500} height={35} src={image} className="w-500" alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
