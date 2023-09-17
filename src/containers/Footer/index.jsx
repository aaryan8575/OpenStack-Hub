'use client';
import Link from 'next/link';
import React from 'react';
import styles from './footer.module.css';
import InstagramIcon from '@/public/assets/icons/instagram.svg';
import FacebookIcon from '@/public/assets/icons/facebook.svg';
import TwitterIcon from '@/public/assets/icons/twitter.svg';
import LinkdinIcon from '@/public/assets/icons/Linkdin.svg';
import RightArrow from '@/public/assets/icons/chevron-right.svg';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const links = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Services', link: '/services' },
  { title: 'Career', link: '/career' },
  { title: 'Our Works', link: '/work' },
  // { title: 'Blog', link: '/blog' },
];

const Footer = () => {
  const pathname = usePathname();

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <footer className={clsx(['bgGradient'])}>
      <div className={styles.footer}>
        <div className="text-center header4">
          Revolutionize Your Business through Expert IT Services
        </div>
        <div className={styles.navLinks}>
          {links.map((item, index) => {
            return (
              <p key={index}>
                <Link
                  href={item.link}
                  className={`${styles.link} ${
                    pathname == item.link ? styles.activeLink : 'opacity-70'
                  }`}
                >
                  {item.title}
                </Link>
              </p>
            );
          })}
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.footerSection}>
            <span className="header5">Get In Touch</span>
            <p className="text-white">
              Reach Out & contact us for Transformative IT Solutions
            </p>
            <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
              <Form className={styles.inputWrapper}>
                <Field
                  className={clsx(
                    styles.input,
                    'hover:border-blue-500 focus:border-blue-500',
                  )}
                  type="email"
                  name="email"
                  placeholder="Your e-mail"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={clsx(styles.errorMessage, 'text-red-500')}
                />
                <button type="submit">
                  <RightArrow className="w-6 h-6" />
                </button>
              </Form>
            </Formik>
          </div>
          <div className={styles.seperator}></div>
          <div className={styles.footerSection}>
            <span className="header5">Stay Connect with us</span>
            <p className="text-white flex-wrap">
              B-604/605, Ganesh Glory 11, Jagatpur Rd, Sarkhej-Gandhinagar Hwy,
              nr. BSNL Office, Jagatpur, Ahmedabad, Gujarat 382470
            </p>
            <p className="text-white">076000 96432</p>
          </div>
          <div className={styles.seperator}></div>
          <div className={styles.footerSection}>
            <span className="header5">Social Media Links</span>
            <div className={styles.svg}>
              {[
                {
                  mediaName: 'Instagram',
                  icon: InstagramIcon,
                  link: 'https://www.instagram.com/openstackhub/?hl=en',
                },
                {
                  mediaName: 'Facebook',
                  icon: FacebookIcon,
                  link: 'https://www.facebook.com/',
                },
                {
                  mediaName: 'Twitter',
                  icon: TwitterIcon,
                  link: 'https://twitter.com/openstackhub?s=11',
                },
                {
                  mediaName: 'Linkedin',
                  icon: LinkdinIcon,
                  link: 'https://www.linkedin.com/company/openstack-hub/',
                },
              ].map((item, index) => (
                <Link
                  className="hover:scale-[125%] duration-300"
                  href={item.link}
                  target="_blank"
                  aria-label={`link for our ${item.mediaName} account `}
                  key={index}
                >
                  <item.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-center">
            © Openstack Hub. All Rights Reserved 2023. Licensing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
