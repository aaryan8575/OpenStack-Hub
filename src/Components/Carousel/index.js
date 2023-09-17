import React from 'react';
import styles from './carousel.module.css';
import CapgeminiLogo from '@/public/assets/icons/Capgemini.svg';
import SapientLogo from '@/public/assets/icons/Sapient.svg';
import NokiaLogo from '@/public/assets/icons/Nokia.svg';
import UpGradLogo from '@/public/assets/icons/Upgrad.svg';
import SimplilearnLogo from '@/public/assets/icons/Simplilearn.svg';
import AccentureLogo from '@/public/assets/icons/Accenture.svg';
import TechMahindraLogo from '@/public/assets/icons/TeachMahendra.svg';
import ThoughtworksLogo from '@/public/assets/icons/Thoughtworks.svg';
import InfosysLogo from '@/public/assets/icons/Infosys.svg';
import CognizantLogo from '@/public/assets/icons/Congnizant.svg';
import BufferZeroLogo from '@/public/assets/icons/BufferZero.svg';
import StrykerLogo from '@/public/assets/icons/Stryker.svg';
import V2Logo from '@/public/assets/icons/V2.svg';
import SpringDigitalLogo from '@/public/assets/icons/SpringDigital.svg';
import ExcellentWebWorldLogo from '@/public/assets/icons/ExellentWebWorld.svg';
import clsx from 'clsx';

const data = [
  // {
  //   id: '1',
  //   svg: <HpLogo />,
  // },
  // {
  //   id: '2',
  //   svg: <HCLLogo />,
  // },
  {
    id: '3',
    svg: <CapgeminiLogo />,
  },
  {
    id: '4',
    svg: <SapientLogo />,
  },
  // {
  //   id: '5',
  //   svg: <CssLogo />,
  // },
  {
    id: '6',
    svg: <NokiaLogo />,
  },
  {
    id: '7',
    svg: <UpGradLogo />,
  },
  {
    id: '8',
    svg: <SimplilearnLogo />,
  },
  {
    id: '9',
    svg: <AccentureLogo />,
  },
  {
    id: '10',
    svg: <TechMahindraLogo />,
  },
  {
    id: '11',
    svg: <ThoughtworksLogo />,
  },
  {
    id: '12',
    svg: <InfosysLogo />,
  },
  {
    id: '13',
    svg: <CognizantLogo />,
  },
  {
    id: '14',
    svg: <BufferZeroLogo />,
  },
  {
    id: '15',
    svg: <StrykerLogo />,
  },
  {
    id: '16',
    svg: <V2Logo />,
  },
  {
    id: '17',
    svg: <SpringDigitalLogo />,
  },
  {
    id: '18',
    svg: <ExcellentWebWorldLogo />,
  },
];

const Carousel = ({ direction, className }) => {
  return (
    <marquee
      loop
      className={clsx([
        'bg-primary3 border-y border-borderColor z-10',
        className,
      ])}
    >
      <div className={styles.carousel}>
        {data &&
          data.map((val) => (
            <div
              key={val.id}
              className={`${styles.content} ${styles.animateScroll} ${
                direction === 'reversed' ? styles.animatelReverse : ''
              }`}
            >
              <div className={styles.svgs}>{val.svg}</div>
            </div>
          ))}
      </div>
    </marquee>
  );
};

export default Carousel;
