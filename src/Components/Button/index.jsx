'use client';
import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

const Button = ({
  children,
  size,
  varient,
  outlined,
  disabled,
  onClick,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx([
        { [`bgGradient`]: varient === 'primary' },
        { [`bg-secondary2`]: varient === 'secondary' },
        {
          [`bg-secondary2 bg-opacity-30 border-[1px] border-borderColor`]:
            varient === 'transparent',
        },
        { [`border-[1px] border-white`]: outlined },
        { ['hover:opacity-80']: disabled !== true },
        styles.btn,
        className,
        size,
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
