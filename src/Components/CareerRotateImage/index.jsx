import React from 'react';
import styles from './styles.module.css';
import TeamImg from '@/public/assets/icons/joinas.svg';
import CircleImg from '@/public/assets/icons/GroupCircle.svg';

const CareerRotateImage = () => {
  return (
    <div className={styles.backsvg}>
      <TeamImg className={styles.svg} />
      <CircleImg className={styles.Circle} />
      <div className={styles.Circletextpage}>
        <p className={styles.text}>
          Are you a Tech Geek Looking for an opportunity?
        </p>
        <span className={styles.text2}>Join Us!</span>
      </div>
    </div>
  );
};

export default CareerRotateImage;
