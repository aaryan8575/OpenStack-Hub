import Carousel from '@/components/Carousel';
import PhotoBanner from '@/components/PhotoBanner/photo.module.css';
import CompanyName from '../../../public/assets/icons/boltshift.svg';
import React from 'react';
import Cta from '@/components/Cta';
import Faq from '@/components/Faq';


import ContactUsPage from '@/components/ContactUs/styles.module.css';
const Logo = [
  {
    id: '1',
    svg: <CompanyName />,
  },
  {
    id: '2',
    svg: <CompanyName />,
  },
  {
    id: '3',
    svg: <CompanyName />,
  },
  {
    id: '4',
    svg: <CompanyName />,
  },
  {
    id: '5',
    svg: <CompanyName />,
  },
  {
    id: '6',
    svg: <CompanyName />,
  },
  {
    id: '7',
    svg: <CompanyName />,
  },
  {
    id: '8',
    svg: <CompanyName />,
  },
  {
    id: '9',
    svg: <CompanyName />,
  },
  {
    id: '10',
    svg: <CompanyName />,
  },
];
const faqData = {
  title: 'We&apos;re The Best And We Can Explain Why',
  description:
    'The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies.',
};
const ContactUs = () => {
  return (
    <div>
      <PhotoBanner
        title="Supporting Your IT Needs, Every Step of the Way"
        descryption="Our team is just one step away from being your guidance partner in every stride of your growth and success."
        image="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/contact_us_banner.png?updatedAt=1691385277298"
      />
      <ContactUsPage />
      <Cta
        heading="Elevate Your Business with Exceptional IT Services"
        description="Transform your business with our exceptional IT services. From infrastructure optimization to cybersecurity solutions, our expert team is here to help you drive growth and stay ahead of the competition. Take the first step towards success and schedule a consultation today. Elevate your business with us."
        // theme="Button"
      />
      <Faq data={faqData} />
    </div>
  );
};

export default ContactUs;
