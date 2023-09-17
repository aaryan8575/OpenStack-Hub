'use client';
import React, { useState } from 'react';
import Logo from '@/public/assets/icons/Openstacklogo.svg';
import Link from 'next/link';
import Button from '../../components/Button';
import HamIcon from '@/public/assets/icons/hamburger.svg';
import CrossIcon from '@/public/assets/icons/cross.svg';
import styles from './style.module.css';
import { usePathname } from 'next/navigation';

const navbarData = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  {
    title: 'Services',
    link: '/services',
  },
  { title: 'Career', link: '/career' },
  {
    title: 'Works',
    link: '/work',
  },
  // { title: 'Blog', link: '/blog' },
];

const Header = () => {
  const [navToggler, setNavToggler] = useState(false);
  const pathname = usePathname();

  const handleNavToggler = () => {
    setNavToggler(!navToggler);
  };
  const closeNavToggler = () => {
    setNavToggler(false);
  };

  return (
    <header style={{ height: '5rem' }} className={styles.header}>
      <Link href="/" aria-label="Open stackhub logo">
        <Logo />
      </Link>
      <div className={styles.navToggler} onClick={handleNavToggler}>
        {navToggler ? (
          <CrossIcon className={styles.togglerIcon} />
        ) : (
          <HamIcon className={styles.togglerIcon} />
        )}
      </div>
      <nav
        className={`${
          navToggler ? styles.visibleNavbar : styles.hiddenNavBar
        } ${styles.navBar}`}
      >
        {navbarData &&
          navbarData.map((item) => {
            return (
              <Link
                key={item.title}  
                href={item.link}
                className={`subtitle1 text-white hover:opacity-100 duration-300 ${
                  styles.link
                } ${pathname === item.link ? styles.activeLink : 'opacity-70'}`}
                onClick={closeNavToggler}
              >
                {item.title}
              </Link>
            );
          })}
        <Link
          href="/contactus"
          // className={styles.link}
          onClick={closeNavToggler}
        >
          <Button varient={'primary'}>connect</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
