import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

const sources = [
  {
    title: 'auco',
    link: '/auco',
    url: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
  },
  {
    title: 'FoodBoss',
    link: '/foodboss',
    url: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/unnamed.webp',
  },
  {
    title: 'Better That',
    link: '/better-that',
    url: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2032.png',
  },
  // {
  //   title: 'Black Lives',
  //   link: '/black-lives',
  //   url: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/workGrid2.png?updatedAt=1691385282606',
  // },
  // {
  //   title: 'E-commerce',
  //   link: '/e-commerce',
  //   url: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/workGrid2.png?updatedAt=1691385282606',
  // },
  // {
  //   title: 'Circly',
  //   link: '/circly',
  //   url: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/workGrid2.png?updatedAt=1691385282606',
  // },
  // {
  //   title: 'Web Nature',
  //   link: '/web-nature',
  //   url: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/workGrid2.png?updatedAt=1691385282606',
  // },
  // {
  //   title: 'Plantico',
  //   link: '/plantico',
  //   url: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/workGrid2.png?updatedAt=1691385282606',
  // },
  // {
  //   title: 'furniture',
  //   link: '/furniture',
  //   url: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/workGrid2.png?updatedAt=1691385282606',
  // },
];

const WorksGrid = () => {
  return (
    <div className={styles.gridbox}>
      {sources &&
        sources.map((item, index) => (
          <Link key={index} href={`workDetails/${item.link}`}>
            <div className="flex flex-col gap-4 bg-secondary2 bg-opacity-20 border-[1px] border-borderColor p-4 rounded-md overflow-hidden">
              <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  className="object-cover object-center"
                  src={item.url}
                  alt={`image of ${item.title}`}
                  priority
                  sizes="(max-width: 768px) 100vw , 50vws"
                  fill
                />
              </div>
              <div className="flex justify-center capitalize">
                <h6>{item.title}</h6>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default WorksGrid;
