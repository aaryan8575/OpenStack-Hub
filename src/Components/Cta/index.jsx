import React from 'react';
import Right from '../../../public/assets/icons/rightarrow.svg';
import Left from '../../../public/assets/icons/leftarrow.svg';
import Cta_left from '../../../public/assets/icons/cta_left.svg';
import Cta_right from '../../../public/assets/icons/cta_right.svg';
import Cta_top from '../../../public/assets/icons/cta_top.svg';
import Styles from '../Cta/cta.module.css';
import Button from '../Button/index';
import clsx from 'clsx';
import Link from 'next/link';

const Cta = ({ heading, description, varient }) => {
  return (
    <div
      className={clsx([
        {
          ['bg-gradient-to-b from-[#222222] to-[#010101]']:
            varient === 'secondary',
        },
        {
          ['bgGradient']: varient !== 'secondary',
        },
      ])}
    >
      <section className={Styles.box}>
        <div className={Styles.content}>
          <h5>{heading}</h5>
          <p className="pt-5">{description}</p>
        </div>
        <Cta_left className={Styles.cta_left} />
        <Cta_right className={Styles.cta_right} />
        <Cta_top className={Styles.cta_top} />
        <div className={Styles.btn}>
          <Link href="/contactus">
            <div>
              <Button varient="transparent">Get a quote!</Button>
            </div>
          </Link>
          <Link href="/contactus ">
            <div>
              <Button varient="primary" outlined>
                Contact US
              </Button>
            </div>
          </Link>
        </div>
        <Cta_top className={Styles.cta_bottom} />
      </section>
    </div>
  );
};

export default Cta;
