'use client';
import React from 'react';
import Image from 'next/image';
import Navigate from '../../../public/assets/icons/pagenavigateicon.svg';
import Button from '@/components/Button';
import styles from './styles.module.css';
import clsx from 'clsx';
import Link from 'next/link';

const WorkComponent = ({ data, reversed }) => {
  return (
    <div className={styles.gridContainer}>
      <Link
        href={`/workDetails/${data.link}`}
        className={clsx([
          styles.imageContainer,
          { ['order-2']: reversed === true },
        ])}
      >
        <div className={styles.imageWrapper}>
          <Image
            className="object-contain"
            src={data.src}
            alt={`image of ${data.title}`}
            sizes="50vw"
            fill
          />
        </div>
      </Link>
      <Link href={`/workDetails/${data.link}`} className={styles.content}>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <div>
          <Button varient="transparent" className="text-body1" disabled>
            {data.btnTitle}
          </Button>
        </div>
        <div className={styles.linkWrapperMd}>
          <div className="w-4 sm:w-6 aspect-square">
            <Navigate />
          </div>
        </div>
      </Link>
      <div className={styles.linkWrapper}>
        <p className={styles.linkTitle}>{data.title}</p>
        <Link
          href={`/workDetails/${data.link}`}
          className="w-4 sm:w-6 aspect-square"
        >
          <Navigate />
        </Link>
      </div>
    </div>
  );
};

export default WorkComponent;
