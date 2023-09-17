import React from 'react';
import Image from 'next/image';

export default function index() {
  return (
    <div className="bg-[url('/assets/icons/bannerBg.svg')] bg-cover bg-center">
      <section className="">
        <div className="relative flex flex-col py-20 ">
          <div className="flex items-center pb-5">
            <div>
              <p>AI DEVELOPMENT</p>
            </div>
            <div>
              <hr className="h-1 w-8 mx-4 opacity-[0.5] sm:mt-0 md:mx-2 sm:mx-4"></hr>
            </div>
            <div>
              <p>APRIL 18, 2023</p>
            </div>
          </div>
          <h3 className="mt-4 sm:text-left">Challenges Of Saas</h3>
          <p className="pt-5 overflow-hidden md:w-[72%] text-justify">
            In today&apos;s fast-paced digital world, businesses and individuals
            alike rely heavily on software to streamline operations, enhance
            productivity, and drive growth.
          </p>
        </div>
      </section>
      <div className="relative w-full h-[400px]">
        <Image
          src="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/challengesofsaas.png?updatedAt=1691395322413"
          fill
          priority
          className="object-cover"
          alt="banner image"
        />
      </div>
    </div>
  );
}
