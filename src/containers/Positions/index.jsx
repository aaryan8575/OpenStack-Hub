import React from 'react';
import Arrow from '@/public/assets/icons/CrossAroow.svg';
import Image from 'next/image';
import Button from '../../components/Button';
import clsx from 'clsx';
import styles from './style.module.css';
import Link from 'next/link';

const teamData = [
  {
    id: '1',
    duration: 'FullTIME',
    location: 'Ahmedabad',
    degination: 'Sr. Full Stack Developer',
    img: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Team.png?updatedAt=1691385280682',
  },
  {
    id: '2',
    duration: 'FullTIME',
    location: 'Ahmedabad',
    degination: 'SEO Specialist',
    img: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/645b455199ba3444971b5442_Avatar%205.jpg?updatedAt=1692276399315',
  },
  {
    id: '3',
    duration: 'FullTIME',
    location: 'Ahmedabad',
    degination: 'Sr. Full Stack PHP Developer',
    img: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/645b4543205bc7bd6b41d27d_Avatar%206.jpg?updatedAt=1692276307193',
  },
  // {
  //   id: '4',
  //   duration: 'FullTIME',
  //   location: 'Ahmedabad',
  //   degination: 'Security Engineer',
  //   img: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Team.png?updatedAt=1691385280682',
  // },
];

const SingleElement = ({ data }) => {
  return (
    <div
      className={clsx([
        'relative w-full border-b-[1px] border-white md:px-4 py-8 flex flex-col gap-4 md:flex-row',
        styles.parent,
      ])}
    >
      <div
        className={clsx([
          'relative w-full aspect-square border-[1px] border-borderColor md:hidden md:top-0 md:right-14 rounded-md overflow-hidden md:opacity-0',
          styles.animateImage,
        ])}
      >
        <Image
          className="object-cover object-center"
          src={data.img}
          alt="image"
          sizes="(max-width: 768px) 100vw , 10vw"
          fill
        />
      </div>
      <div className="flex justify-between md:items-center w-full">
        <div className="flex gap-4 md:gap-12 md:items-center flex-col md:flex-row">
          <div className="flex gap-4 items-center">
            <Button varient="transparent" className={styles.btn} disabled>
              {data.duration}
            </Button>
            <Button varient="transparent" className={styles.btn} disabled>
              {data.location}
            </Button>
          </div>
          <div>
            <h6 className="capitalize font-bold">{data.degination}</h6>
          </div>
        </div>
        <div className="py-2">
          <Arrow />
        </div>
      </div>
    </div>
  );
};

const Positions = () => {
  return (
    <section className="py-20 md:mb-20 flex flex-col gap-10">
      <div className={styles.teampage}>
        <div className={styles.header}>
          <h4 className={styles.richtext}>
            Find a Role that fits your Skills and our Requirements:
          </h4>
          <p className={styles.description}>
            Are you ready to join a team that values your skills along with
            experience? Do not miss the opportunity and Apply now!
          </p>
        </div>
      </div>
      <div className="flex flex-col border-t-[1px]">
        {teamData &&
          teamData.map((item, index) => (
            <Link
              key={index}
              href={'/careerDetails/[id]'}
              as={`/careerDetails/${item.id}`}
            >
              <SingleElement data={item} />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Positions;
