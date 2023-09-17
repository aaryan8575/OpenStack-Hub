import React from 'react';
import Banner from '@/components/Banner';
import WorkGridContenet from '@/containers/WorkGridContenet';

const Work = () => {
  return (
    <>
      <div>
        <Banner
          title="Discover Our Story and Products – Let's Make Progress Together"
          descryption=" Our commitment to using cutting-edge technology to help your business grow sets us apart. We don't believe in a one-size-fits-all approach; instead, we fit our solutions to meet your unique needs and requirements. Our creative designs and user-friendly interfaces ensure that your online presence stands out and leaves a lasting impression on your customers."
        />
      </div>
      <WorkGridContenet />
    </>
  );
};

export default Work;
