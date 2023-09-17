'use client';
import React, { useEffect, useState } from 'react';
import TextGradient from '../TextGradient';
import styles from './style.module.css';

const AnimateWord = ({ data }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <span className={styles.animateTextWrapper}>
      <TextGradient key={data[currentWordIndex]} className={styles.animateText}>
        {data[currentWordIndex]}
      </TextGradient>
    </span>
  );
};

export default AnimateWord;
