import React from 'react';
import Button from '@/components/Button';
import styles from './banner.module.css';
import AnimateWord from '@/components/AnimateWord';
import SplineComponent from '@/components/SplineComponent';
import Link from 'next/link';

const HomeBanner = () => {
  const words = ['Brilliance', 'Creativity', 'Innovation', 'Success'];

  return (
    <div className="relative min-h-screen w-screen flex flex-col gap-4 justify-between -mt-[5rem] pt-[5rem] overflow-hidden bg-[url('/assets/icons/bannerBg.svg')] bg-cover bg-center">
      <section className="flex flex-1 flex-col md:flex-row gap-4 items-center md:gap-0 py-20">
        <div className="flex flex-1 basis-3/5 gap-8 flex-col w-full max-w-3xl">
          <span className="flex gap-2 flex-wrap">
            <h3 className="text-left flex flex-col">
              <span className="flex flex-wrap gap-2 overflow-hidden">
                <span>A Realm where</span>
                <AnimateWord data={words} />
              </span>
              <span>converges with Code</span>
            </h3>
          </span>
          <div className="text-left line-clamp-3">
            <p>
              Openstack Hub stands as a seasoned master in crafting flawlessly
              smooth Software and Apps Development, while also weaving
              extraordinary Website Development services. Our prowess extends
              beyond just development; we cater to clients from concept
              inception through deployment and maintenance, delivering unrivaled
              world-class solutions.
            </p>
          </div>
          <div className=" md:w-[90%]">
            <div className="flex items-stretch gap-4">
              <p className={styles.gradientContent}>
                Ignite Your Business Potential with Cutting-Edge IT Services –
                Unleash Success Today!
              </p>
            </div>
            <Link href="/contactus">
              <Button
                varient="primary"
                className="flex-1 uppercase font-semibold my-5 md:my-10"
              >
                Get a Quote!
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex-1 basis-2/5 aspect-square h-full right-0 -z-10 opacity-70">
          <div className="h-[300px] w-[300px]  md:h-full md:w-full ">
            <SplineComponent />
          </div>
        </div>
      </section>
      <div className="bg-primary1 flex items-center ">
        <marquee behavior="" direction="" scrollamount="5">
          <h6 className="flex gap-16 p-5" style={{ lineHeight: 0 }}>
            <span>
              Your Go-To Solution for Seamless Software, Apps, and Website
              Development!
            </span>
            <span>
              Your Go-To Solution for Seamless Software, Apps, and Website
              Development!
            </span>
            <span>
              Your Go-To Solution for Seamless Software, Apps, and Website
              Development!
            </span>
          </h6>
        </marquee>
      </div>
    </div>
  );
};

export default HomeBanner;
