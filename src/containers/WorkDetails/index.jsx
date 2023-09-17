import React from 'react';
import Image from 'next/image';
import styles from './workDetails.module.css';

const DigitalServices = ({ data }) => {
  return (
    <section>
      <div className={styles.workDetails}>
        <div className="w-full md:w-[30%] overflow-x-scroll md:overflow-hidden noScrollbar">
          <div className="py-3 flex md:block">
            {data?.workImages?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="relative w-60 shrink-0 aspect-square md:w-full rounded-xl overflow-hidden m-2 md:mx-0 md:my-4 "
                >
                  <Image
                    src={data}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="images of work"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:w-[70%] relative">
          <div className="sticky top-16 left-0">
            <h4 className="pt-10">{data?.title}</h4>
            <p className=" mt-6 mb-2 md:mb-8">{data?.description}</p>
            {/* <p className="font-bold">
              <TextGradient>Details</TextGradient> */}
            {/* </p> */}
            {data?.details?.map((data, index) => {
              return (
                <div key={index}>
                  <h5 className="py-2 lg:py-8">{data?.title} </h5>
                  <p>{data?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
