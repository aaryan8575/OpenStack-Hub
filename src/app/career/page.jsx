import PhotoBanner from '@/Components/PhotoBanner/photo.module.css';
import React from 'react';
import AboutCareer from '@/containers/AboutCareer';
import Positions from '@/containers/Positions';

const Career = () => {
  return (
    <div>
      <PhotoBanner
        title="Join & Become one of us!"
        descryption="Get yourself immersed in our work ethics, where inspiration thrives and efficiency multiplies, endowing you with everything you need to excel."
        image="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Banner.png?updatedAt=1691385270627"
      />
      <AboutCareer />
      <Positions />
    </div>
  );
};

export default Career;
