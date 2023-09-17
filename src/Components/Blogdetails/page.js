import React from 'react';
import TextData from './TextData';
import Image from 'next/image';

const BlogDetails = () => {
  return (
    <div className="bg-[rgb(0,0,0)]  ">
      <div className="relative w-full h-[400px]">
        <Image
          src="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/challengesofsaas.png?updatedAt=1691395322413"
          fill
          className="object-cover"
          alt="banner image"
        />
      </div>
      <div className="p-3 md:p-16 lg:p-28 xl:p-40 2xl:p-60">
        <TextData />
      </div>
    </div>
  );
};
export default BlogDetails;
