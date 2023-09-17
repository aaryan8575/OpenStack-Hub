'use client';
import React, { useRef, useState } from 'react';
import Staricon from '../../../public/assets/icons/Staricon.svg';
import Image from 'next/image';
import Sofiasvg from '../../../public/assets/icons/sofia.svg';
import Fabiosvg from '../../../public/assets/icons/fabio.svg';
import Louissvg from '../../../public/assets/icons/louis.svg';
import Angelasvg from '../../../public/assets/icons/angela.svg';
import styles from './testimonial.module.css';
import Playbtn from '../../../public/assets/icons/playbutton.svg';
import PlaybutBg from '../../../public/assets/icons/playouterside.svg';
import VideoModel from '../videomodel';

const imagedata = [
  {
    id: 1,
    svg: <Louissvg />,
    title: 'Mayur Panchal', 
    desc: 'CTO, Excellent Web-World',
    path: '/assets/video/video1.mp4',
    detail_desc:
      'OpenStack Hub has been game-changer for our business. Their expertise and support have enabled us to achieve seamless scalability and enhanced operational efficiency. Openstack Hub is the partner you need for digital transformation. Highly recommended!',
    image:
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/testimonial.png?updatedAt=1691385280914',
  },
  {
    id: 2,
    svg: <Fabiosvg />,
    title: 'Vijay Shah',
    desc: 'Founder, V2',
    path: '/assets/video/video1.mp4',
    detail_desc:
      "OpenStack Hub's mobile application development services have truly revolutionized our business. Their unparalleled expertise and unwavering support have paved the way for seamless scalability and elevated operational efficiency. A highly recommended choice!",
    image:
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/testimonial.png?updatedAt=1691385280914',
  },
  {
    id: 3,
    svg: <Angelasvg />,
    title: 'Linda Alexander',
    desc: 'CEO, Paylink',
    path: '/assets/video/video1.mp4',
    detail_desc:
      'OpenStack Hub has completely transformed our business landscape through their comprehensive range of services. Their unmatched expertise and dedicated support have empowered us with seamless scalability and heightened operational efficiency. We wholeheartedly recommend their exceptional services.',
    image:
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/testimonial.png?updatedAt=1691385280914',
  },
  {
    id: 4,
    svg: <Louissvg />,
    title: 'Ronak Bhavshar',
    desc: 'Founder, OpenStack Hub',
    path: '/assets/video/video1.mp4',
    detail_desc:
      "OpenStack Hub has completely changed how we do business with their customized software solutions. Their expertise and dedicated support have made our operations run smoother and allowed us to easily grow when needed. If you're looking to improve your digital transformation, OpenStack Hub is the partner you want by your side. We can't recommend them enough!",
    image:
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/testimonial.png?updatedAt=1691385280914',
  },
];
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <section className={styles.testimonial}>
        <dialog id="dialog">
          {isModalVisible && (
            <VideoModel
              src={imagedata[currentIndex]?.path}
              setIsModalVisible={setIsModalVisible}
            />
          )}
        </dialog>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>{imagedata[currentIndex]?.title}</h1>
            <p className={styles.p}>{imagedata[currentIndex]?.desc}</p>
            <div className="flex mb-4">
              <Staricon className="h-6 w-6" />
              <Staricon className="h-6 w-6" />
              <Staricon className="h-6 w-6" />
              <Staricon className="h-6 w-6" />
              <Staricon className="h-6 w-6" />
            </div>
            {/* <StarReview/> */}
            <p className={styles.p}>{imagedata[currentIndex]?.detail_desc}</p>
          </div>
          <div className={styles.image}>
            <div className={styles.cont_img}>
              <Image
                src={imagedata[currentIndex].image}
                alt="person image"
                height={600}
                width={500}
              />
              <PlaybutBg className={styles.bg_cont_cntnt} />
              <Playbtn
                className={styles.cont_cntnt}
                onClick={() => {
                  dialog.showModal();
                  setIsModalVisible(true);
                }}
              />
            </div>
          </div>
        </div>

        <ul className={styles.containdata}>
          {imagedata.map((x, index) => {
            return (
              <li
                key={x.id}
                className={styles.data}
                onClick={() => setCurrentIndex(index)}
              >
                <div key={x.id} className="hidden sm:flex">
                  {x.svg}
                </div>
                <div className={styles.dataWrapper}>
                  <h5 className={styles.title}>{x.title}</h5>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Testimonial;
