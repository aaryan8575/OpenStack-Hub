import React from 'react';
import TextGradient from '@/components/TextGradient';
import WorksGrid from '@/containers/WorksGrid';

const WorkGridContenet = () => {
  return (
    <section className="py-20 flex flex-col gap-10 md:gap-20">
      <div className="grid md:grid-cols-[40%_1fr] gap-8 justify-between">
        <div className="flex flex-col justify-center flex-1">
          <h3>Our Work at</h3>
          <h3>
            <TextGradient className="font-bold">OpenStack Hub</TextGradient>
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <p>
            OpenStack Hub empowers your business with cutting-edge SaaS Our
            commitment to using cutting-edge technology to help your business
            grow sets us apart. We don&apos;t believe in a one-size-fits-all
            approach; instead, we fit our solutions to meet your unique needs
            and requirements. Our creative designs and user-friendly interfaces
            ensure that your online presence stands out and leaves a lasting
            impression on your customers.
          </p>
        </div>
      </div>
      <WorksGrid />
    </section>
  );
};

export default WorkGridContenet;
