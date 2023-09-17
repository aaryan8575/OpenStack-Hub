import React from 'react';
import Teamimage from '../../../public/assets/icons/sofia.svg';
import StarReview from '../../components/StarReview/index';
import Star from '../../../public/assets/icons/star.svg';
import styles from './styles.module.css';
import CareerRotateImage from '@/components/CareerRotateImage';

const data = [
  {
    id: '1',
    svg: <Star />,
  },
  {
    id: '2',
    svg: <Star />,
  },
  {
    id: '3',
    svg: <Star />,
  },
  {
    id: '4',
    svg: <Star />,
  },
  {
    id: '5',
    svg: <Star />,
  },
];

const AboutCareer = () => {
  return (
    <section className={styles.parent}>
      <CareerRotateImage />
      <div className={styles.content}>
        <h2 className="py-6">Your Growth Matters to Us!</h2>
        <p>
          Level up your growth by joining our tech team of enthusiastic and
          expert folks. We are a team of passionate and like-minded individuals
          who believes in collective development and team-wide progress.
        </p>
        <hr className={styles.line} />
        {/* <div className={styles.review}>
          <div className={styles.Starpage}>
            <StarReview data={data} />

            <div className={styles.basetext}>
              Based on <span className="text-neutral-100">10,000+ </span>
              reviews
            </div>
          </div>
          <div className={styles.teamsvgs}>
            <Teamimage className="w-20 h-20 min-h-0 min-w-0 absolute top-0 left-0" />
            <Teamimage className="w-20 h-20 min-h-0 min-w-0 absolute top-0 left-10" />
            <Teamimage className="w-20 h-20 min-h-0 min-w-0 absolute top-0 left-20" />
            <Teamimage className="min-h-0 min-w-0 relative w-20 left-3" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutCareer;
