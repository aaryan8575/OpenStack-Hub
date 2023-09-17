import React from 'react';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import AboutOpenStackhub from '../../components/AboutOpenStackhub';
import Numbers from '../../containers/Numbers';
import WorldMap from '../../containers/WorldMap';
import Banner from '@/components/Banner';
import OurTeam from '@/containers/OurTeam';

const About = () => {
  const faqData = {
    title: "We're The Best And We Can Explain Why",
    description:
      'We dont believe in a one-size-fits-all approach; instead, we fit our solutions to meet your unique needs and requirements.',
  };
  return (
    <>
      <Banner
        title="Dive Deeper: Unmasking our Digital Finesse"
        descryption="At Openstack Hub, we take pride in our expertise in creating smooth and user-friendly software, mobile apps, and websites. Our team is dedicated to guiding you through every step of the development process, from planning and designing to launching and maintaining the final product."
      />
      <AboutOpenStackhub
        heading={'OpenStack Hub'}
        paragraph={
          'Founded in the year 2019, Openstack Hub embarked on a remarkable journey in the dynamic landscape of Information Technology. Our story is one of passion, and an unwavering commitment to crafting exceptional digital experiences.  From the outset, our vision was clear - to bridge the gap between cutting-edge technology and user-centric design. Armed with determination and a shared zeal for pushing boundaries, we set out to redefine the way people interacted with software, mobile apps, and websites'
        }
        subheading={'Our Journey Unfolded'}
      />
      <Numbers />
      <OurTeam />
      <Faq data={faqData} />
      <WorldMap />
      <Cta
        heading="Elevate Your Business with Exceptional IT Services"
        description="We are here to simplify the complex ideas to simple by providing you with smooth technological solutions that would enlarge your success."
        varient="secondary"
      />
    </>
  );
};

export default About;
