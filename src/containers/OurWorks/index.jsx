import Image from 'next/image';
import React from 'react';
import WorkComponent from '../../components/WorkComponent';
import Navigate from '../../../public/assets/icons/pagenavigateicon.svg';
import styles from './style.module.css';
import Link from 'next/link';
import Button from '@/components/Button';
import Carousel from '@/components/Carousel';

const data = [
  {
    id: '1',
    src: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/unnamed.webp?updatedAt=1691666216241',
    title: 'FoodBOSS',
    link: 'foodboss',
    description:
      'Offers easy shopping options that allows user to shop online from their nearest stores. Be it groceries, home essentials, pet care or gardening, this app take cares of each of the needs and requirements of its customers.',
    btnTitle: 'SAC technology',
  },
  {
    id: '2',
    src: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2032.png?updatedAt=1691643306752',
    title: 'Better That',
    link: 'better-that',
    description:
      'Offers valuable and trendy merchandise shopping options that allows users to hand-pick outfits from a huge collection that too at users convenience. What sets them apart is their social deeds of donation for good cause and societal benefits. ',
    btnTitle: 'SAC technology',
  },
];

const OurWorks = () => {
  return (
    <>
      <section className={styles.parentContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.content}>
              <h3>Our Works</h3>
              <p className={styles.description}>
                Explore our accomplished live projects here, showcasing
                successful deliveries and exceptional outcomes. These endeavours
                highlight our commitment to excellence and effective execution.
              </p>
            </div>
            <Link href={`/work`} className={styles.leftImageWrapper}>
              <Image
                className="object-cover"
                src="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2030.png?updatedAt=1691644354052"
                alt="Picture of the author"
                sizes="50vw"
                fill
              />
              <div className="absolute top-0 right-0 p-4 w-full flex justify-end bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-transparent">
                <div className="w-4 sm:w-6 aspect-square">
                  <Navigate />
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.rightContainer}>
            {data &&
              data.map((item, index) => {
                return (
                  <WorkComponent
                    key={item.id}
                    data={item}
                    reversed={index % 2 !== 0 ? true : false}
                  />
                );
              })}
          </div>
        </div>
        {/* <div className="flex justify-end">
          <Link href="/work">
            <Button varient="transparent" size={'small'}>
              More Work...
            </Button>
          </Link>
        </div> */}
        <Carousel className="border rounded-lg mt-10" />
      </section>
    </>
  );
};

export default OurWorks;
