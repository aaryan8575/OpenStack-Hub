/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import TextGradient from '@/components/TextGradient';
import clsx from 'clsx';

const data = [
  {
    id: 1,
    image:
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%20941%20(1).png?updatedAt=1691644288693',
    title: 'Customer-Centric Approach',
    desc: 'Commitment is what we are known for. Our approach of understanding client needs and expectations allows us to meet specific project timelines while maintaining quality standards.',
  },
  {
    id: 2,
    title: 'Proficient Developers Team',
    desc: 'Trust is the foundation of our success. Our team of expert developers possesses the expertise to transform your vision into reality, delivering solutions that are reliable, secure, and cutting-edge.',
  },
  {
    id: 3,
    title: 'Noteworthy Reputation',
    desc: 'Our Reputation as a reliable IT company with a strong track record of quality and punctual project delivery speaks for itself, garnering trust from clients and partners alike.',
  },
];
const WhyOpenstack = () => {
  return (
    <section className={styles.parentContainer}>
      <div className={clsx([styles.gridContent, 'items-center'])}>
        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
          <h4>What makes</h4>
          <h4>
            <TextGradient>OpenStack Hub</TextGradient>
          </h4>
          <h3>different?</h3>
        </div>
        <div>
          <p>
            At OpenStack Hub, not just we provide services but we make
            transformations happen. In the busy tech world, we stand out because
            we always focus on new ideas, care about our customers, and know a
            lot about what we do. When you&apos;re with us, you&apos;re not just
            someone who buys things from us; you&apos;re a friend on a journey
            to change things in a big way.
          </p>
        </div>
      </div>
      <div className={styles.gridContent}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              className="object-contain aspect-[1/2]"
              src="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group.png?updatedAt=1691649142485"
              fill
              sizes="(max-width: 768px) 100vw , 30vw"
              alt="graphic of mobile"
            />
          </div>
        </div>
        <div className={styles.rightContainer}>
          {data &&
            data.map((item) => {
              return (
                <div key={item.id} className={styles.singleContent}>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      sizes="30vw"
                      width={150}
                      height={150}
                    />
                  )}
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default WhyOpenstack;
