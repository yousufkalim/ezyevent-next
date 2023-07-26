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
    <section className={styles.nevContainer}>
      <nav className={styles.nevBar}>
        <div className={styles.main_div}>
          <a href='#' className={styles.hometag}>
            <img src={homeLogo} alt='Home Hero' />
            Our Home
          </a>
          <a href='#' className={styles.hometag}>
            {' '}
            <Image src={aboutLogo} alt='Home Hero' />
            About us
          </a>
          <a href='#' className={styles.hometag}>
            {' '}
            <Image src={easyUseLogo} alt='Home Hero' />
            Easy Use
          </a>
          <a href='#' className={styles.hometag}>
            {' '}
            <Image src={usersLogo} alt='Home Hero' />
            Two Users
          </a>
          <a href='#' className={styles.hometag}>
            {' '}
            <Image src={galleryLogo} alt='Home Hero' />
            Gallery
          </a>
          <a href='#' className={styles.hometag}>
            {' '}
            <Image src={downloadLogo} alt='Home Hero' />
            Download
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Nevbar;
