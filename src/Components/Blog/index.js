'use client';
import Image from 'next/image';
import { useState } from 'react';

import Link from 'next/link';

const CustomLabel = ({ children, transparent }) => {
  return (
    <button
      className={`rounded-md border sm:w-36 border-white p-1  ${
        transparent ? 'bg-transparent' : 'bgGradient'
      }`}
    >
      <p className="body2 font-semibold px-2">{children}</p>
    </button>
  );
};

export default function Blog({ blogData }) {
  const [mainComp, setMainComp] = useState(blogData[0]);

  const changeMainBlog = (BlogId) => {
    const index = blogData.findIndex((x) => x.id == BlogId);
    setMainComp(blogData[index]);
  };

  return (
    <div className="flex flex-col lg:flex-row md:gap-3 md:justify-between my-14 md:my-24 ">
      <div className="md:flex-1 mb-8">
        <Link href="/blogDetails">
          <div className="relative lg:aspect-[3/4] min-h-[600px]">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src={mainComp.image}
                fill
                sizes="90vw"
                style={{ objectFit: 'cover' }}
                alt=""
              />
            </div>
            <div className=" px-4 absolute bottom-0">
              <div className="bg-secondary3 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 ">
                <CustomLabel>{mainComp.category}</CustomLabel>
                <div className="my-5 header5">{mainComp.header}</div>
                <p className="my-5 line-clamp-3">{mainComp.subheader}</p>
                <CustomLabel transparent> Read More </CustomLabel>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="md:flex-1 md:h-[700px] lg:h-[800px] xl:h-[900px]  grid grid-cols-2  lg:grid-cols-1  grid-flow-row gap-4">
          {blogData.map((data) => {
            return (
              <div
                key={data.id}
                onClick={() => changeMainBlog(data.id)}
                className="p-1 md:flex border border-borderColor rounded-xl cursor-pointer"
              >
                <div className="relative w-full h-32 md:h-full aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={data.image}
                    fill
                    sizes="(max-width: 768px) 50vw , 30vw"
                    style={{ objectFit: 'cover' }}
                    alt="side pictures"
                  />
                </div>
                <div className="p-2 w-full flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-4">
                    <CustomLabel size="small" className="text-caption">
                      {data.category}
                    </CustomLabel>
                    <div className="line-clamp-2 header6">{data.header}</div>
                  </div>
                  <p className="">{data.date}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* #####-----Do Not Remove-----###### */}
        {/* <div className=" w-full flex justify-center md:justify-end ">
          <div className="flex gap-4">
            <div>
              <LeftArrow className="inline-block w-6 h-4 mx-4" /> PREV
            </div>
            <div>
              NEXT <RightArrow className="inline-block w-6 h-4 mx-4" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
