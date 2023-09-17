import React from 'react';
import Image from 'next/image';
import TextGradient from '../TextGradient';
import Styles from './about.module.css';

const data = {
  heading: 'OpenStack Hub',
  subheading: 'Our Journey Unfolded',
  paragraph:
    'We offer a range of services to bring your digital ideas to life. Our team is skilled in web development, creating apps, designing user-friendly interfaces, and crafting custom software solutions. Whether its building websites, developing applications, designing how things look and feel, or making specialized software, weve got you covered.',
};

const AboutOpenStackhub = ({ reverse, heading, subheading, paragraph }) => {
  return (
    <section>
      <div
        className={`pt-20 pb-8 lg:flex justify-center items-start  ${
          reverse ? 'flex-row-reverse' : ''
        }`}
      >
        <div className={Styles.image}>
          <Image
            src="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Opanstack.png?updatedAt=1691385278559"
            fill
            sizes="(max-width: 768px) 100vw , 50vw"
            alt="working togather photo"
          />
        </div>

        <div className={Styles.content}>
          <h1>
            <TextGradient>{heading}</TextGradient>
          </h1>
          <div className="py-3">
            <h5>{subheading}</h5>
          </div>
          <div className="py-3">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOpenStackhub;
