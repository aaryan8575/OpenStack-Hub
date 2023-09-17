import React from 'react';
import styles from './style.module.css';
import clsx from 'clsx';

const TextGradient = ({ children, className }) => {
  return (
    <span className={clsx([styles.textGradient, className])}>{children}</span>
  );
};

export default TextGradient;
