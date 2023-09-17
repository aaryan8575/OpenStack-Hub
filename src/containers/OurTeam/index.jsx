'use client';
import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import RightArrow from '@/public/assets/icons/rightarrow.svg';
import LeftArrow from '@/public/assets/icons/leftarrow.svg';
import styles from './teams.module.css';
import clsx from 'clsx';

const teamData = [
  {
    id: '1',
    src: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2045.png?updatedAt=1692161429845',
    title: 'Harsh Patel',
    detail: 'Sr. Full Stack Developer',
  },
  {
    id: '2',
    src: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2046.png?updatedAt=1692161368424',
    title: 'Jil Sejpal',
    detail: 'Full Stack Developer',
  },
  { 
    id: '3',
    src: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/jay-kanjia.jpg?updatedAt=1692266686597',
    title: 'Jay Kanjia',
    detail: 'Front-End Developer',
  },
  { 
    id: '4',
    src: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/dishant.jpg?updatedAt=1692162044606',
    title: 'Korat Dishant',
    detail: 'Front-End Developer',
  },
  { 
    id: '5',
    src: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/jay-limbachiya.jpg?updatedAt=1692162088935',
    title: 'Jay Limbachiya',
    detail: 'Front-End Developer',
  },
  {
    id: '6',
    src: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/ankita.jpg?updatedAt=1692161556791',
    title: 'Ankita Trivedi',
    detail: 'Front-End Developer',
  },
];

const SliderCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={data.src}
          alt={data.title}
          priority
          sizes="(max-width: 768px) 100vw, 20vw"
          fill
        />
      </div>
      <div className={styles.details}>
        <h6>{data.title}</h6>
        <p>{data.detail}</p>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const scrollContainer = useRef();
  const scrollNow = (shift) => {
    scrollContainer.current.scrollLeft += shift;
  };

  return (
    <section className="relative max-w-screen my-10">
      <div
        ref={scrollContainer}
        className={clsx(['noScrollbar', styles.horizontal_media_scroller])}
      >
        <div className={clsx([styles.topCard, styles.card])}>
          <div className="flex flex-col gap-4">
            <h5>Meet The Genius Team</h5>
            <p>
              Our workspace is a blend of dynamic minds propelling us forward. A
              combination of creativity, expertise, and determination, our team
              transforms ideas into digital reality. From visionary architects
              to coding virtuosos and design maestros, we&apos;re the driving
              force behind seamless digital experiences.
            </p>
          </div>
          <div className="hidden gap-8 justify-end sm:flex">
            <button
              className="flex gap-2 items-center"
              onClick={() => {
                scrollNow(-340);
              }}
            >
              <span className="w-4 aspect-square">
                <LeftArrow />
              </span>
              <span>prev</span>
            </button>
            <button
              className="flex gap-2 items-center"
              onClick={() => {
                scrollNow(340);
              }}
            >
              <span>next</span>
              <span className="w-4 aspect-square">
                <RightArrow />
              </span>
            </button>
          </div>
        </div>
        {teamData &&
          teamData.map((item) => {
            return <SliderCard key={item.id} data={item} />;
          })}

        <div className={clsx([styles.card])}></div>
      </div>
    </section>
  );
};

export default OurTeam;
