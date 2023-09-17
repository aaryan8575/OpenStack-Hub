import React from 'react';
import Groupicon from '../../../public/assets/icons/Group 940.svg';
import AppDevelopicon from '../../../public/assets/icons/AppDevelopment.svg';
import Ecommerce from '../../../public/assets/icons/Ecommerce.svg';
import Blockchain from '../../../public/assets/icons/Blockchain.svg';
import HRLine from '../../../public/assets/icons/hrline.svg';
import styles from './service.module.css';
import SectionDescription from '../SectionDetail';



const appdata = [
  {
    id: 1,
    svg: <Groupicon />,
    title: 'Web Development',
    desc: 'Create dynamic and engaging websites using the latest technologies to enhance user experience and drive online presence.',
  },
  {
    id: 2,
    svg: <AppDevelopicon />,
    title: 'App Development',
    desc: 'Build contemporary and user-friendly mobile applications for iOS and Android platforms to cater to the growing demand for on-the-go solutions.',
  },
  {
    id: 3,
    svg: <Ecommerce />,
    title: 'UI/UX',
    desc: 'Take advantage of our excellent UI/UX design services to improve your digital products. Our skilled designers create user interfaces that are seamless and engaging so as to increase customer retention.',
  },
  {
    id: 4,
    svg: <Blockchain />,
    title: 'Custom Software',
    desc: 'Experience the future of IT solutions with our customized services. Unlock unique efficiency and growth with technology thats as unique as your vision.',
  },
];

const Service = () => {
  return (
    <section className={styles.service}>
      <SectionDescription
        heading="Navigate the Digital Landscape with Confidence through Our IT Services"
        description="From innovative solutions to seamless integration, we're your
          partner in navigating the digital landscape, ensuring your business
          stays ahead of the curve."
      />
      <div className={styles.data}>
        {appdata.map((x) => {
          return (
            <>
              <div key={x.id} className={styles.title}>
                <div>{x.svg}</div>
                <h4>{x.title}</h4>
                <p className={styles.pgraph2}>{x.desc}</p>
              </div>
            </>
          );
        })}
      </div>
      <HRLine />
    </section>
  );
};

export default Service;
