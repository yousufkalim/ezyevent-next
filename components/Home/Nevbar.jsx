import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import homeLogo from '../../public/assets/img/common/Home.svg';
import aboutLogo from '../../public/assets/img/common/about.svg';
import easyUseLogo from '../../public/assets/img/common/easy.svg';
import usersLogo from '../../public/assets/img/common/users.svg';
import galleryLogo from '../../public/assets/img/common/gallery.svg';
import downloadLogo from '../../public/assets/img/common/download.svg';

const Nevbar = () => {
  return (
    <section className={styles.home}>
      <nav className='nevContainer'>
        <a href='#'>
          <Image src={homeLogo} alt='Home Hero' />
          Our Home
        </a>
        <a href='#'>
          {' '}
          <Image src={aboutLogo} alt='Home Hero' />
          About us
        </a>
        <a href='#'>
          {' '}
          <Image src={easyUseLogo} alt='Home Hero' />
          Easy Use
        </a>
        <a href='#'>
          {' '}
          <Image src={usersLogo} alt='Home Hero' />
          Two Users
        </a>
        <a href='#'>
          {' '}
          <Image src={galleryLogo} alt='Home Hero' />
          Gallery
        </a>
        <a href='#'>
          {' '}
          <Image src={downloadLogo} alt='Home Hero' />
          Download
        </a>
      </nav>
    </section>
  );
};

export default Nevbar;
