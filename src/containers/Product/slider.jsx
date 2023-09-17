'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// const images = [
//   'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
//   'https://ik.imagekit.io/wn0w23bqx/Banner.png?updatedAt=1691668218299s',
//   'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
//   'https://ik.imagekit.io/wn0w23bqx/Banner.png?updatedAt=1691668218299s',
//   'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
// ];

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="default-carousel" className="relative w-full h-full bg-secondary2">
      {/* Carousel wrapper */}
      <div className="relative h-full overflow-hidden rounded-lg">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute w-full h-full transform ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            data-carousel-item
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
