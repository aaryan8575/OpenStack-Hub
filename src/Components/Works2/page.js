import React from 'react';
import NavBar from '../NavBar/index';
import Descryption from '../Banner/index';
import WorksGrid from '../../containers/WorksGrid/index';
import Footer from '../../containers/Footer/index';
import Carousel from '../Carousel/index';
import styles from '../../components/Carousel/carousel.module.css';
import CompanyName from '../../../public/assets/icons/boltshift.svg';
import Backgrounddesign from '../../../public/assets/images/Banner_background.svg';
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

const sources = [
  ['ourwork.png', 'Web / App Development'],
  ['ourwork.png', 'UI Design'],
  ['ourwork.png', 'Web Development'],
  ['ourwork.png', 'Black Lives'],
  ['ourwork.png', 'E-commerce'],
  ['ourwork.png', 'Circly'],
  ['ourwork.png', 'Web Nature'],
  ['ourwork.png', 'Plantico'],
  ['ourwork.png', 'furniture'],
];

const Works = () => {
  return (
    <>
      <div className="absolute">
        <Backgrounddesign className="w-full vh-full" />
      </div>
      <work className="relative">
        <NavBar />
        <banner>
          <div className="py-8">
            <Descryption
              title="Learn More About Us And Our Business Product"
              descryption="OpenStack Hub takes pride in its team of professionals who are passionate about making a difference in the world of cloud computing. We are dedicated to providing exceptional service and continuously pushing the boundaries of what is possible with OpenStack. Together, we strive to empower organizations with the intelligent analytics suite that unlocks the true potential of their data."
            />
          </div>
          <div className={styles.carousel_main}>
            <Carousel Logo={Logo} />
          </div>
        </banner>
        <main>
          <section className="px-3 py-16 sm:px-8 sm:py-20 md:px-24 md:py-24">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-14 md:gap-20 lg:gap-60 mb-8 sm:mb-14 md:mb-20 lg:mb-24">
              <div className="flex flex-col justify-center">
                <h6>Our Work</h6>
                <h4 className="bg-gradient-to-r from-primary2 via-primary1 to-primary2 bg-clip-text text-transparent ">
                  OpenStack Hub
                </h4>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-justify">
                  OpenStack Hub empowers your business with cutting-edge SaaS
                  solutions that drive efficiency, innovation, and growth. With
                  our expertise, flexibility, and commitment to excellence, we
                  are your ideal partner in navigating the SaaS landscape. Join
                  us on this exciting journey and unlock the full potential of
                  your business with OpenStack Hub.
                </p>
              </div>
            </div>
            <WorksGrid sources={sources} />
          </section>
        </main>
        <Footer />
      </work>
    </>
  );
};

export default Works;
