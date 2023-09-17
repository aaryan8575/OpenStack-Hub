import React from 'react';
import styles from './style.module.css';

const SectionDescription = ({ heading, description }) => {
  return (
    <div className={styles.parentContainer}>
      <h4 className={styles.text}>{heading}</h4>
      <p className={styles.text}>{description}</p>
    </div>
  );
};

export default SectionDescription;
