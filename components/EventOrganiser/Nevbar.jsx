import React from 'react';
import styles from '../../styles/Home.module.css';
import { ReactComonent as HomeLogo } from '../../public/assets/img/common/Home.svg';
import { ReactComonent as AboutLogo } from '../../public/assets/img/common/about.svg';
import { ReactComonent as DownloadLogo } from '../../public/assets/img/common/download.svg';

const Nevbar = () => {
  return (
    <section className={styles.nevContainer}>
      <nav className={styles.nevBar}>
        <div className={styles.main_div}>
          <a href='#' className={styles.hometag}>
            <HomeLogo alt='Home Hero' />
            Our Home
          </a>
          <a href='#' className={styles.hometag}>
            {' '}
            <AboutLogo alt='Home Hero' />
            About us
          </a>
          <a href='#' className={styles.hometag}>
            {' '}
            <DownloadLogo alt='Home Hero' />
            Download
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Nevbar;
