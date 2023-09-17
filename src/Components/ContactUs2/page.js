import React from 'react';
import PhotoBanner from '@/components/PhotoBanner/index.jsx';
import Faq from '@/components/Faq';
import CompanyName from '../../../public/assets/icons/boltshift.svg';
import Button from '../Button/index.js';
import Footer from '../../containers/Footer/index.jsx';
import NavBar from '../NavBar';
import Carousel from '../Carousel';
import Contact_form from '../Contact_form';
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
    <div className="bg-primary3">
      <NavBar />

      <PhotoBanner
        image="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/contact_us_banner.png?updatedAt=1691385277298"
        title="Help And Support"
        descryption="The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies."
      />
      <Carousel Logo={Logo} />
      <div className="my-16 sm:my-24  mx-5 sm:mx-16 md:mx-28 lg:mx-40 ">
        <Contact_form />
      </div>
      {/* <div>
        <div className="flex justify-center flex-col lg:flex-row gap-5 mx-10 md:mx-20 lg:mx-30 sm:mx-15">
          <div className="pt-7 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h4>
                Contact Us If You Need
                <br />
                Our Support
              </h4>
              <p>
                If you're looking to make data-driven decisions and gain
                valuable insights into your business, then Intelligent Analytics
                Suite is the solution for you. With its advanced analytics
                capabilities, automation of manual tasks.
              </p>
            </div>
            <hr className="mt-2" />

            <h5 className="mt-3">Ahmedabad</h5>
            <div className="mt-2">
              <p>B-604/605, Ganesh Glory 11 Jagatpur</p>
              <p> Rd, Sarkhej - Gandhinagar Hwy, nr.</p>
              <p>BSNL Office, Jagatpur, Ahmedabad,</p>
              <p> Gujarat 382470</p>
              <p className="mt-3">076000 96432</p>
            </div>
          </div>
          <div className="border-2 flex flex-col justify-center border-primary1 rounded bg-primary3 mt-3 shadow-[0_2px_10px_#5C19E9]">
            <div className="pt-4 px-4">
              <label>NAME : </label>
            </div>
            <div className="pt-2 px-4">
              <div>
                <input
                  className="pt-5 flex"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="pt-4 px-4">
              <label>EMAIL : </label>
            </div>
            <div className="pt-2 px-4">
              <div>
                <input
                  className="pt-5 flex"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="pt-4 px-4">
              <label>MESSAGE : </label>
            </div>
            <div className="pt-3 px-4">
              <div>
                <textarea
                  className="pt-5 flex border-primary1 bg-primary3 border-2 rounded-lg pl-2 resize-y shadow-[0_2px_10px_#5C19E9]"
                  type="text"
                  id="message"
                  name="message"
                  rows="5"
                  cols="40"
                  placeholder="Your Text"
                />
              </div>
            </div>
            <div className="flex justify-center py-3">
              <Button className="hidden" title="APPLY NOW" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="my-32 text-secondary1">
        <Faq data={faqData} />
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
