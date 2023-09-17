import Choosedata from '@/components/WhyOpenstack';
import DigitalServices from '@/containers/DigitalServices';
import Faq from '@/components/Faq';
import React from 'react';
import AboutOpenStackhub from '../../components/AboutOpenStackhub';
import Banner from '@/components/Banner';

const Services = () => {
  // const faqData = {
  //   title: 'We&apos;re The Best And We Can Explain Why',
  //   description:
  //     'The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies.',
  // };
  return (
    <div>
      <Banner
        title="Explore Our Comprehensive Service Offerings"
        descryption="OpenStack Hub is more than just a service and product-based IT company; it's a hub of  comprehensible transformation. Our team comprises passionate professionals who are driven to redefine the possibilities of web, app & software development. We take immense pride in delivering exceptional services that go beyond expectations. With a relentless commitment to excellence, we push the boundaries of what's achievable with OpenStack technology. Together, we embark on a journey to empower organizations with cutting-edge solutions that unleash the full potential of their data."
      />
      <AboutOpenStackhub
        reverse
        heading={'OpenStack Hub'}
        subheading={'Offering Range of Services'}
        paragraph={
          'We offer a range of services to bring your digital ideas to life. Our team is skilled in web development, creating apps, designing user-friendly interfaces, and crafting custom software solutions. Whether its building websites, developing applications, designing how things look and feel, or making specialized software, weve got you covered.'
        }
      />
      <DigitalServices />
      {/* <Choosedata />
      <Faq /> */}
    </div>
  );
};

export default Services;
