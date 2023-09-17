import React from 'react';
import Image from 'next/image';
import Carousel from '../Carousel';
import Styles from './banner.module.css';

const Banner = ({ title, descryption }) => {
  return (
    <div className={Styles.main}>
      <div className={Styles.contain}>
        <div className={Styles.imagedata}>
          <div className={Styles.images}>
            <Image
              src="/assets/gifs/bannerBackground.gif"
              fill
              style={{
                objectFit: 'cover',
                filter: 'hue-rotate(45deg)',
                opacity: 0.7,
              }}
              sizes="30vw"
              alt="gif for services"
            />
          </div>
        </div>
        <section className="relative">
          <div className="flex flex-col gap-4 text-center mx-auto max-w-3xl">
            <h3>{title}</h3>
            <p className="overflow-hidden">{descryption}</p>
          </div>
        </section>
      </div>
      <Carousel />
    </div>
  );
};

export default Banner;
