'use client';
import React, { useEffect } from 'react';
import style from './style.module.css';
import CrossSvg from '@/public/assets/icons/cross.svg';

const VideoModel = ({ src, setIsModalVisible }) => {
  const pauseVideo = () => {
    dialog.close();
    setIsModalVisible(false);
  };

  const listenKeyPress = (e) => {
    if (e.key === 'Escape') {
      pauseVideo();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', listenKeyPress);
    return () => {
      window.removeEventListener('keydown', listenKeyPress);
    };
  }, []);

  return (
    <form method="dialog" className={`${style.modelContainer} ${style.bgBlur}`}>
      <video
        method="dialog"
        className="modal-box relative"
        height={850}
        width={850}
        controls
        autoPlay
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        className="absolute top-6 right-6 text-white"
        onClick={pauseVideo}
      >
        <CrossSvg className="w-8 aspect-square bg-primary1 rounded-lg p-1" />
      </button>
    </form>
  );
};

export default VideoModel;
